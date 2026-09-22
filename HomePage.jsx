import React from 'react';
import { Shield, Coffee, MapPin } from 'lucide-react';

const HomePage = ({ navigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fdfbf7]">
      <div className="relative bg-[#3e2723] h-[80vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://media.gettyimages.com/id/1467742991/photo/tourist-resort-at-sunset.jpg?s=612x612&w=gi&k=20&c=9Ub20sBOjtYkabi2vM2BTkVzhfkWW75Sii8d46zUVz0=" 
            alt="Hotel exterior" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto bg-[#3e2723]/80 p-10 rounded-2xl backdrop-blur-sm border border-[#81c784]/30 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Welcome to <br/> <span className="text-[#81c784]">Prime Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10">
            Enjoy clean and comfortable rooms, delicious food, and wonderful hospitality at affordable rates.
          </p>
          <button 
            onClick={() => navigate('rooms')}
            className="bg-[#81c784] text-[#3e2723] text-xl px-10 py-4 rounded-xl font-bold hover:bg-[#66bb6a] transition shadow-lg"
          >
            Explore Rooms
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-[#3e2723] mb-4">Why Stay With Us</h2>
          <div className="w-20 h-1 bg-[#81c784] mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
           <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-stone-200">
             <div className="bg-[#e8f5e9] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#2e7d32]" />
             </div>
             <h3 className="text-2xl font-bold text-[#3e2723] mb-3">Safe & Secure</h3>
             <p className="text-stone-600 text-lg">Your safety and comfort are our top priorities around the clock.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-stone-200">
             <div className="bg-[#e8f5e9] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-8 h-8 text-[#2e7d32]" />
             </div>
             <h3 className="text-2xl font-bold text-[#3e2723] mb-3">Fresh Dining</h3>
             <p className="text-stone-600 text-lg">Enjoy freshly prepared meals and complimentary breakfast every morning.</p>
           </div>
           <div className="bg-white p-8 rounded-2xl shadow-sm text-center border border-stone-200">
             <div className="bg-[#e8f5e9] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-[#2e7d32]" />
             </div>
             <h3 className="text-2xl font-bold text-[#3e2723] mb-3">Prime Location</h3>
             <p className="text-stone-600 text-lg">Conveniently situated near major city attractions and shopping centers.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
