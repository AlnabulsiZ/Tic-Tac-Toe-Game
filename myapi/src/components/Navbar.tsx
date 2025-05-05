import React from 'react';
const Navbar: React.FC = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1000',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(to bottom, #1e293b,rgb(10, 12, 14))',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '0 0 30px 30px',
      boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{fontSize:' 1.5rem',fontWeight:'bold'}}>animation movies</div>
      
      <ul style={{display: 'flex',gap: '1.5rem',listStyle: 'none'}}>
        <li><a href="/" style={{color: 'white',textDecoration: 'none',fontWeight: '500'}}>Home</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
