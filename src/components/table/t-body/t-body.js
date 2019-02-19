import React, { Component } from 'react';

import FilltextService from '../../../services/filltext-service';

import './t-body.css';

export default class TBody extends Component {

  filltextService = new FilltextService();

  state = {
    list: {}
  }

  constructor() {
    super();
    this.updateLiteData();
  };

  onTableLoaded = (list) => {
    this.setState({list});
    console.log(this.state.list);
  };

  updateLiteData() {
      this.filltextService
        .getLiteData(2)
        .then(this.onTableLoaded);
  };

  render() {

    const { id, firstName, lastName, email, phone, city  } = this.state.list

    return (

        <tbody>
          <tr>
            <td>{ id }</td>
            <td>{ firstName }</td>
            <td>{ lastName }</td>
            <td>{ email }</td>
            <td>{ phone }</td>
            <td>{ city }</td>
          </tr>
        </tbody>
    );
  };
};
