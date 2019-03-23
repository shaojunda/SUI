import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon";

const fn: React.MouseEventHandler = e => {
  console.log(e.target);
};

ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn} />
    {/* <Icon name="alipay" /> */}
    {/* <Icon name="qq" /> */}
  </div>,
  document.querySelector("#root")
);
