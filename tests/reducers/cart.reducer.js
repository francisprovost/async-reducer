export default function cartReducer(state = {}, action) {
    switch (action.type) {
    case 'ADD_ITEM':
        return {
            ...state,
            items: [
                ...(state.items || []),
                action.item
            ]
        };
    default:
        return state;
    }
}
