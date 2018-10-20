import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
// import CoinsList from '../../components/CoinsList';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import Api from '../../helpers/Api.js';
import symbol from '../../helpers/currencySymbol';
import { withRouter } from 'react-router-dom';

class Coins extends Component{

    componentWillMount() {
        this.props.getList(this.props.currency);
    }

    handleClick(id) {
        this.props.history.push(`/detail/${id}`);
    }

    render() {
        let symb = symbol[this.props.currency] + ' ';
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8} mdOffset={2}>
                        {
                            this.props.loading
                            ?   <Loader />
                            :   <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Rank</th>
                                            <th>Name</th>
                                            <th>Symbol</th>
                                            <th>Price</th>
                                            <th>Volume (24)</th>
                                            <th><button className="btn btn-success" onClick={() => this.props.getList(this.props.currency)}>Refresh</button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.coinsList.map(coin => {
                                            if(coin.quotes.hasOwnProperty(this.props.currency)){
                                                return (
                                                    <tr className="coin-detail" key={coin.id} onClick={() => this.handleClick(coin.id)}>
                                                        <td className="coin-item">{coin.rank}</td>
                                                        <td className="coin-item"><strong>{coin.name}</strong></td>
                                                        <td className="coin-item">{coin.symbol}</td>
                                                        <td className="coin-item">{symb + coin.quotes[this.props.currency].price.toLocaleString()}</td>
                                                        <td className="coin-item">{symb + coin.quotes[this.props.currency].volume_24h.toLocaleString()}</td>
                                                        <td></td>
                                                    </tr>  
                                                );  
                                            } else {    
                                                return null
                                            }
                                        })
                                    }
                                    </tbody>
                                </Table>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.fiatCurrency,
        coinsList: state.coinsList,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (currency) => {
            console.log('request made', currency);
            dispatch({type: 'SET_LOADING', value: true});
            Api.getCoinsList(dispatch, currency);
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Coins));
