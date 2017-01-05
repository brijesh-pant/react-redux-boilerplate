import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    return (
      <div id="app-view">
        <h1>Isomorphic React Redux</h1>
        <Link to='/home'>GoTo Home</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
