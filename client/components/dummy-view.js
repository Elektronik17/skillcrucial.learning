import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'
import { getData } from '../redux/reducers/users'
// import { from } from 'rxjs';


const Dummy = (props) => {
  const [pageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props
  useEffect(() => {
    getDataProps(pageIndex);
  }, [getDataProps, pageIndex])

  return (
    <div>
      <Head title="Hello" />
      <div>{JSON.stringify(props.isRequesting)} </div>
      <div> Page {pageIndex} {props.users.length} </div>
      <button
        type="button"
        onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
      >Previous
      </button>
      <button
        type="button"
        onClick={() => setPageIndex(pageIndex + 1)}
      >Next
      </button>
      <table>
        <tr>
          <td>Ava</td>
          <td>Name</td>
          <td>Email</td>
          <td>Company</td>
          <td>Salary</td>
          <td>Age</td>
          <td>Bitcoin</td>
          <td>whatHacked</td>
          <td>City</td>
          <td>Phone</td>
        </tr>
        {
          !props.isRequesting && props.users.map(user => (
            <tr>
              <td><img src={user.ava} alt="" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.salary}</td>
              <td>{user.age}</td>
              <td>{user.bitcon}</td>
              <td>{user.whatHacked}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        }
      </table>
      <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
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
