import React, {PropTypes} from 'react'
import { connect } from 'react-redux'

class HomeComponent extends React.Component {
  static propTypes = {
    todos: PropTypes.array,
  }
  render () {
    const {
      todos,
    } = this.props

    return (
      <div>Hello World - {todos.get(0)}</div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const Home = connect(mapStateToProps)(HomeComponent)

export default Home
