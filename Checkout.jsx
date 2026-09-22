import React, { useState } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

const Checkout = ({ hotel, navigate, completeBooking }) => {
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: today,
    checkOut: tomorrow,
    guests: '1'
  });

  if (!hotel) {
    return <div className="min-h-screen flex justify-center items-center text-2xl">Please select a room first.</div>;
  }

  const handleBooking = (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      completeBooking({
        id: 'B-' + Math.floor(Math.random() * 10000),
        hotel,
        guestName: formData.fullName,
        phone: formData.phone,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests
      });
    }, 1200);
  };

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        <button onClick={() => navigate('rooms')} className="flex items-center text-stone-600 mb-8 hover:text-stone-900 font-medium text-lg">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Rooms
        </button>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row border border-stone-200">
          
          <div className="lg:w-1/3 p-8 bg-[#3e2723] text-white">
            <h2 className="text-2xl font-serif text-[#81c784] mb-6">Booking Summary</h2>
            <img src={hotel.image} className="w-full h-48 object-cover rounded-xl mb-6" alt={hotel.name} />
            <h3 className="text-2xl font-bold mb-2">{hotel.name}</h3>
            <p className="text-stone-300 text-lg mb-8">{hotel.category} Room</p>
            
            <div className="space-y-4 text-lg">
              <div className="flex justify-between border-b border-[#4e342e] pb-4">
                <span className="text-stone-300">Rate per Night</span>
                <span className="font-bold">${hotel.price}</span>
              </div>
               <div className="flex justify-between font-bold text-xl pt-4 text-[#81c784]">
                <span>Total Amount</span>
                <span>${hotel.price}</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-[#4e342e] rounded-xl">
              <p className="text-sm text-stone-300 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-[#81c784]" /> 
                Secure reservation with free cancellation up to 24 hours prior.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3 p-8 md:p-12">
            <h2 className="text-3xl font-serif text-[#3e2723] mb-8">Guest Information</h2>
            
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-stone-700 mb-2">Full Name</label>
                <input required type="text" placeholder="e.g. John Doe" className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-stone-700 mb-2">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-lg font-medium text-stone-700 mb-2">Phone Number</label>
                  <input required type="tel" placeholder="1234567890" className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-lg font-medium text-stone-700 mb-2">Check-in Date</label>
                  <input required type="date" className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.checkIn} onChange={e => setFormData({...formData, checkIn: e.target.value})} />
                </div>
                <div>
                  <label className="block text-lg font-medium text-stone-700 mb-2">Check-out Date</label>
                  <input required type="date" className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.checkOut} onChange={e => setFormData({...formData, checkOut: e.target.value})} />
                </div>
                <div>
                  <label className="block text-lg font-medium text-stone-700 mb-2">Guests</label>
                  <select className="w-full p-4 bg-stone-50 border border-stone-300 rounded-xl focus:border-[#81c784] focus:ring-2 focus:ring-[#e8f5e9] outline-none text-lg" value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})}>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className={`w-full mt-8 text-xl font-bold py-4 rounded-xl transition flex justify-center items-center ${loading ? 'bg-stone-400 text-white cursor-not-allowed' : 'bg-[#81c784] text-[#3e2723] hover:bg-[#66bb6a] shadow-lg'}`}
              >
                {loading ? 'Processing...' : 'Confirm Reservation'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
