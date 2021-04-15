import React from 'react'
import NewLink from './NewLink'
import AdminHeader from './AdminHeader'
import { Link } from 'react-router-dom'
import Edit from './Edit'

const Admin = ({ username }) => {
  return (
    <>
      <AdminHeader admin={'active'} />

      <div className='flex-container'>
        <NewLink username={username} />

        {/* <Link to={`${username}`}  className='linkr-button'>
          {username}'s Linkr
        </Link> */}
      </div>
      {/* <UserLinkTree username={username}/> */}
      <div>
        <Edit username={username} className='edit-compo' />
      </div>
    </>
  )
}

export default Admin
