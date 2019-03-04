// Module Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// Local Imports
import TextFieldGroup from '../common/TextFieldGroup'
import { addSite } from '../../actions/profileActions'

class AddSite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      url: '',
      errors: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()

    const newSite = {
      displayName: this.state.displayName,
      url: this.state.url
    }

    this.props.addSite(newSite, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="add-site">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Site</h1>
              <p className="lead text-center">
                Add a new Site
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Display name"
                  name="displayName"
                  value={this.state.displayName}
                  onChange={this.onChange}
                  error={errors.displayName}
                />

                <TextFieldGroup
                  placeholder="Site URL"
                  name="url"
                  value={this.state.url}
                  onChange={this.onChange}
                  error={errors.url}
                />

                <input type="submit" value="Submit" className="btn btn-dark btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AddSite.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  addSite: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
})

export default connect(mapStateToProps, { addSite })(withRouter(AddSite))