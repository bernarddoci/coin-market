import axios from 'axios';

function getCoinsList(dispatch, currency) {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=${currency}&limit=100&sort=rank&structure=array`)
        .then(res => {
            dispatch({type: 'GET_COINS_LIST', payload: {list: res.data.data, loader: false}})
        })
        .catch(err => {
            console.log(err);
        })
};

function getCoinDetail(dispatch, currency, id) {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=${currency}`)
        .then(res => {
            console.log(res);
            // dispatch({type: 'GET_COIN_DETAIL', payload: {list: res.data.data, loader: false}})
        })
        .catch(err => {
            console.log(err);
        })
}

export default {
    getCoinsList,
    getCoinDetail
}