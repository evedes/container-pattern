import React, { Component } from 'react';
import _ from 'lodash';

const data = [
  { id: 1, name: 'Spider-Man', superPower: 'cling to walls' },
  { id: 2, name: 'Ant-man', superPower: 'shrink size at will' },
  { id: 3, name: 'Batman', superPower: 'genius intellect' },
];

function fetchFarAwayAPI() {
  return data;
}

export default class SuperHeroListContainer extends Component {
  state = {
    superHeroData: [],
  }

  componentDidMount() {
    const data = fetchFarAwayAPI();
    this.setState({
      superHeroData: data,
    });
  }

  render() {
    return <SuperHeroList superHeroData={this.state.superHeroData} />
  }
}

const SuperHeroList = ({ superHeroData }) => {
  return (
    <div className="text-center">
      <h2 className="py-4">Super Hero List 1</h2>
      <table className="table px-2 table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">super power</th>
          </tr>
        </thead>
        <tbody>
          {
            _(superHeroData).map(item => {
              return (
                <SuperHeroRow key={item.id} row={item} />
              )
            }).value()
          }
        </tbody>
      </table>
    </div>
  )
}

const SuperHeroRow = ({ row }) => {
  const { id, name, superPower } = row;
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{superPower}</td>
    </tr>
  );
}
