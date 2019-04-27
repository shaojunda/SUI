import React, {Fragment, ReactElement} from 'react';
import './dialog.scss'
import {Icon} from "../index";
import {scopedClassMaker} from "../classes";

interface Props {
  visible: boolean;
  buttons: Array<ReactElement>;
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

  return (
    props.visible ?
      <Fragment>
        <div className={scopedClass("mask")} onClick={onClickMask}/>
        <div className={scopedClass()}>
          <div className={scopedClass('close')} onClick={onClickClose}>
            <Icon name="close"/>
          </div>
          <header className={scopedClass('header')}>提示</header>
          <main className={scopedClass('main')}>{props.children}</main>
          <footer className={scopedClass('footer')}>
            {props.buttons.map((button, index) => {
              React.cloneElement(button, {key: index})
            })}
          </footer>
        </div>
      </Fragment> :
      null
  )
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;
