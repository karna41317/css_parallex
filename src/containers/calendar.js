import React, { Component } from 'react';
import { connect } from 'react-redux';

class Calendar extends Component {

  componentWillMount() {}

  render() {
    return (
      <div className="title">Calendar</div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

// react-redux glue
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
