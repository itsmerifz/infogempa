import React from 'react'

const Footer = () => {
  return (
    <div className='absolute bottom-2 right-5 text-base-content'>
      &copy; {new Date().getFullYear()} - Made with &hearts; by <a href="https://itsmerifz.my.id" className='underline'>Muhammad Arief</a>
    </div>
  )
}

export default Footer