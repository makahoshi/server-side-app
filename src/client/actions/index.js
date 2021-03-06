import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async dispatch => {
    const response = await axios.get('http://react-ssr-api.herokuapp.com/users');
  //const response = await axios.get('http://react-ssr-api.herokuapp.com/users/xss');

    dispatch({
        type: FETCH_USERS,
        payload: response
    });
};