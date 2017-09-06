import React from "react";

import {BrowserRouter as Router, 
        Route, 
        Switch}
    from "react-router-dom";

import App from "./App";


import Home from "./components/Home";

import Cart from "./cart/containers/Cart";

import ProductRoutes from "./product/Routes";

import Login from "./auth/components/Login";

import AuthRoute from "./auth/components/AuthRoute";



//About & Contact components loaded into brower
//only on click on the route

//import About from "./components/About";
//import Contact from "./components/Contact";

import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>Loading ...</div>
    )
}

const LoadableAboutComponent = Loadable({
    loader: () => import('./components/About'),
    loading: Loading,
  });
  

const LoadableContactComponent = Loadable({
    loader: () => import('./components/Contact'),
    loading: Loading,
});

//Route config

export default function Routes () {
    return (
    <Router>
        <App>
            <Switch>


            <Route path="/" 
                   exact
                        component={Home} />

            <Route path="/about"
                       component={LoadableAboutComponent} />


            <Route path="/contact"
                       component={LoadableContactComponent} />

            <Route path="/cart"
                       component={Cart} />

            <Route path="/products"
                       component={ProductRoutes} />


            <Route path="/login"
                       component={Login} />

            </Switch>
        </App>
    </Router>
    )
}