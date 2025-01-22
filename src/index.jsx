import "./styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";

import PageFrame from "./screens/PageFrame";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <PageFrame/>
    </React.StrictMode>
    );
