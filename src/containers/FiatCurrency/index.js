import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, ButtonToolbar, DropdownButton, MenuItem, Glyphicon } from 'react-bootstrap';
import Api from '../../helpers/Api.js';

class FiatCurrency extends Component{

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={2} xsOffset={10}>
                        <ButtonToolbar>
                            <DropdownButton 
                            bsSize="small"
                            title={<Glyphicon glyph="glyphicon glyphicon-cog" />}
                            id="dropdown-size-small"
                            >
                                <MenuItem onClick={() => this.props.changeCurrency('USD')}>USD</MenuItem>
                                <MenuItem divider />
                                <MenuItem onClick={() => this.props.changeCurrency('EUR')}>EUR</MenuItem>
                                <MenuItem divider />
                                <MenuItem onClick={() => this.props.changeCurrency('CNY')}>CNY</MenuItem>
                            </DropdownButton>
                        </ButtonToolbar>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCurrency(currency) {
            dispatch({type: 'SET_LOADING', value: true});
            if(window.location.pathname === '/') {
                Api.getCoinsList(dispatch, currency);
            } else {
                const id = window.location.pathname.match(/\d/gi).join('');
                Api.getCoinDetail(dispatch, currency, id);
            }
        }
    }
};

export default connect(null, mapDispatchToProps)(FiatCurrency);