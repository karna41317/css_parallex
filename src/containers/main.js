import React, { Component } from 'react';
import { connect } from 'react-redux';
import Alumni from './alumni.js';
import Calendar from './calendar.js';
import Directions from './directions.js';
import News from './news.js';
import Stats from './stats.js';
import Splash from './splash.js';
import About from './about.js';

class Main extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <div className="parallax">
        <div id="group1" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Splash />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group2" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <About />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group3" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <News />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Alumni />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group5" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Stats />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group6" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Calendar />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="group7" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <Directions />
          </div>
        </div>
        <div id="groupHeader" className="parallax__group">
          <div className="parallax__layer parallax__layer--back">
            <div className="title">Base Layer</div>
          </div>
        </div>
        <div id="groupLast" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
            <div className="title">Base Layer</div>
          </div>
        </div>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);
