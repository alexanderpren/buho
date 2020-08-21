//Auth const
export const SIGNUP_USER = 'signup_user';
export const SIGNUP_USER_SUCCESS = 'signup_user_success';
export const SIGNIN_USER = 'signin_user';
export const SIGNIN_USER_SUCCESS = 'signin_user_success';
export const SIGNOUT_USER = 'signout_user';
export const SIGNOUT_USER_SUCCESS = 'signout_user_success';
export const INIT_URL = 'init_url';
export const SHOW_MESSAGE = 'show_message';


export const backendServer = 'http://localhost:3000/';

export const getErrorMessage = (e) => {
    let errorString = 'Se presentaron los siguientes Errores:';
    let data = []
    
    if (!e.response) {
      throw e;
    }
  
    Object.keys(e.response.data).map(field => {
      if (Array.isArray(e.response.data[field])) {
        e.response.data[field].map(message => {
          data.push({field: field, message: message});
        })
      } else {
        data.push({field: field, message: e.response.data[field]});
      }
    })
    
    return {message: {
      status: e.response.status,  
      message: errorString,
      data: data
    }};
  }