import React from "react";
import { Redirect } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import PrivateFM from "../application/PrivateFM";
import Friend from "../application/Friend";

export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render: () => <Redirect to={"/recommend"} />,
      },
      {
        path: "/recommend",
        component: Recommend,
      },
      {
        path: "/singers",
        component: Singers,
      },
      {
        path: "/rank",
        component: Rank,
      },
      {
        path: "/findmusic",
        component: Recommend,
      },
      {
        path: "/privatefm",
        component: PrivateFM,
      },
      {
        path: "/friend",
        component: Friend,
      },
    ],
  },
];
