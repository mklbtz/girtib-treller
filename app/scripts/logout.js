'use strict';
var Router = require('react-router'),
    LocalStorage = require('./localStorage'),
    React = require('react');
var Logout = React.createClass({
  mixins: [Router.Navigation],
  render: function() {
    LocalStorage.delete('token');
    LocalStorage.delete('user');
    LocalStorage.delete('orgNames');
    LocalStorage.delete('repos');
    this.transitionTo('/');
    return <p></p>;
  }
});
module.exports = Logout;
