import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../Store/hooks";
import { useLocation } from "react-router-dom";
import apiReducer from "../../Store/Reducers/apiReducer";
import { nodeMetric } from "../../Queries";
import Box from "@mui/material/Box";

import { Modules } from "../../Interfaces/ICluster";
import { IReducers } from "../../Interfaces/IReducers";

import Graph from "react-graph-vis";
import cpIcon from "./icons/control-plane-icon.svg";
import nsIcon from "./icons/namespace-icon.svg";
import nodeIcon from "./icons/node-icon.svg";
import deplIcon from "./icons/deployment-icon.svg";
import svcIcon from "./icons/service-icon.svg";
import podIcon from "./icons/pod-icon.svg";

const Visualizer = (props: Modules) => {
  return (<div></div>);
};

export default Visualizer;
