
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Cart from "../components/Cart";
import * as actions from "../actions";

const mapStateToProps = (state) => {
    return {
         items: state.cartState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Cart)