import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Player from "@/components/Player";

function Home(props) {
  const { route } = props;
  return (
    <div>
      <Header />
      <SideBar />
      {renderRoutes(route.routes)}
      <Player />
    </div>
  );
}

export default React.memo(Home);
