import Genesis from '@/components/Genesis/Genesis';
import React from 'react';

function GenesisPage() {
  return (
    <div
      className='pt-24 min-h-screen' // Ensures the container takes up at least the full height of the screen
      style={{
        backgroundImage: "url('/bg.png')", // Replace with the correct path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Keeps the background fixed while content scrolls
      }}
    >
      <Genesis />
    </div>
  );
}

export default GenesisPage;
