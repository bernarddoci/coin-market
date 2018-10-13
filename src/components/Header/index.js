import React from 'react';
import { Grid, Row, Jumbotron } from 'react-bootstrap';

const Header = () => (
    <Grid fluid>
        <Row>
            <Jumbotron>
                <h1>Coin Market App</h1>
            </Jumbotron>
        </Row>
    </Grid>
);

export default Header;