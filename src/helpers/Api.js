import axios from 'axios';


function getCoinsList(dispatch, currency) {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/?convert=${currency}&limit=100&sort=rank&structure=array`)
        .then(res => {
            dispatch({type: 'GET_COINS_LIST', list: res.data.data, currency: currency })
        })
        .catch(err => {
            console.log(err);
        })
};


function getCoinDetail(dispatch, currency, id) {
    axios.get(`https://api.coinmarketcap.com/v2/ticker/${id}/?convert=${currency}&structure=array`)
        .then(res => {
            dispatch({type: 'GET_COIN_DETAIL', detail: res.data.data[0], currency: currency, quotes: res.data.data[0].quotes })
        })
        .catch(err => {
            console.log(err);
        })
}

export default {
    getCoinsList,
    getCoinDetail
}