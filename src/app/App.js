
import React, {Component} from "react"; //from node_modules

import Header from "./containers/Header";
import Footer from "./components/Footer";

import PropTypes from "prop-types";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    getChildContext() {
        console.log("get context called");

        return {
            appTitle: "React App",
            theme: "white"
        }
    }

  
    render() {

        return (
            <div>
                
                <Header title="React App"  />

                {/*  view container
                
                    children passed from route
                 */}

                <div>
                    {this.props.children}
                </div>

                <Footer year={2017}  />
            </div>
        )
    }
}


App.childContextTypes = {
    appTitle: PropTypes.string,
    theme: PropTypes.string
}

