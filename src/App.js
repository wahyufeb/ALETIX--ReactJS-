import React from 'react';
import "./App.css"

import Home from "./components/home/Home";
import Tickets from "./components/tickets/Tickets";
import DetailFilm from "./components/detail-film/DetailFilm";
import Registration from "./components/auth/registration/Registration";
import Login from "./components/auth/login/Login";

import { Route, Switch  } from "react-router-dom";
import {MobileView} from "react-device-detect"
import {useMediaQuery} from "react-responsive";

const App =()=>{
  const isMobile = useMediaQuery({query:"(max-width:425px)"});
  return (
    <div>
      {isMobile && (
        <MobileView>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/registration" component={Registration}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/tickets" component={Tickets}></Route>
            <Route path="/detail-film/:id" component={DetailFilm}></Route>
          </Switch>
      </MobileView>
      )}
    </div>
  );
}

export default App;
