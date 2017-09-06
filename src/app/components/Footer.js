
import React from "react";
import PropTypes from "prop-types";

export default function Footer(props) { 
        return (
            <div> 
                <hr />

            <p>Copyrights@{props.year}, {props.company}</p>
            </div>
        )
} 


Footer.defaultProps = {
    company: "React App, NodeSense"
}

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    company: PropTypes.string
    
}