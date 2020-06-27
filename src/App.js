import React from "react";
import { GlobalStyle } from "./style";
import { renderRoutes } from "react-router-config";
import routes from "./routes/index.js";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
