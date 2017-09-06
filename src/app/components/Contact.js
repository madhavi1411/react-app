
import React, {Component} from "react";
import PropTypes from "prop-types";

//for SEO, Title bar update
import {Helmet} from "react-helmet";

export default class Contact extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
                <Helmet>
                        <title>Contact</title>
                </Helmet>
            <h2>Contact</h2>
            </div>
        )
    }
} 


Contact.defaultProps = {
    
}

Contact.propTypes = {
    
}