import react, { useState } from "react";

const Togglable = (props) => {
  const [visible, setVisible] = useState(false);
  const hiddenWhenVisible = { display: visible ? "none" : "" };
  const showWhenVisible = { display: visible ? "" : "none" };

  return (
    <div>
      <div style={hiddenWhenVisible}>
        <button onClick={() => setVisible(true)}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={() => setVisible(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Togglable