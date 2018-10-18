import { createStore } from 'redux';

const initialState = {
    coinsList: [],
    fiatCurrency: 'USD',
    coinDetail: [],
    quotes: {},
    loading: false
}

const reducer = (state = initialState, payload) => {
    switch(payload.type) {
        case 'GET_COINS_LIST':
            return {...state, coinsList: payload.list, fiatCurrency: payload.currency, loading: false};
        case 'GET_COIN_DETAIL':
            return {...state, coinDetail: payload.detail, fiatCurrency: payload.currency, quotes: payload.quotes, loading: false };
        case 'SET_LOADING':
            return {...state, loading: payload.value };
        default: 
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
