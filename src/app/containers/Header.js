
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import Header from "../components/Header";
import * as authActions from "../auth/Actions";

const mapStateToProps = (state) => {
    return {
         authenticated: state.authState.auth.authenticated,
         cartSize: state.cartState.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (Header)