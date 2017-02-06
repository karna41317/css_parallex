import React, { Component } from 'react';
import { connect } from 'react-redux';

class Splash extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">Splash</div>
    );
  }
}

const mapStateToProps = (state) => (
  {
  }
);

const mapDispatchToProps =
  {
  };

// react-redux glue
export default connect(mapStateToProps, mapDispatchToProps)(Splash);
