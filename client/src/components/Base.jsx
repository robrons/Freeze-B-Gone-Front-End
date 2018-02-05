import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import image from './mainPage.jpg';

var styles = {
color:'violet',
backgroundImage: 'url('+image+')',
height: '100vh'
};

const Base = ({ children }) => (
  <div style={styles}>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Freeze-B-Gone</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
