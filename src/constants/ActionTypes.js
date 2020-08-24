//Auth const
export const SIGNUP_USER = 'signup_user';
export const SIGNUP_USER_SUCCESS = 'signup_user_success';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_success';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_success';
export const INIT_URL = 'init_url';
export const SHOW_MESSAGE = 'show_message';
export const GET_POSTS = 'get_posts'
export const POST_LIST_SUCCESS = 'post_list_success'
export const DELETE_POST = 'delete_post'
export const DELETE_POST_SUCCESS = 'delete_post_success'


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