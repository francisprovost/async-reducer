import { combineReducers } from 'redux';

export default function addReducer(store, name, reducer) {
    if (!store.asyncReducers) {
        store.asyncReducers = {};
    }

    store.asyncReducers[name] = reducer;
    store.replaceReducer(combineReducers({
        ...store.asyncReducers
    }));
}
