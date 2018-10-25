// Import dependencies
import { createComponent } from "react-fela";
import { darken } from "polished";

// Define the button
const Button = ({ active, theme: { mainColor } }) => {
  // Set a default colour for the button
  let buttonColor = "#ecf0f1";

  // If the button is active, use the main theme colour instead
  if (active) {
    buttonColor = mainColor;
  }

  // Create a style object
  const style = {
    appearance: "none",
    border: "none",
    background: buttonColor,
    boxShadow: `0 5px ${darken(0.2, buttonColor)}`,
    cursor: "pointer",
    flex: 1,
    fontFamily: "inherit",
    fontSize: "1em",
    fontWeight: "bold",
    padding: "1em",
    margin: "0 0 calc(5px + 1em)",
    outline: "none"
  };

  // Define hover/focus states

  return style;
};

// Return a styled Button component
export default createComponent(Button, "button");
