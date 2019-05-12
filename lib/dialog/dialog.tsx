import React, {Fragment, ReactElement, ReactFragment, ReactNode} from 'react';
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";
import ReactDOM from 'react-dom';

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>;
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean;
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
  const x = props.visible ?
    <Fragment>
      <div className={scopedClass("mask")} onClick={onClickMask}/>
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
    </Fragment> :
    null;
  return (
    ReactDOM.createPortal(x, document.body)
  )
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const alert = (content: string) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog onClose={close} visible={true}>{content}</Dialog>;
  const div = document.createElement("div");
  document.body.append(div);
  ReactDOM.render(component, div)
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    yes && yes();
  };
  const onNo = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    no && no();
  };
  const component = (
    <Dialog onClose={() => {onNo()}}
            visible={true}
            buttons={[
              <button onClick={onYes}>yes</button>,
              <button onClick={onNo}>no</button>
            ]}>
      {content}
    </Dialog>);
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
};

const modal = (content: ReactNode | ReactFragment) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = <Dialog onClose={() => {close()}} visible={true}>
    {content}
  </Dialog>;
  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);
  return close;
};

export {alert, confirm, modal};
export default Dialog;
