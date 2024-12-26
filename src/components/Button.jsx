import React from "react";

const Button = ({
  text,
  border = "#000",
  marginTop = "1.5rem",
  icon,
  borderBottomOnly = false,
}) => {
  return (
    <button
      style={{
        border: borderBottomOnly ? "none" : `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
        marginTop: marginTop,
      }}
      className={`w-full text-base flex gap-2 justify-center items-center md:p-3 p-1 mt-6 md:mt-14 font-CreatoDisplay button-53`}
      role="button"
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
