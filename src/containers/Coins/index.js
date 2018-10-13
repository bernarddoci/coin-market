import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import CoinsList from '../../components/CoinsList';
import Loader from '../../components/Loader';
import { connect } from 'react-redux';
import Api from '../../helpers/Api.js';

class Coins extends Component{

    componentDidMount() {
        this.props.getList(this.props.currency);
    }

    render() {
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
                                    <CoinsList list={this.props.coinsList}/>
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
        coinsList: state.coinsList,
        currency: state.fiatCurrency,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: (currency) => {
            dispatch({type: 'SET_LOADING', value: true});
            Api.getCoinsList(dispatch, currency);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
