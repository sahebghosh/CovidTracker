import React from 'react';
import styles from './Card.module.css'
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = (props) => {
    const { confirmed, recovered, deaths, lastUpdate } = props.fetchData;
    if (!confirmed) {
        return 'Loading..'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={styles.infected}>
                    <CardContent className={styles.incolor}>
                        <Typography gutterBottom className={styles.infont}> <strong>Infected</strong> </Typography>
                        <Typography variant="h4" className={styles.infont}>
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
                    <CardContent className={styles.recolor}>
                        <Typography className={styles.refont} gutterBottom><strong>Recovered</strong></Typography>
                        <Typography variant="h4" className={styles.refont}>
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={styles.death}>
                    <CardContent className={styles.decolor}>
                        <Typography className={styles.defont} gutterBottom><strong>Deaths</strong></Typography>
                        <Typography variant="h4" className={styles.defont}>
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of death caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards;