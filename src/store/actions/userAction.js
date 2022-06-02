import axiosInstance from '../../common/axios';

// action - state management
import * as actionTypes from '../actions';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.LOGIN_REQUEST
        });

        const { data } = await axiosInstance.post('/api/auth/admin/', { email, password });

        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: data
        });
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
    } catch (error) {
        dispatch({
            type: actionTypes.LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        });
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: actionTypes.LOG_OUT });
    localStorage.clear();
    // document.location.href = '/login';
};
