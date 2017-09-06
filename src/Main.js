//bootstrapping
 
import {render} from "react-dom";
import React from "react";

//polyfill for fetch
//support fetch for old browsers

import "whatwg-fetch";

//below entries from config/development or production.json

 import config from "config";
 console.log("CONFIG ", config);
 console.log("PRODUCTION ", PRODUCTION);
 console.log("VERSION ", VERSION);

import store from "./app/Store";

import {Provider} from "react-redux";

import Routes from "./app/Routes";


//Provider has getChildContext, expose store to child comp
render( <Provider store={store}> 
                  <Routes />
        </Provider>, 
       document.getElementById("root") //real dom
      )