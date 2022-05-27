// action - state management
import * as actionTypes from './actions';

export const initialState = {
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token'),
    isAuthenticated: localStorage.getItem('access_token') ? true : false,
    isLoading: false,
    isAdmin: localStorage.getItem('access_token') ? true : false,
    isSeller: localStorage.getItem('access_token') ? true : false
};

// ==============================|| CUSTOMIZATION REDUCER ||============================== //

const userReducer = (state = initialState, action) => {
    let id;
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            id = action.id;
            return {
                ...state,
                isLoading: true,
                isAuthenticated: false
            };
        case actionTypes.LOGIN_SUCCESS:
            localStorage.setItem('access_token', action.payload.access);
            localStorage.setItem('refresh_token', action.payload.refresh);
            return {
                access_token: action.payload.access,
                refresh_token: action.payload.refresh,
                isLoading: false,
                isAuthenticated: true
            };
        case actionTypes.LOGIN_FAIL:
            return {
                isLoading: false,
                isAuthenticated: false,
                error: action.payload
            };
        case actionTypes.LOG_OUT:
            return {};
        default:
            return state;
    }
};

export default userReducer;
