import React from 'react'

function Footer () {
  return (
    <footer className='footer'>
      Made by &nbsp;
      <a href='https://alvinindra.space' target='_blank' rel='noreferrer'>
        Alvin Indra
      </a>
      &nbsp; © {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
