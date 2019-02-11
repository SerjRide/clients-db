import React from 'react';

import './table.css';

const Table = () => {
  return (
    <div className="table d-flex">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>firstName</th>
              <th>lastName</th>
              <th>email</th>
              <th>phone</th>
              <th>address</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
            </tr>
          </tbody>
        </table>
    </div>
  );
};

export default Table;
