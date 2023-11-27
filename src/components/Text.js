import React from "react";

const sizeClasses = {
  txtInterMedium16LightblueA700: "font-inter font-medium",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtInterMedium18: "font-inter font-medium",
  txtInterRegular1417: "font-inter font-normal",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium24: "font-inter font-medium",
  txtInterMedium20Indigo600: "font-inter font-medium",
  txtInterMedium18Black9007f: "font-inter font-medium",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterRegular124: "font-inter font-normal",
  txtInterRegular16Bluegray900: "font-inter font-normal",
  txtInterMedium16Black900: "font-inter font-medium",
  txtInterMedium16Green600: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium15: "font-inter font-medium",
  txtInterSemiBold25: "font-inter font-semibold",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtInterMedium20Bluegray100: "font-inter font-medium",
  txtPoppinsSemiBold24Black9007f: "font-poppins font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium15WhiteA700: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterSemiBold24: "font-inter font-semibold",


  txtInterSemiBold24Gray90002: "font-inter font-semibold",
  txtPoppinsSemiBold11: "font-poppins font-semibold",
  txtInterMedium16Bluegray400: "font-inter font-medium",

  txtInterRegular18: "font-inter font-normal",
};
const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};
export { Text };
