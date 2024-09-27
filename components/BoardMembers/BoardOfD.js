import Card from './BoardMemberCard'; // Import the Card component
import boardMembers from './board.json'; // Import the JSON file from the same directory

const BoardOfDirectors = () => {
  return (
    <div className="container mx-auto px-6 py-10 poppins-regular">
      <h2 className="akira-expanded text-3xl md:text-5xl lg:text-5xl font-bold text-center text-white mb-16">MEET <span className='text-[#E70C17]'>THE CREW</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 justify-items-center">
        {boardMembers.map((member, index) => (
          <Card
            key={index}
            imageSrc={member.imageUrl || '/default-image.jpg'} // Provide a default image if imageUrl is missing
            title={member.name}
            subtext={member.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;
