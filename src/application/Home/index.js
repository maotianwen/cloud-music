import React from "react";
import { renderRoutes } from "react-router-config";
import request from "@/api/request.js";

function Home(props) {
  const { route } = props;
  return (
    <div>
      <div>Home</div>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default React.memo(Home);
