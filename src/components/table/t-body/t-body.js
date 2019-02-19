import React, { Component } from 'react';

import FilltextService from '../../../services/filltext-service';
import Spinner from '../spinner';

import './t-body.css';

export default class TBody extends Component {

  filltextService = new FilltextService();

  state = {
    list: {}
  };

  componentDidMount() {

    // Получить весь список
    this.filltextService
      .getLiteData()
      .then((list) => {
        this.setState({list});
        console.log(this.state.list);
      });

    // Получить конкретную строку
    // this.filltextService
    //   .getLiteLine(1)
    //   .then((list) => {
    //     this.setState({list});
    //     console.log(this.state.list);
    //   });

  }

  render() {

    const { list } = this.state
    const { id, firstName, lastName, email, phone, city  } = this.state.list

    if (!list) {
      return <Spinner />
    }else{

    }

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
