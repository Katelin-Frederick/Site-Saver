import React from 'react'
import { Link } from 'react-router-dom'

const ProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/add-site" className="btn btn-light">
        <i className="fab fa-block-plus text-info mr-1"></i>
        Add Site
      </Link>
    </div>
  )
}

export default ProfileActions