import { combineReducers } from 'redux';

/**
 * Add all of your reducers when you need it
 * @param {ReduxStore} store You redux store
 * @param {String} name The Reducer's name
 * @param {Function} reducer Your reducer
 */
export default function addReducer(store, name, reducer) {
    if (!store.asyncReducers) {
        store.asyncReducers = {};
    }

    store.asyncReducers[name] = reducer;
    store.replaceReducer(combineReducers({
        ...store.asyncReducers
    }));
}
