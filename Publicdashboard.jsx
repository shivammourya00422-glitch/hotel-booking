import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

const PublicDashboard = ({ bookings, navigate }) => {
  return (
    <div className="bg-[#fdfbf7] min-h-screen">
      <div className="bg-[#3e2723] py-16 text-center border-b-4 border-[#81c784]">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">My Bookings</h1>
        <p className="text-xl text-stone-300">View and track your confirmed hotel reservations.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {bookings.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-md border border-stone-200">
            <div className="bg-[#e8f5e9] w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-10 h-10 text-[#2e7d32]" />
            </div>
            <h2 className="text-2xl font-bold text-stone-800 mb-4">No Bookings Found</h2>
            <p className="text-stone-500 text-lg mb-8">You have not made any room reservations yet.</p>
            <button onClick={() => navigate('rooms')} className="bg-[#81c784] text-[#3e2723] px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#66bb6a]">Browse Rooms</button>
          </div>
        ) : (
          <div className="space-y-8">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-2xl p-8 shadow-md border border-stone-200 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <img src={booking.hotel.image} alt={booking.hotel.name} className="w-full h-48 object-cover rounded-xl" />
                </div>
                
                <div className="md:w-2/3 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-serif text-[#3e2723] font-bold">{booking.hotel.name}</h2>
                    <span className="bg-[#e8f5e9] text-[#2e7d32] text-sm font-bold px-3 py-1 rounded-full border border-[#c8e6c9] flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-1"/> Confirmed
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-lg text-stone-600">
                    <div>
                      <span className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Guest</span> 
                      <span className="font-medium text-stone-800">{booking.guestName}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Booking ID</span> 
                      <span className="font-medium text-stone-800">{booking.id}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Check-in</span> 
                      <span className="font-medium text-stone-800">{booking.checkIn}</span>
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-1">Check-out</span> 
                      <span className="font-medium text-stone-800">{booking.checkOut}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicDashboard;
