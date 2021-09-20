import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import BroadCastVideo from "./BroadCastVideo";
import UploadForm from "./UploadForm";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/upload/video" component={UploadForm} />
        <Route path="/broadcast/video" component={BroadCastVideo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
