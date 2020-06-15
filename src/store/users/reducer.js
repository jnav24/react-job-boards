import { ADD_USER, REMOVE_USER } from './types';

const getDefaultState = () => {
    return {
        email: '',
        company: {
            name: '',
            description: '',
        },
    };
};

const initialState = getDefaultState();

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, ...action.payload };
        case REMOVE_USER:
            return getDefaultState();
        default:
            return state;
    }
};

export default usersReducer;
