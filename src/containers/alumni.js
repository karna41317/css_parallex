import React, { Component } from 'react';
import { connect } from 'react-redux';

class Alumni extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">Alumni</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Alumni);
