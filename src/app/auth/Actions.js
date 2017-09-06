import * as authApi from './AuthApi';
import * as ActionTypes from "./ActionTypes";

const storage = window.localStorage;

export const login = (username, password) => {
  return function(dispatch) {
      console.log("user ", username);
      
      let user = {username, password};

      authApi.login(user)
      .then((data) => {
            storage.setItem("token",data.token)

            let identity = JSON.stringify(data.identity);
            storage.setItem("identity", identity)

            let roles = JSON.stringify(data.identity.roles);

            storage.setItem("roles", roles)
            
           console.log(data);
           alert(data.token);

           //read from local storage
           //redirect

           dispatch({type: ActionTypes.LOGGED_IN})
    });
  };
};

export const logout = () => {
  return (dispatch) => {
     storage.removeItem("token");
     storage.removeItem("identity");
     storage.removeItem("roles");


     dispatch({type: ActionTypes.LOGGED_OUT}) 
  };
};
