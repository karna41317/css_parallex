import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="title">News</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(News);
