import React, { Component } from 'react';

import TBody from './t-body';
import FilltextService from '../../services/filltext-service';

import './table.css';

export default class Table extends Component {

  render() {

    return (
      <div className="my-table">
      <table id="dtBasicExample"
        className="table table-striped table-bordered" cellSpacing="0">
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
      </div>
    );
  };
};
