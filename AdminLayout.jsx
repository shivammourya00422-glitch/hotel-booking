import React, { useState } from 'react';
import { LayoutDashboard, Users, DoorOpen, Settings, LogOut, Plus, Trash2, CheckCircle, Mail, MapPin } from 'lucide-react';
import { MOCK_HOTELS, MOCK_USERS } from './data';

const AdminSidebar = ({ currentTab, setTab, navigate }) => (
  <div className="w-64 bg-[#3e2723] border-r border-[#4e342e] hidden md:flex flex-col h-full sticky top-0 text-white">
    <div className="h-20 flex items-center px-6 border-b border-[#4e342e]">
       <span className="text-2xl font-serif font-bold text-[#81c784]">Prime Admin</span>
    </div>
    <div className="flex-grow py-8 flex flex-col space-y-2 px-4">
      <button 
        onClick={() => setTab('overview')}
        className={`flex items-center px-4 py-3 rounded-xl text-lg transition-colors ${currentTab === 'overview' ? 'bg-[#81c784] text-[#3e2723] font-bold' : 'text-stone-300 hover:bg-[#4e342e] hover:text-white'}`}
      >
        <LayoutDashboard className="w-5 h-5 mr-4" /> Overview
      </button>
      <button 
        onClick={() => setTab('users')}
        className={`flex items-center px-4 py-3 rounded-xl text-lg transition-colors ${currentTab === 'users' ? 'bg-[#81c784] text-[#3e2723] font-bold' : 'text-stone-300 hover:bg-[#4e342e] hover:text-white'}`}
      >
        <Users className="w-5 h-5 mr-4" /> Users
      </button>
      <button 
        onClick={() => setTab('rooms')}
        className={`flex items-center px-4 py-3 rounded-xl text-lg transition-colors ${currentTab === 'rooms' ? 'bg-[#81c784] text-[#3e2723] font-bold' : 'text-stone-300 hover:bg-[#4e342e] hover:text-white'}`}
      >
        <DoorOpen className="w-5 h-5 mr-4" /> Rooms
      </button>
      <button 
        onClick={() => setTab('settings')}
        className={`flex items-center px-4 py-3 rounded-xl text-lg transition-colors ${currentTab === 'settings' ? 'bg-[#81c784] text-[#3e2723] font-bold' : 'text-stone-300 hover:bg-[#4e342e] hover:text-white'}`}
      >
        <Settings className="w-5 h-5 mr-4" /> Settings
      </button>
    </div>
    <div className="p-6 border-t border-[#4e342e]">
      <button onClick={() => navigate('home')} className="flex items-center justify-center bg-[#4e342e] text-white py-3 rounded-xl w-full hover:bg-[#5d4037] transition font-medium">
        <LogOut className="w-5 h-5 mr-2" /> Logout
      </button>
    </div>
  </div>
);

const AdminOverview = () => (
  <div className="p-8 bg-[#fdfbf7] min-h-full">
    <h1 className="text-4xl font-serif text-[#3e2723] mb-2">Dashboard Overview</h1>
    <p className="text-stone-500 text-lg mb-10">Summary of hotel reservations and guest accounts.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex items-center">
        <div className="bg-[#e8f5e9] p-4 rounded-xl mr-6">
          <LayoutDashboard className="w-8 h-8 text-[#2e7d32]"/>
        </div>
        <div>
          <p className="text-sm font-bold text-stone-500 uppercase">Total Bookings</p>
          <p className="text-4xl font-bold text-[#3e2723]">12</p>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex items-center">
        <div className="bg-[#e8f5e9] p-4 rounded-xl mr-6">
          <CheckCircle className="w-8 h-8 text-[#2e7d32]"/>
        </div>
        <div>
          <p className="text-sm font-bold text-stone-500 uppercase">Confirmed</p>
          <p className="text-4xl font-bold text-[#3e2723]">10</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex items-center">
        <div className="bg-[#e8f5e9] p-4 rounded-xl mr-6">
          <Users className="w-8 h-8 text-[#2e7d32]"/>
        </div>
        <div>
          <p className="text-sm font-bold text-stone-500 uppercase">Registered Users</p>
          <p className="text-4xl font-bold text-[#3e2723]">45</p>
        </div>
      </div>
    </div>
  </div>
);

const AdminRooms = () => (
  <div className="p-8 bg-[#fdfbf7] min-h-full">
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-serif text-[#3e2723] mb-2">Manage Rooms</h1>
        <p className="text-stone-500 text-lg">Add or remove hotel rooms.</p>
      </div>
      <button className="bg-[#81c784] text-[#3e2723] font-bold px-6 py-3 rounded-xl flex items-center hover:bg-[#66bb6a] transition shadow">
        <Plus className="w-5 h-5 mr-2" /> Add Room
      </button>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-stone-600">
          <thead className="bg-stone-100 text-sm uppercase font-bold text-stone-500 border-b border-stone-200">
            <tr>
              <th className="px-6 py-4">Room Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price / Night</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {MOCK_HOTELS.map((room, i) => (
              <tr key={i} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="px-6 py-4 flex items-center">
                  <img src={room.image} className="w-16 h-12 object-cover rounded-xl mr-4 shadow-sm" alt="room" />
                  <span className="font-bold text-[#3e2723]">{room.name}</span>
                </td>
                <td className="px-6 py-4">
                   <span className="bg-stone-200 text-stone-700 text-sm px-3 py-1 rounded-full font-medium">{room.category}</span>
                </td>
                <td className="px-6 py-4 font-bold text-[#3e2723]">${room.price}</td>
                <td className="px-6 py-4">
                  <span className="bg-[#e8f5e9] text-[#2e7d32] text-sm px-3 py-1 rounded-full font-bold">
                    AVAILABLE
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-red-500 bg-red-50 px-4 py-2 rounded-xl text-sm hover:bg-red-100 transition inline-flex items-center font-bold border border-red-100">
                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AdminUsers = () => (
  <div className="p-8 bg-[#fdfbf7] min-h-full">
    <h1 className="text-4xl font-serif text-[#3e2723] mb-2">Guest Users</h1>
    <p className="text-stone-500 text-lg mb-8">Registered accounts on Prime Hotel.</p>
    
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-stone-600">
          <thead className="bg-stone-100 text-sm uppercase font-bold text-stone-500 border-b border-stone-200">
            <tr>
              <th className="px-6 py-4">User ID</th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Joined</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {MOCK_USERS.map((user, i) => (
              <tr key={i} className="border-b border-stone-100 hover:bg-stone-50">
                <td className="px-6 py-4 font-bold text-[#3e2723]">{user.id}</td>
                <td className="px-6 py-4 font-bold text-stone-800">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.date}</td>
                <td className="px-6 py-4 text-right">
                   <button className="text-red-500 bg-red-50 px-4 py-2 rounded-xl text-sm hover:bg-red-100 transition inline-flex items-center font-bold border border-red-100">
                    <Trash2 className="w-4 h-4 mr-2" /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const AdminSettings = () => (
  <div className="p-8 max-w-4xl bg-[#fdfbf7] min-h-full">
    <h1 className="text-4xl font-serif text-[#3e2723] mb-2">Settings</h1>
    <p className="text-stone-500 text-lg mb-8">Update hotel contact information.</p>
    
    <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
      <div className="space-y-6 text-lg">
        <div>
          <label className="block font-medium text-stone-700 mb-2">Address</label>
          <textarea 
            className="w-full bg-stone-50 border border-stone-300 text-stone-900 p-4 rounded-xl focus:border-[#81c784] outline-none h-32"
            defaultValue="Prime Avenue, City Center, Suite 100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-stone-700 mb-2">Phone</label>
            <input 
              type="text"
              className="w-full bg-stone-50 border border-stone-300 text-stone-900 p-4 rounded-xl focus:border-[#81c784] outline-none"
              defaultValue="+1 (555) 019-2834"
            />
          </div>
          <div>
            <label className="block font-medium text-stone-700 mb-2">Email</label>
            <input 
              type="email"
              className="w-full bg-stone-50 border border-stone-300 text-stone-900 p-4 rounded-xl focus:border-[#81c784] outline-none"
              defaultValue="support@primehotel.com"
            />
          </div>
        </div>
        <button className="bg-[#81c784] text-[#3e2723] font-bold px-8 py-4 rounded-xl hover:bg-[#66bb6a] transition shadow w-full md:w-auto text-lg">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const AdminLayout = ({ navigate }) => {
  const [currentTab, setCurrentTab] = useState('overview');

  return (
    <div className="flex h-screen bg-[#fdfbf7] font-sans">
      <AdminSidebar currentTab={currentTab} setTab={setCurrentTab} navigate={navigate} />
      <div className="flex-1 overflow-auto bg-[#fdfbf7]">
        <div className="md:hidden flex justify-between items-center p-4 border-b border-stone-200 bg-[#3e2723] text-white">
           <span className="text-2xl font-serif font-bold text-[#81c784]">Prime Admin</span>
           <button onClick={() => navigate('home')} className="p-2 text-stone-300 bg-[#4e342e] rounded-xl">
             <LogOut className="w-6 h-6" />
           </button>
        </div>
        
        {currentTab === 'overview' && <AdminOverview />}
        {currentTab === 'users' && <AdminUsers />}
        {currentTab === 'rooms' && <AdminRooms />}
        {currentTab === 'settings' && <AdminSettings />}
      </div>
    </div>
  );
};

export default AdminLayout;
