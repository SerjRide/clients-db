import React, { Component } from 'react';
import FilltextService from '../../services/filltext-service';
import Spinner from './spinner';
import './table.css';

export default class Table extends Component {

  filltextService = new FilltextService();

  state = {
    list: null
  };

  componentDidMount() {
    this.filltextService
      .getLiteData()
      .then((list) => {
        this.setState({list});
      })
      .catch((err) => {
        console.error('Could not fetch', err);
      })
  };

  renderTab(arr) {
    return arr.map(({id, firstName, lastName, email, phone, city}) => {
      return (
        <tr key={ Math.random()*1000 }>
          <td>{ id }</td>
          <td>{ firstName }</td>
          <td>{ lastName }</td>
          <td>{ email }</td>
          <td>{ phone }</td>
          <td>{ city }</td>
        </tr>
      );
    });
  };

  render() {

    const { list } = this.state
    if (!list) {return <Spinner />}
    const renderList = this.renderTab(list)

    return (
      <table id="dtBasicExample"
        className="table table-sm table-responsive" cellSpacing="0">
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
        <tbody>{ renderList }</tbody>
      </table>
    );
  };
};
