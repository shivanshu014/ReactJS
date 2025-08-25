import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid }= useParams()
  return (
    <>
        <h1 className='bg-gray-400 p-4 text-center text-3xl'>User : {userid}</h1>
    </>
  )
}

export default User
