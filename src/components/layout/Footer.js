import React from 'react';

function Footer() {
  return (
    <footer className="footer"> Made by <a href="https://alvinindra.space" target="_blank" rel="noreferrer">Alvin Indra</a> © {new Date().getFullYear()} </footer>
  );
}

export default Footer