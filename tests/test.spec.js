import { createStore } from 'redux';
import { expect } from 'chai';
import addReducer from '../index';
import profileReducer from './reducers/profile.reducer';
import cartReducer from './reducers/cart.reducer';

function testAddNameReducer(store) {
    store.dispatch({
        type: 'ADD_NAME',
        name: 'Rick Sanchez'
    });

    expect(store.getState().profile).to.deep.equal({
        name: 'Rick Sanchez'
    });
}

function testAddItemReducer(store) {
    const item = {
        id: 'this-is-an-id',
        description: 'some description'
    };

    store.dispatch({
        type: 'ADD_ITEM',
        item
    });

    expect(store.getState().cart).to.deep.equal({
        items: [item]
    });
}

describe('Redux Store', () => {
    let store;
    beforeEach(() => {
        store = createStore((state) => state);
    });

    describe('should add one reducer', () => {
        beforeEach(() => {
            addReducer(store, 'profile', profileReducer);
        });

        it('store should be initialized with initial state', () => {
            expect(store.getState()).to.deep.equal({
                profile: {}
            });
        });

        it('should dispatch the `ADD_NAME` action', () => {
            testAddNameReducer(store);
        });
    });

    describe('should add two reducer asyncronously', () => {
        beforeEach(() => {
            addReducer(store, 'profile', profileReducer);
            addReducer(store, 'cart', cartReducer);
        });

        it('store should be initialized with initial state', () => {
            expect(store.getState()).to.deep.equal({
                profile: {},
                cart: {}
            });
        });

        it('should dispatch the `ADD_NAME` & `ADD_ITEM` action', () => {
            testAddNameReducer(store);
            testAddItemReducer(store);
        });
    });
});
