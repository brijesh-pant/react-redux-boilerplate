import React, {Component, PropTypes} from 'react'
import { Link } from 'react-router'
import styles from './app.scss'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }
  render() {
    return (
      <div>
        <span className={styles.colorHeading}>Check</span>
        <h1>
          Isomorphic React Redux
        </h1>
        <Link to='/home'>GoTo Home</Link>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
