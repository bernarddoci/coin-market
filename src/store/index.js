import { createStore } from 'redux';

const initialState = {
    coinsList: [],
    fiatCurrency: 'USD',
    coinDetail: {},
    loading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_COINS_LIST':
            return {...state, coinsList: action.payload.list, loading : action.payload.loading };
        case 'SET_LOADING':
            return {...state, loading: action.value };
        default: 
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
