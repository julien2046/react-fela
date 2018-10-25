// Import dependencies
import { createComponent } from "react-fela";

// Define layout styles
const Layout = () => ({
  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  fontSize: "18px",
  padding: "0 1em",
  "@media (min-width: 600px)": {
    margin: "0 auto",
    maxWidth: "850px",
    width: "80%"
  }
});

export default createComponent(Layout);
