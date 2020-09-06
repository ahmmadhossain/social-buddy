import React from "react";
import Button from "@material-ui/core/Button";

const NotFound = () => {
  return (
    <div>
      <h1>Oops! Page not found</h1>
      <h4>404 ERROR</h4>
      <Button variant="outlined" color="primary" href={`/`}>
        Goto All Post
      </Button>
    </div>
  );
};

export default NotFound;
