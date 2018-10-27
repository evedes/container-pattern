import React, { Component } from 'react';
import _ from 'lodash';
import './SuperHeroList.css';

function fetchFarAwayAPI() {
  return [
    { id: 1, name: 'Spider-Man', superPower: 'cling to walls' },
    { id: 2, name: 'Ant-man', superPower: 'shrink size at will' },
    { id: 3, name: 'Batman', superPower: 'genius intellect' },
];
}

const withContainer = WrappedComponent => {
  return class extends Component {
    state = {
      userData: [],
    }
    componentDidMount() {
      this.setState({
        userData: fetchFarAwayAPI(),
      })
    }
    render() {
      return <WrappedComponent userData={this.state.userData} />
    }
  }
}

const SuperHeroList = ({ userData }) => {
  return (
      <div>
        <h2>Superhero List</h2>
        {
          _(userData).map(user => {
            const { id, name, superPower } = user;
            return (
                <div key={id}>
                  <p>Id: { id} Name: {name}, Super Power: {superPower}</p>
                </div>
            )
          }).value()
        }
      </div>
  )
}

export default withContainer(SuperHeroList);


