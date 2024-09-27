"use client";

import Image from 'next/image';
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import workshopsData from './TechnicalData.json'; // Import the JSON file
import { Button } from "@/components/ui/button";
import { MapPin, Clock4, Users } from 'lucide-react'; // Import the required icons from lucide-react

export default function Workshops() {
  const [isFlipped, setIsFlipped] = useState(Array(workshopsData.length).fill(false));

  const handleFlip = (index) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  return (
    <section className="w-full">
      <div className="container">
        {/* Title for the entire Technical Events section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-12 akira-expanded">
            TECHNICAL EVENTS
          </h2>
        </div>

        {/* First Row: Display 3 cards with flip effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
          {workshopsData.slice(0, 3).map((workshop, index) => (
            <div key={index} className="relative" style={{ height: "500px" }}>
              <ReactCardFlip
                isFlipped={isFlipped[index]}
                flipDirection="horizontal"
                containerStyle={{ height: "100%" }} // Preserve height
              >
                {/* Front of the card */}
                <div className="bg-background rounded-lg text-black overflow-hidden shadow-lg transition-all hover:shadow-xl relative cursor-pointer" style={{ height: "100%", width: "100%" }}>
                  {/* Image container */}
                  <div className="relative w-full h-full" style={{ aspectRatio: "3/4" }}>
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      loading="eager"
                      className="absolute inset-0 w-full h-full object-top" // Aligns image to the top
                      style={{ objectFit: "cover" }} // Keeps the image's aspect ratio but aligns top
                      width={400} // Set appropriate width
                      height={500} // Set appropriate height
                    />
                    {/* Text and buttons */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 pt-6 bg-white">
                      <div>
                        <h3 className="text-md md:text-xl font-bold text-nowrap akira-expanded">{workshop.title}</h3>
                        <p className="text-muted-foreground text-sm">{workshop.description}</p>
                      </div>
                      <div className="flex gap-2 justify-end mt-2">
                        <Button
                          variant="outline"
                          className="text-sm px-4 py-5"
                          onClick={() => handleFlip(index)} // Flip only when this button is clicked
                        >
                          {workshop.detailsText}
                        </Button>
                        <Button
                          className="text-sm px-4 py-5"
                          title="Registrations Closed"
                        >
                          {workshop.registerText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back of the card */}
                <div
                  onClick={() => handleFlip(index)} // Flip back when clicking anywhere on the back of the card
                  className="bg-black rounded-lg text-white overflow-hidden shadow-lg transition-all hover:shadow-xl relative cursor-pointer p-4"
                  style={{ height: "100%", width: "100%" }}
                >
                  {/* Inner content container with border */}
                  <div className="flex flex-col justify-center items-start h-full space-y-4 p-4 border-2 border-red-600 rounded-lg w-full box-border">
                    {/* Title */}
                    <div className="flex items-center space-x-2">
                      <h3 className="text-xl font-bold ">{workshop.title}</h3>
                    </div>

                    {/* Back details */}
                    <p className="text-xs md:text-sm">{workshop.backDetails}</p>

                    {/* Venue with MapPin icon */}
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" /> {/* MapPin icon */}
                      <strong>Venue:</strong> {workshop.venue}
                    </p>

                    {/* Timings with Clock4 icon */}
                    <p className="flex items-center">
                      <Clock4 className="w-4 h-4 mr-2" /> {/* Clock4 icon */}
                      <strong>Timings: &nbsp;</strong> {workshop.timings}
                    </p>

                    {/* Faculty Coordinators with Users icon */}
                    <p className="flex items-center text-nowrap text-md">
                      <Users className="w-4 h-4 mr-2" /> {/* Users icon */}
                      <strong>Faculty Coordinators:&nbsp;</strong>
                    </p>
                    <p className='text-sm pl-6'> {/* Adding padding to align with the label */}
                      {workshop.facultyCoordinators}
                    </p>

                    {/* Student Coordinators with Users icon */}
                    <p className="flex items-center text-nowrap text-md">
                      <Users className="w-4 h-4 mr-2" /> {/* Users icon */}
                      <strong>Student Coordinators:&nbsp;</strong>
                    </p>
                    <p className='text-sm pl-6'> {/* Adding padding to align with the label */}
                      {workshop.studentCoordinators.map((coordinator, idx) => (
                        <React.Fragment key={idx}>
                          <span>{coordinator.name} - {coordinator.phone}</span>
                          {idx < workshop.studentCoordinators.length - 1 && <br />} {/* Add a line break between coordinators */}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </ReactCardFlip>
            </div>
          ))}
        </div>

        {/* Second Row: Center 2 cards using Flexbox for larger screens */}
        <div className="flex justify-center lg:flex-row lg:gap-6 lg:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6 w-full lg:w-2/3">
            {workshopsData.slice(3, 5).map((workshop, index) => (
              <div key={index + 3} className="relative" style={{ height: "500px" }}>
                <ReactCardFlip
                  isFlipped={isFlipped[index + 3]}
                  flipDirection="horizontal"
                  containerStyle={{ height: "100%" }} // Preserve height
                >
                  {/* Front of the card */}
                  <div className="bg-background rounded-lg text-black overflow-hidden shadow-lg transition-all hover:shadow-xl relative cursor-pointer" style={{ height: "100%", width: "100%" }}>
                    {/* Image container */}
                    <div className="relative w-full h-full" style={{ aspectRatio: "3/4" }}>
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        loading="eager"
                        className="absolute inset-0 w-full h-full object-top" // Aligns image to the top
                        style={{ objectFit: "cover" }} // Keeps the image's aspect ratio but aligns top
                        width={400} // Set appropriate width
                        height={500} // Set appropriate height
                      />
                      {/* Text and buttons */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                        <div>
                          <h3 className="text-xl font-bold akira-expanded">{workshop.title}</h3>
                          <p className="text-muted-foreground text-sm">{workshop.description}</p>
                        </div>
                        <div className="flex gap-2 justify-end mt-2">
                          <Button
                            variant="outline"
                            className="text-sm px-4 py-5"
                            onClick={() => handleFlip(index + 3)} // Flip only when this button is clicked
                          >
                            {workshop.detailsText}
                          </Button>
                          <Button
                            className="text-sm px-4 py-5"
                            title="Registrations Closed"
                          >
                            {workshop.registerText}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of the card */}
                  <div
                    onClick={() => handleFlip(index + 3)} // Flip back when clicking anywhere on the back of the card
                    className="bg-black rounded-lg text-white overflow-hidden shadow-lg transition-all hover:shadow-xl relative cursor-pointer p-4"
                    style={{ height: "100%", width: "100%" }}
                  >
                    {/* Inner content container with border */}
                    <div className="flex flex-col justify-center items-start h-full space-y-4 p-4 border-2 border-red-600 rounded-lg w-full box-border">
                      {/* Laptop icon and title */}
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-bold">{workshop.title}</h3>
                      </div>
                      <p>{workshop.backDetails}</p> {/* Show back details */}

                      {/* Venue with MapPin icon */}
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" /> {/* MapPin icon */}
                        <strong>Venue:</strong> {workshop.venue}
                      </p>

                      {/* Timings with Clock4 icon */}
                      <p className="flex items-center">
                        <Clock4 className="w-4 h-4 mr-2" /> {/* Clock4 icon */}
                        <strong>Timings:</strong> {workshop.timings}
                      </p>

                      {/* Faculty Coordinators with Users icon */}
                      <p className="flex items-center text-nowrap text-md">
                      <Users className="w-4 h-4 mr-2" /> {/* Users icon */}
                      <strong>Faculty Coordinators:&nbsp;</strong>
                    </p>
                    <p className='text-sm pl-6'> {/* Adding padding to align with the label */}
                      {workshop.facultyCoordinators}
                    </p>

                    {/* Student Coordinators with Users icon */}
                    <p className="flex items-center text-nowrap text-md">
                      <Users className="w-4 h-4 mr-2" /> {/* Users icon */}
                      <strong>Student Coordinators:&nbsp;</strong>
                    </p>
                    <p className='text-sm pl-6'> {/* Adding padding to align with the label */}
                      {workshop.studentCoordinators.map((coordinator, idx) => (
                        <React.Fragment key={idx}>
                          <span>{coordinator.name} - {coordinator.phone}</span>
                          {idx < workshop.studentCoordinators.length - 1 && <br />} {/* Add a line break between coordinators */}
                        </React.Fragment>
                      ))}
                    </p>
                    </div>
                  </div>
                </ReactCardFlip>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
