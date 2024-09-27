import React from 'react';
import Workshops from './Workshops/Workshops';
import Sponsors from './Sponsors/Sponsors';
import Technical from './Technical-Events/Technical';
import NonTechnical from './Nontech/Nontech';
import Gaming from './Gaming/Gaming';


function Genesis() {
  return (
    <div className="genesis-page text-white relative px-2 md:px-8 lg:px-28">
      <Workshops />
      <Sponsors />
      <Technical />
      <NonTechnical />
      <Gaming />
      
    </div>
  );
}

export default Genesis;
