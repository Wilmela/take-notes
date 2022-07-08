import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-4 flex justify-between items-center border-t fixed bottom-0 right-0 left-0 bg-white">
      <h3>&copy;Mela {new Date().getFullYear()}</h3>
      <h3>Made with ❤️</h3>
    </footer>
  );
}

export default Footer