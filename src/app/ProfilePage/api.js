import {ajax} from 'hp/config'

const getProfileById = id => {
  const uid = encodeURIComponent(id)
  return (
    ajax.get(`/profiles/${uid}`).then( res => res.data) || {}
  )
}

const getListProfiles = () => (
  ajax.get(`/profiles`).then( res => res.data) || []
)

export {
  getProfileById,
  getListProfiles
}
