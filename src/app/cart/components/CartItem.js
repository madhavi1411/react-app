
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class CartItem extends PureComponent {
    constructor(props) {
        super(props);

        //initialize from props
        this.state = {
            qty: props.item.qty
        }
    }
    
    componentDidMount() {
        
    }

    onUpdate() {
        this.props.onUpdate(this.props.item.id,
                            this.state.qty)
    }

    onRemove() {
        this.props.onRemove(this.props.item.id);
    }

    onQtyChange(e) {
        let value = e.target.value;
        console.log("value ", value);

        this.setState({
            qty: value
        })
    }
    
    render() {
        
        let {item} = this.props;

        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <input  
                            value={this.state.qty}
                            type="number"
                            onChange={(e) => this.onQtyChange(e)}
                            
                             />
                     
                     </td>
                <td> 
                  
                    <button onClick={()=> this.onUpdate()}>
                        Update
                    </button> 


                    <button onClick={()=> this.onRemove()}>
                        Remove
                    </button> 


                      </td>
            </tr>
        )
    }
} 


CartItem.defaultProps = {
    
}

CartItem.propTypes = {
    
}