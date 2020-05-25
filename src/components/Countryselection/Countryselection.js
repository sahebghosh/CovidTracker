import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Countryselection.module.css';
import { countryName } from '../../api/Api';

const Countryselection = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const countries = async () => {
            setFetchedCountries(await countryName());
        }

        countries();
    }, [])

    console.log(fetchedCountries);

    return (
        <div className={styles.container}>
            <FormControl >
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="global">Choose Country</option>
                    {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default Countryselection;