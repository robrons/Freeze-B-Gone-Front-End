import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">Freeze-B-Gone</IndexLink>
      </div>

      <div className="top-bar-right">
        <Link to="/">LOGIN</Link>
        <Link to="/signup"> <RaisedButton label="SIGNUP" primary={true}/></Link>
      </div>

    </div>

    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;
