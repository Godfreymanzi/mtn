function Rooms() {
    return (
      <div className="flex flex-wrap justify-center">
        <div className="max-w-md mx-4 my-6 bg-white rounded-md overflow-hidden shadow-md">
          <img src="https://placeimg.com/640/480/arch" alt="Room" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Superior Room</h2>
            <p className="text-gray-700">Our Superior Rooms offer contemporary design and a range of amenities to ensure a comfortable stay.</p>
            <p className="text-gray-700 mt-2">Room size: 32 m²</p>
            <p className="text-gray-700 mt-2">Bed options: 1 king-size bed or 2 twin beds</p>
            <p className="text-gray-700 mt-2">Maximum occupancy: 2 adults</p>
            <p className="text-gray-700 mt-2 font-bold">$150 per night</p>
          </div>
        </div>
        <div className="max-w-md mx-4 my-6 bg-white rounded-md overflow-hidden shadow-md">
          <img src="https://placeimg.com/640/480/arch" alt="Room" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Business Class Room</h2>
            <p className="text-gray-700">Our Business Class Rooms are perfect for corporate travelers, with extra space and added amenities.</p>
            <p className="text-gray-700 mt-2">Room size: 36 m²</p>
            <p className="text-gray-700 mt-2">Bed options: 1 king-size bed or 2 twin beds</p>
            <p className="text-gray-700 mt-2">Maximum occupancy: 2 adults</p>
            <p className="text-gray-700 mt-2 font-bold">$180 per night</p>
          </div>
        </div>
        <div className="max-w-md mx-4 my-6 bg-white rounded-md overflow-hidden shadow-md">
          <img src="https://placeimg.com/640/480/arch" alt="Room" className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Junior Suite</h2>
            <p className="text-gray-700">Our Junior Suites offer a separate living area and bedroom, ideal for longer stays or families.</p>
            <p className="text-gray-700 mt-2">Room size: 52 m²</p>
            <p className="text-gray-700 mt-2">Bed options: 1 king-size bed</p>
            <p className="text-gray-700 mt-2">Maximum occupancy: 2 adults and 2 children</p>
            <p className="text-gray-700 mt-2 font-bold">$250 per night</p>
          </div>
        </div>
      </div>
    );
  }
  