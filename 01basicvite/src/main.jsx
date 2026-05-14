import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";

const areactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "click to visit google",
);


createRoot(document.getElementById("root")).render(
    
    areactElement
);
