import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Button, Panel, ListGroup, ListGroupItem, ButtonToolbar } from 'react-bootstrap';
import Loader from '../../components/Loader';
import Api from '../../helpers/Api';
import symbol from '../../helpers/currencySymbol';

class CoinDetail extends Component{
    
    componentWillMount() {
        this.props.getDetail(this.props.currency, this.props.match.params.id);
    }

    handlerBack() {
        window.history.back();
    }

    render() {
        let quotes = {}, symb = symbol[this.props.currency] + ' ';
        if(this.props.quotes.hasOwnProperty(this.props.currency)) {
            quotes = this.props.quotes[this.props.currency];
        } else {
            return null;
        }
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={8} mdOffset={2} >
                        {
                            this.props.loading
                            ?   <Loader />
                            :   <Panel bsStyle="info">
                                    <Panel.Heading>
                                        <Panel.Title componentClass="span">{ this.props.detail.name }</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body>
                                        <ListGroup>
                                            <ListGroupItem bsStyle="info"><strong>Ranking</strong>: {this.props.detail.rank}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Symbol</strong>: {this.props.detail.symbol}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Price</strong>: {symb + quotes.price.toLocaleString()}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Market cap</strong>: {symb + quotes.market_cap.toLocaleString()}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>24 volume</strong>: {symb +quotes.volume_24h.toLocaleString()}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Percent Change 1h</strong>: {quotes.percent_change_1h} %, <strong>Percent Change 24h</strong>: {quotes.percent_change_24h} %, <strong>Percent Change 7d</strong>: {quotes.percent_change_7d} %</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Circulating Supply</strong>: {symb + this.props.detail.circulating_supply.toLocaleString()}</ListGroupItem>
                                            <ListGroupItem bsStyle="info"><strong>Total Supply</strong>: {symb + this.props.detail.total_supply.toLocaleString()}</ListGroupItem>
                                        </ListGroup>
                                        <ButtonToolbar className="pull-right">
                                            <Button bsStyle="danger" bsSize="small" onClick={() => this.handlerBack()}>Back</Button>
                                            <Button bsStyle="primary" bsSize="small" onClick={() => this.props.getDetail(this.props.currency, this.props.match.params.id)}>Refresh</Button>
                                        </ButtonToolbar>
                                    </Panel.Body>
                                </Panel>
                        }
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.coinDetail,    
        quotes: state.quotes,   
        currency: state.fiatCurrency,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: (currency, id) => {
            dispatch({type: 'SET_LOADING', value: true});
            Api.getCoinDetail(dispatch, currency, id);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinDetail);