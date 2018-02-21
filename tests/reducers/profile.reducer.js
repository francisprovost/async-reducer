export default function profileReducer(state = {}, action) {
    switch (action.type) {
    case 'ADD_NAME':
        return {
            ...state,
            name: action.name
        };
    default:
        return state;
    }
}
