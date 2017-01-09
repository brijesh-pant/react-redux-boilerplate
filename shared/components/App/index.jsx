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
        <div className={styles.useAutoPrefixer}>
          <div className={`${styles['box']} ${styles['box1']}`}>1</div>
          <div className={`${styles['box']} ${styles['box2']}`}>2</div>
          <div className={`${styles['box']} ${styles['box3']}`}>3</div>
          <div className={`${styles['box']} ${styles['box4']}`}>4</div>
        </div>
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
