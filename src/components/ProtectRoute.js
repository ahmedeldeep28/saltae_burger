import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectRoute({ component }) {
  let { isUser } = useSelector((state) => state.user);
  if (!isUser) {
    return <Navigate to="/" />;
  } else {
    return component;
  }
}

export default ProtectRoute;
