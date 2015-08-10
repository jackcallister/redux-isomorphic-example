import React from 'react';
import { Connector } from 'react-redux';

class App {
  render() {
    return (
      <h1>{this.props.data}</h1>
    );
  }
}

function selectData(store) {
  return { data: store.data };
}

export default class AppConnector {

  render() {
    return (
      <Connector select={selectData}>
        {({data}) =>
          <App data={data} />
        }
      </Connector>
    );
  }
}
