import React from "react";

function Checkbox() {
  return (
    <div style={{display: 'flex'}}>
      <input type="checkbox" id="remember" />
      <label for="remember">Remember Me</label>
    </div>
  );
}

export default Checkbox;
