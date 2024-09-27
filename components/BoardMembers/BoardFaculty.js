"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Card from './BoardMemberCard';
import boardMembersDetails from './BoardFacultyDetails.json'; // Import JSON file

const BoardFaculty = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const handleCardClick = (member) => {
    const memberDetails = boardMembersDetails.find(
      (detail) => detail.name === member.name
    );
    if (memberDetails) {
      setSelectedMember(memberDetails);
    }
  };

  const handleMouseEnter = (member) => {
    const memberDetails = boardMembersDetails.find(
      (detail) => detail.name === member.name
    );
    setHoveredMember(memberDetails);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div className="container mx-auto px-6 py-6 h-full flex flex-col items-center justify-center space-y-10 poppins-regular lg:pt-24">
      <h2 className="akira-expanded text-3xl md:text-5xl lg:text-5xl font-bold text-center text-white mb-6">THE <span className='text-[#E70C17]'>MASTERMINDS</span></h2>
      <div className="flex flex-col items-center space-y-10 md:space-y-10 relative">
        {/* HOD Card */}
        <div className="relative flex items-center">
          <Card
            imageSrc={boardMembersDetails[0].imageUrl}
            title={boardMembersDetails[0].name}
            subtext={boardMembersDetails[0].designation}
            onClick={() => handleCardClick(boardMembersDetails[0])}
            onMouseEnter={() => handleMouseEnter(boardMembersDetails[0])}
            onMouseLeave={handleMouseLeave}
          />
          {hoveredMember && hoveredMember.name === boardMembersDetails[0].name && (
            <div className="absolute left-full ml-4 bg-white p-4 rounded shadow-lg w-64">
              <p className="text-gray-700">{hoveredMember.description}</p>
            </div>
          )}
        </div>

        {/* Club Coordinators */}
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:gap-10 relative">
          <div className="relative flex items-center">
            <Card
              imageSrc={boardMembersDetails[1].imageUrl}
              title={boardMembersDetails[1].name}
              subtext={boardMembersDetails[1].designation}
              onClick={() => handleCardClick(boardMembersDetails[1])}
              onMouseEnter={() => handleMouseEnter(boardMembersDetails[1])}
              onMouseLeave={handleMouseLeave}
            />
            {hoveredMember && hoveredMember.name === boardMembersDetails[1].name && (
              <div className="absolute right-full mr-4 bg-white p-4 rounded shadow-lg w-64">
                <p className="text-gray-700">{hoveredMember.description}</p>
              </div>
            )}
          </div>
          <div className="relative flex items-center">
            <Card
              imageSrc={boardMembersDetails[2].imageUrl}
              title={boardMembersDetails[2].name}
              subtext={boardMembersDetails[2].designation}
              onClick={() => handleCardClick(boardMembersDetails[2])}
              onMouseEnter={() => handleMouseEnter(boardMembersDetails[2])}
              onMouseLeave={handleMouseLeave}
            />
            {hoveredMember && hoveredMember.name === boardMembersDetails[2].name && (
              <div className="absolute left-full ml-4 bg-white p-4 rounded shadow-lg w-64">
                <p className="text-gray-700">{hoveredMember.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed top-[-40px] left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClosePopup}
        >
          <div
            className="bg-black text-white rounded-lg p-4 mt-16 max-w-3xl w-full mx-4 sm:mx-6 md:mx-12 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing the popup when clicking inside it
          >
            <div className="flex flex-col items-center">
              <Image
                src={selectedMember.imageUrl}
                alt={selectedMember.name}
                loading="eager"
                className="w-24 h-24 rounded-full mb-4"
                width={96} // Provide width
                height={96} // Provide height
              />
              <h3 className="text-lg font-bold mb-2">{selectedMember.name}</h3>
              <p className="text-sm mb-4">{selectedMember.designation}</p>
              <p className=" text-center">{selectedMember.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoardFaculty;
