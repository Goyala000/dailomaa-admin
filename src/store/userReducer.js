// action - state management
import * as actionTypes from './actions';

export const initialState = {
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token'),
    isAuthenticated: localStorage.getItem('access_token') ? true : false,
    isLoading: false,
    isSuperAdmin: null,
    isSeller: null,
    userInfo: {}
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
                isAuthenticated: true,
                isSuperAdmin: action.payload.is_superadmin,
                isSeller: action.payload.is_seller,
                userInfo: {
                    firstName: action.payload.firstname,
                    lastName: action.payload.lastname,
                    mobile: action.payload.mobile
                }
            };

        case actionTypes.LOGIN_FAIL:
            return {
                isLoading: false,
                isAuthenticated: false,
                isSuperAdmin: null,
                isSeller: null,
                userInfo: {},
                error: action.payload
            };
        case actionTypes.LOG_OUT:
            return {};
        default:
            return state;
    }
};

export default userReducer;
