import React, {Component, PropTypes} from 'react'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    return (
      <div id="app-view">
        <h1>Isomorphic React Redux</h1>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
