import React, {Fragment, ReactElement, ReactNode} from 'react';
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
  enableMask?: boolean;
}

const scopedClass = scopedClassMaker('sui-dialog');

const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (event) => {
    props.onClose(event);
  };

  const onClickMask: React.MouseEventHandler = (event) => {
    if (props.closeOnClickMask) {
      props.onClose(event);
    }
  };
  const result = props.visible &&
    <Fragment>
      {
        props.enableMask && <div className={scopedClass("mask")} onClick={onClickMask}/>
      }
      <div className={scopedClass()}>
        <div className={scopedClass('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={scopedClass('header')}>提示</header>
        <main className={scopedClass('main')}>{props.children}</main>
        {
          props.buttons && props.buttons.length > 0 &&
          <footer className={scopedClass('footer')}>
            {props.buttons && props.buttons.map((button, index) =>
              React.cloneElement(button, {key: index})
            )}
          </footer>
        }
      </div>
    </Fragment>;
  return (
    ReactDOM.createPortal(result, document.body)
  )
};

Dialog.defaultProps = {
  closeOnClickMask: false,
  enableMask: true
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog visible={true} buttons={buttons} onClose={() => {
    close();
    afterClose && afterClose();
  }}>{content}</Dialog>;
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>OK</button>
  const close = modal(content, [button])
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons)
};

export {alert, confirm, modal};
export default Dialog;
