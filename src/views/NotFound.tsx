import React from "react";

import { Button } from "../components/UI/Button/Button";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        style={{ width: "50%", height: "50%" }}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif"
        alt="gif404"
      />
      <span>Page "{location.pathname}" not Found...</span>
      <span>But see this gif is amazing!</span>
      <Link to="/">
        <Button>Get Back</Button>
      </Link>
    </div>
  );
};
export default NotFound;