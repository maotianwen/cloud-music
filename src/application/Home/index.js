import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Player from "@/components/Player";

const bodyStyle = {
  margin: "60px 0 0 240px",
};

function Home(props) {
  const { route } = props;
  return (
    <div>
      <Header />
      <SideBar />
      <div style={bodyStyle}>{renderRoutes(route.routes)}</div>
      <Player />
    </div>
  );
}

export default React.memo(Home);
