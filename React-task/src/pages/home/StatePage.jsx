import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const StatePage = () => {
  const location = useLocation();
  console.log(location);

  //Get Query Params
  const params = location.search;
  console.log("Query Parameter:", params);

  //Get Online Status
  const onlineStatus = location.state?.online;
  console.log("Online Status:", onlineStatus);

  //const getParams = params.get('online')
  //console.log(getParams);

  return (
    <div>
      <h1> State / Query Params</h1>
      <h4>
        User Status:
        <p style={onlineStatus ? { color: "green" } : { color: "red" }}>
          {onlineStatus ? "online" : "disconected"}
        </p>
      </h4>
    </div>
  );
};

export default StatePage;
