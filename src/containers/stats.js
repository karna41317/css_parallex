import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stats extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">Stats</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Stats);
