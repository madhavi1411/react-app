
import React from "react";
import PropTypes from "prop-types";

export default function Like(props) { 
        return (
            <div> 
            <h2>Likes: {props.count}</h2>

            <div>
            <button onClick={() => props.onLike(1) }>
                +1
            </button>
            <button onClick={() => props.onLike(-1) }>
                -1
            </button>
            </div>
            
            </div>
        )
} 


Like.defaultProps = {
    
}

Like.propTypes = {
    count: PropTypes.number.isRequired
}