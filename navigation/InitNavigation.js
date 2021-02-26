import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import MainNavigation from './MainNavigation';

const InitNavigation = ({usersState}) => {
  return <MainNavigation users={usersState} />;
};

const mapStateToProps = (state) => ({
  usersState: state,
});
export default connect(mapStateToProps)(InitNavigation);
