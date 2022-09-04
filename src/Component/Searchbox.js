import React from 'react'

const Searchbox = ({placeHolder,handleChange}) => {
  return (
    <div className='search-cards'>
                  <input
                   type='search'
                   placeholder={placeHolder}
                   onChange={handleChange}
                   >

                   </input>
    </div>
  )
}

export default Searchbox