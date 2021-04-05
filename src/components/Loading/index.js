import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loading = () => (
  <div>
    {console.log("this weas printted loading")}
    <CircularProgress />
  </div>
);

export default Loading;
