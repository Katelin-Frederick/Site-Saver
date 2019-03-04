// Module Imports
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Local Imports
import { deleteSite } from '../../actions/profileActions'

class Site extends Component {
  onDeleteClick(id) {
    this.props.deleteSite(id)
  }

  render() {
    const sites = this.props.sites.map(site => (
      <tr key={site._id}>
        <td>
          <a href={site.url} target="_blank">{site.displayName}</a>
          <button 
            onClick={this.onDeleteClick.bind(this, site._id)} 
            className="btn btn-danger float-right">Delete
          </button>
        </td>
      </tr>
    ))

    return (
      <div>
        <h4 className="mb-4">Sites</h4>
          <table className="table">
            <thead>
            <tr>
              <th>Site</th>
            </tr>
              { sites }
            </thead>
          </table>
      </div>
    )
  }
}

Site.propTypes = {
  deleteSite: PropTypes.func.isRequired
}

export default connect(null, { deleteSite })(Site)