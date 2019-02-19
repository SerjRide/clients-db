import React, { Component } from 'react';
import Header from '../header';
import Table from '../table';
import './app.css';

export default class App extends Component {

  render() {
    return (
      <div className="clientdb-app">
        <Header />
        <Table />
      </div>
    );
  };
};
