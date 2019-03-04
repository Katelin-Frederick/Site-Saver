import axios from 'axios'
import { 
  GET_ERRORS,
  PROFILE_LOADING,
  GET_PROFILE,
  CLEAR_CURRENT_PROFILE
} from './types'

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  }
}

// Add A Site
export const addSite = (siteData, history) => dispatch => {
  axios.post('/api/users/sites', siteData)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
      history.push('/dashboard')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  }
}

// Delete A Site
export const deleteSite = id => dispatch => {
  axios.delete(`/api/users/sites/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    ).catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}