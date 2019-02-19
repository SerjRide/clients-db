import React, { Component } from 'react';

import TBody from './t-body';

import './table.css';

export default class Table extends Component {

  render() {

    return (
      <table id="dtBasicExample"
        className="table table-sm" cellSpacing="0">
        <thead>
          <tr>
            <th className="th-sm">ID</th>
            <th className="th-sm">First Name</th>
            <th className="th-sm">Last Name</th>
            <th className="th-sm">Email</th>
            <th className="th-sm">Phone</th>
            <th className="th-sm">City</th>
          </tr>
        </thead>
        <TBody />
      </table>
    );
  };
};
