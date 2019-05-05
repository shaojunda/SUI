import React, {useState} from 'react';
import Dialog, {alert} from './dialog';

export default function () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  return (
    <div>
      <div>
        <h1>Example 1</h1>
        <button onClick={() => setVisible(!visible)}>click</button>
        <Dialog visible={visible} buttons={
          [
            <button onClick={() => {setVisible(false)}}>1</button>,
            <button onClick={() => {setVisible(false)}}>2</button>
          ]
        } onClose={() => {setVisible(false)}}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>Example 2</h1>
        <button onClick={() => setVisible2(!visible)}>click</button>
        <Dialog visible={visible2} closeOnClickMask={true} buttons={
          [
            <button onClick={() => {setVisible2(false)}}>1</button>,
            <button onClick={() => {setVisible2(false)}}>2</button>
          ]
        } onClose={() => {setVisible2(false)}}>
          <strong>hi</strong>
        </Dialog>
      </div>
      <div>
        <h1>Example 3</h1>
        <button onClick={() => {alert('1')}}>alert</button>
      </div>
    </div>
  )
}
