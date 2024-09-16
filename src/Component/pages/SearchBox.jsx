import React from 'react'

const SearchBox = ({method}) => {
  return <div>
    <input type="text" placeholder='Search Robot' onChange={(e) => {method(e.target.value)}} className='p-2 outline-none rounded w-96 mb-10'/>
  </div>
}

export default SearchBox