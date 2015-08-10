import React from 'react';

export default class App {

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}
