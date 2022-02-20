import React from "react";

const styles = {
  outline: "none",
  border: "none",
  cursor: "pointer",
};

function Button({ children, className ,onClick}) {
  return (
    <button style={styles} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
