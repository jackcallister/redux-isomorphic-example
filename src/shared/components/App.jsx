import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <h1>{this.props.data}</h1>
    )
  }
}

function mapStateToProps(store) {
  return { data: store.data }
}

class AppConnector extends Component {

  render() {
    return (
      <App data={this.props.data}/>
    )
  }
}

export default connect(mapStateToProps)(AppConnector)
