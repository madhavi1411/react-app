import React, {Component} from "react";
import PropTypes from "prop-types";

import Like from "./Like";

//for SEO, Title bar update
import {Helmet} from "react-helmet";

export default class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            members: ['Krish', 
                      'Gayathri',
                      'Nila',
                      'Venkat'],

            name: "",
            likes: 1000
        }
    }
    
    componentDidMount() {
        //using ref example
        this.inputElement.focus();
    }

    onValueChange(e) {
        let value = e.target.value;
        console.log(value);

        this.setState({
            name: value
        })
    }

    add() {
        //Immutable list
        this.setState({
            members: [...this.state.members,
                      this.state.name]
        })
    }

    onLikeChange(step) {
        this.setState({
            likes: this.state.likes + step
        })
    }
    
    render() {
        let list = this.state.members
                   .map ( (m, i) => ( <li key={i} > 
                       {m}
                   </li>))

        return (
            <div> 
                <Helmet>
                        <title>About</title>
                </Helmet>
            <h2>About</h2>

            <input name="name"
                   value={this.state.name}

                   ref={ (domElement) => this.inputElement = domElement}

                   onChange={(e) => this.onValueChange(e)} 
              />
            <button onClick={()=> this.add()}>
                Add
            </button>

            <h4>Members</h4>
            <ul>
                {list}
            </ul>

            <Like count={this.state.likes}
                  onLike={(step) => this.onLikeChange(step)}>
            </Like>

            </div>
        )
    }
} 


About.defaultProps = {
    
}

About.propTypes = {
    
}