import React from 'react';
import { Grid, } from 'semantic-ui-react'
import CardItem from '../components/CardItem';

import '../styles/cardItem.css'

function CardGrid(props) {
    return (

        <Grid columns={4} divided='vertically'>
            <Grid.Row>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
                <Grid.Column>
                    <CardItem/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default CardGrid;


