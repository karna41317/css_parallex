import React, { Component } from 'react';
import { connect } from 'react-redux';

class Directions extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">Directions</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Directions);
