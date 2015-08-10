import React from 'react';

export default class Layout {

  render() {
    return (
      <main>
        {this.props.children}
      </main>
    );
  }
}
