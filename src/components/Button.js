import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[15px]" };
const variants = {
  fill: {
    gray_100_01: "bg-gray-100_01",
    indigo_600: "bg-indigo-600 text-white-A700",
  },
  outline: {
    gray_100_01: "bg-gray-100_01",
    indigo_600: "bg-indigo-600 text-white-A700",
    indigo_700: "border border-indigo-600 text-indigo-600 border-solid",
    red_700: "border border-red-700 border-solid text-red-700",
    green_600: "border border-green-600 border-solid text-green-600",
    black_900: "border border-black-900 border-solid text-black-900",
    light_blue_A700:
      "border border-light_blue-A700 border-solid text-light_blue-A700",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-3", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  size = "xs",
  variant = "outline",
  color = "indigo_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "gray_100_01",
    "indigo_600",
    "gray_100_01",
    "red_700",
    "green_600",
    "black_900",
    "light_blue_A700",
  ]),
};

export { Button };
