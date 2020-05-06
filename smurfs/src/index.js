import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';

import App from "./components/App";
import "./index.css";

const store = createStore()


ReactDOM.render(<App />, document.getElementById("root"));
