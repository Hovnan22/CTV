import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../fonts/selection.json";

const Icon = props => {
  console.log(props)
  const { color, size, icon } = props;
  return (
    <IcomoonReact
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

export default Icon;
