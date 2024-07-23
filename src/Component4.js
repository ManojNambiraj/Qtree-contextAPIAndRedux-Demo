import React, { useContext } from "react";
import { UserContext } from "./Context";

function Component4(props) {
  const value = useContext(UserContext);
 
  return (
    <div>
      <h2>It's my Component 4 {value}</h2>
    </div>
  );
}

export default Component4;
