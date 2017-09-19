
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductWidget from "../components/ProductWidget";
import * as actions from "../Actions";
import * as cartActions from "../../cart/actions";

const mapStateToProps = (state) => {
    return {
         
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)  ,
        cartActions: bindActionCreators(cartActions, dispatch)  ,
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductWidget)