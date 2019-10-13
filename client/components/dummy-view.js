import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'
// import { from } from 'rxjs';


const Dummy = (props) => {
  const [counter] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps();
  }, [getDataProps])

  return (
    <div>
      <Head title="Hello" />
      <div>{JSON.stringify(props.isRequesting)} </div>
      <div> Hello World {counter} </div>
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Company</td>
          <td>Salary</td>
          <td>Age</td>
          <td>Bitcoin</td>
          <td>whatHacked</td>
          <td>City</td>
          <td>Phone</td>
          <td>Ava</td>
        </tr>
        {
          props.users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
              <td>{user.bitcoin}</td>
              <td>{user.whatHacked}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>{user.ava}</td>
            </tr>
          ))
        }
      </table>
      <img src={`/tracker/${counter}.gif`} alt="tracker" />
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  users: state.users.list,
  isRequesting: state.users.isRequesting
})

const mapDispatchToProps = dispatch => bindActionCreators({ getData }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
