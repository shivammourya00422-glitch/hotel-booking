import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ navigate, currentRoute, isAdmin }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (isAdmin) return null;

  return (
    <nav className="bg-[#3e2723] text-white shadow-md sticky top-0 z-50 border-b-2 border-[#81c784]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('home')}
          >
            <span className="text-3xl font-serif font-bold text-[#81c784] tracking-wide">PRIME</span>
            <span className="text-2xl font-serif ml-2 text-stone-200">Hotel</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('home')} className={`text-lg font-medium ${currentRoute === 'home' ? 'text-[#81c784]' : 'text-stone-300 hover:text-white transition'}`}>Home</button>
            <button onClick={() => navigate('rooms')} className={`text-lg font-medium ${currentRoute === 'rooms' ? 'text-[#81c784]' : 'text-stone-300 hover:text-white transition'}`}>Rooms</button>
            <button onClick={() => navigate('dashboard')} className={`text-lg font-medium ${currentRoute === 'dashboard' ? 'text-[#81c784]' : 'text-stone-300 hover:text-white transition'}`}>My Bookings</button>
            <button onClick={() => navigate('admin-dashboard')} className="text-lg font-medium text-[#81c784] hover:text-white transition ml-4 border border-[#81c784] px-4 py-1.5 rounded-lg bg-[#4e342e]">Admin Login</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#81c784] p-2">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#3e2723] px-4 pt-2 pb-4 space-y-2 border-t border-[#4e342e]">
          <button onClick={() => { navigate('home'); setIsMenuOpen(false); }} className="block w-full text-left py-3 text-lg text-white border-b border-[#4e342e]">Home</button>
          <button onClick={() => { navigate('rooms'); setIsMenuOpen(false); }} className="block w-full text-left py-3 text-lg text-white border-b border-[#4e342e]">Rooms</button>
          <button onClick={() => { navigate('dashboard'); setIsMenuOpen(false); }} className="block w-full text-left py-3 text-lg text-white border-b border-[#4e342e]">My Bookings</button>
          <button onClick={() => { navigate('admin-dashboard'); setIsMenuOpen(false); }} className="block w-full text-left py-3 text-lg text-[#81c784]">Admin Dashboard</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
