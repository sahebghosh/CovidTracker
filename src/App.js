import React, { Component } from 'react';
import './App.module.css';
import Cards from './components/Card/Card';
import Charts from './components/Charts/Charts';
import Countryselection from './components/Countryselection/Countryselection';
import { fetchApi } from './api/Api';

class App extends Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchApi();
    this.setState({
      data: data
    })
  }

  handleCountryChange = async (country) => {
    const data = await fetchApi(country);

    this.setState({ data, country: country });
  }
  // fetchData={this.state.apiData}
  render() {
    return (
      <div className="myapp">
        <Cards fetchData={this.state.data} />
        <Countryselection handleCountryChange={this.handleCountryChange} />
        <Charts data={this.state.data} country={this.state.country} />

      </div>
    )
  }
}

export default App;
