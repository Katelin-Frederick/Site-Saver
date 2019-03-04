// Module Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Local Imports
import { deleteAccount, getCurrentProfile } from '../../actions/authActions'
import Spinner from '../common/Spinner'
import ProfileActions from './ProfileActions'
import Site from '../sites/Site'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }

  onDeleteClick = e => {
    this.props.deleteAccount()
  }

  render() {
    const { user } = this.props.auth
    const { profile, loading } = this.props.profile

    let dashboardContent

    if(profile === null || loading) {
      dashboardContent = <Spinner />
    } else {
      if(profile.sites.length > 0) {
        dashboardContent = (
          <div>
            <ProfileActions />
            <Site sites={profile.sites} />
            <button onClick={this.onDeleteClick} className="btn btn-danger deleteAccount">Delete My Account</button>
          </div>
        )
      } else {
        // User is Logged In But Has No Sites
        dashboardContent = (
          <div>
            <p>You have not yet added any sites.  Please add some to get started</p>
            <Link to="/add-site" className="btn btn-lg btn-dark">Add Sites</Link>
          </div>
        )
      }
    }
  
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 mb-3">{user.name}'s Sites</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)