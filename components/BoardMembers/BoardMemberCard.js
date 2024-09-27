import React from 'react';
import Image from 'next/image';
import './BoardMemberCard.css'; // Import the CSS file

const Card = ({ imageSrc, title, subtext, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <Image
          src={imageSrc}
          alt={title}
          loading="eager"
          className="card-image"
          width={150} // Width and height are set here for Next.js optimization but won't affect CSS
          height={200}
        />
        <h2 className='text-nowrap'>{title}</h2>
        <p>{subtext}</p>
      </div>
    </div>
  );
};

export default Card;
