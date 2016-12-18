import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

class HomeComponent extends React.Component {
  static propTypes = {
    todos: PropTypes.object,
  }
  render () {
    const {
      todos,
    } = this.props

    return (
      <div>
        <div>Hello World - {todos.get(0)}</div>
        <RaisedButton label="Default" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const Home = connect(mapStateToProps)(HomeComponent)

export default Home
