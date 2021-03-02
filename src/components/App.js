import React, { useState } from "react";
//import "../stylesheets/App.scss";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import CardGenerator from "./CardGenerator.js";

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/cardgenerator' component={CardGenerator} />
            </Switch>
        </>
    );
}

export default App;
