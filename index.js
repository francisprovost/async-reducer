import { combineReducers } from 'redux';

/**
 * Add all of your reducers when you need it
 * @param {ReduxStore} store You redux store
 * @param {Object} reducers Reducers object with the format { reducerName: reducer }
 */
function addReducers(store, reducers) {
    if (!store.asyncReducers) {
        store.asyncReducers = {};
    }

    store.asyncReducers = {
        ...store.asyncReducers,
        ...reducers
    };

    store.replaceReducer(combineReducers({
        ...store.asyncReducers
    }));
}


/**
 * Add a reducer when you need it
 * @param {ReduxStore} store You redux store
 * @param {String} name The Reducer's name
 * @param {Function} reducer Your reducer
 */
function addReducer(store, name, reducer) {
    if (!store.asyncReducers) {
        store.asyncReducers = {};
    }

    store.asyncReducers[name] = reducer;
    store.replaceReducer(combineReducers({
        ...store.asyncReducers
    }));

    addReducers(store, {
        [name]: reducer
    });
}

export default {
    addReducer,
    addReducers
};

export {
    addReducer,
    addReducers
};
