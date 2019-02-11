import React, { Component } from 'react';

import FilltextService from '../../services/filltext-service';

import './table.css';

export default class Table extends Component {

  filltextService = new FilltextService();

  state = {
    list: {}
  }

  constructor() {
    super();
    this.updateLiteData();
  }

  onTableLoaded = (list) => {
    this.setState({list})
  };

  updateLiteData() {
    this.filltextService
      .getLiteData(30)
      .then(this.onTableLoaded);
  };

  render() {

    const { list: {id, firstName, lastName, email,
          phone, description, street, city, state, zip} } = this.state;

    return (
      <div className="table d-flex">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{id}</th>
                <th>{firstName}</th>
                <th>{lastName}</th>
                <th>{email}</th>
                <th>{phone}</th>
                <th>Street: {street}<br />
                    City: {city}<br />
                    State: {state}<br />
                    Zip: {zip}</th>
                <th>{description}</th>
              </tr>
            </tbody>
          </table>
      </div>
    );
  };
};
