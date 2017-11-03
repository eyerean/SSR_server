import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';
import {Helmet} from 'react-helmet';

class UsersListPage extends React.Component {
  componentDidMount(){
    this.props.fetchUsers();
  }

  renderUsers(){
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>)
  }

  render(){
    return (
      <div>
        <Helmet>
          <title>Users App</title>
          <meta property="og:title" content="Users App" />
        </Helmet>
        List of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, {fetchUsers})(UsersListPage)
};
