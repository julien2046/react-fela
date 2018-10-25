// Import dependencies
import React from "react";
import { createComponent } from "react-fela";

const ButtonGroupStyles = () => {
  // Define styles for containing elements
  let style = {
    "> h2": {
      margin: "0 0 0.5em"
    },
    "> div": {
      display: "flex",
      flexWrap: "wrap"
    }
  };

  return style;
};

// Create a styled component
const ButtonGroup = createComponent(ButtonGroupStyles);

// Use the styled component to define a container
const ButtonGroupComponent = props => (
  <ButtonGroup>
    <h2>Themes</h2>
    <div>{props.children}</div>
  </ButtonGroup>
);

export default ButtonGroupComponent;
