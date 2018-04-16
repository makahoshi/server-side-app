import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


class Users extends Component {
    componentDidMount() {
        this.props.fetchUsers(); //when cmoponent mounts onto the page it will grab that list of users
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>;
        })
    }

    render(){
        return (
            <div>
                <h1>Welcome Makaila Here's a list of users!!</h1>
                <button onClick={() => console.log('hi there!')}>Press Me</button>
                <ul>{this.renderUsers()}</ul>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

function loadData() {
    console.log('load data for users');
}

export { loadData };
export default connect(mapStateToProps, { fetchUsers })(Users);
