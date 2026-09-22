import React from 'react';
import { Star } from 'lucide-react';
import { MOCK_HOTELS } from './data';

const RoomsPage = ({ navigate }) => {
  return (
    <div className="bg-[#fdfbf7] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-[#3e2723] mb-4">Our Rooms & Suites</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">Select from our range of beautiful, affordable rooms.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {MOCK_HOTELS.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row border border-stone-200 transition hover:shadow-xl">
              <div className="md:w-2/5 h-64 md:h-auto relative">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#81c784] text-[#3e2723] px-3 py-1 text-sm font-bold rounded-full">
                  {hotel.category}
                </div>
              </div>
              
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-serif text-[#3e2723] font-bold">{hotel.name}</h3>
                    <div className="flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="font-bold text-sm">{hotel.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-stone-600 mb-6">{hotel.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hotel.amenities.map((item, idx) => (
                      <span key={idx} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-100">
                  <div>
                    <div className="text-3xl font-bold text-[#3e2723]">
                      ${hotel.price}
                    </div>
                    <div className="text-stone-500 text-sm">per night</div>
                  </div>
                  <button 
                    onClick={() => navigate('checkout', hotel)}
                    className="bg-[#3e2723] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#4e342e] transition"
                  >
                    Book Room
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
