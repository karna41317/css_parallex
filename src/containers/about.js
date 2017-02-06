import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">About</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(About);
