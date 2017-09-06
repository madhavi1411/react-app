
import React from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";


export default function Header(props) { 
        return (
            <div>
            
            <h1>{props.title}</h1>
            
            <NavLink to="/" 
                     exact
                     className="button"
                     activeClassName="success">
                     
                    Home
            </NavLink>

          
            <NavLink to="/products" 
                      
                     className="button"
                     activeClassName="success">
                    Products
            </NavLink>


            <NavLink to="/cart" 
                      
                     className="button"
                     activeClassName="success">
                    Cart [{props.cartSize}]
            </NavLink>


            <NavLink to="/contact" 
                      
                     className="button"
                     activeClassName="success">
                     
                    Contact
            </NavLink>

            <NavLink to="/about" 
                      
                     className="button"
                     activeClassName="success">
                     
                    About
            </NavLink>


            {
                props.authenticated ? (
                        <button onClick={() => props.authActions.logout()} >
                            Logout
                        </button>
                   ) : (
                        <NavLink to="/login" 
                                className="button"
                                activeClassName="success">
                                Login
                            </NavLink>
                    )
            } 

           
            <hr />
        </div>
        )
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}