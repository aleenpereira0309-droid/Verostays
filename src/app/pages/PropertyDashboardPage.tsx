import { useState } from 'react';
import { useNavigate } from 'react-router';
import { 
  LayoutDashboard, 
  Hotel, 
  Bed, 
  DollarSign, 
  Users, 
  UserCheck, 
  TrendingUp,
  Calendar,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Edit,
  Trash2,
  Plus,
  Eye,
  ChevronRight,
  BarChart3,
  Clock,
  Star,
  CheckCircle,
  XCircle
} from 'lucide-react';

type DashboardView = 'overview' | 'rooms' | 'bookings' | 'finance' | 'employees' | 'customers' | 'settings';

export function PropertyDashboardPage() {
  const [currentView, setCurrentView] = useState<DashboardView>('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Mock data - in production, this would come from API
  const propertyData = JSON.parse(localStorage.getItem('propertyRegistrationData') || '{}');
  
  const stats = {
    totalBookings: 1247,
    activeBookings: 23,
    totalRevenue: 185430,
    monthlyRevenue: 24580,
    occupancyRate: 78,
    averageRating: 4.6,
    totalRooms: parseInt(propertyData.totalRooms) || 45,
    availableRooms: 12,
    totalEmployees: 18,
    totalCustomers: 892
  };

  const recentBookings = [
    { id: 'BK001', guest: 'John Smith', room: '201', checkIn: '2026-03-14', checkOut: '2026-03-17', status: 'confirmed', amount: 450 },
    { id: 'BK002', guest: 'Sarah Johnson', room: '305', checkIn: '2026-03-15', checkOut: '2026-03-18', status: 'checked-in', amount: 680 },
    { id: 'BK003', guest: 'Michael Brown', room: '102', checkIn: '2026-03-16', checkOut: '2026-03-19', status: 'confirmed', amount: 520 },
    { id: 'BK004', guest: 'Emma Davis', room: '408', checkIn: '2026-03-14', checkOut: '2026-03-16', status: 'checked-out', amount: 380 },
    { id: 'BK005', guest: 'David Wilson', room: '210', checkIn: '2026-03-17', checkOut: '2026-03-20', status: 'confirmed', amount: 750 }
  ];

  const rooms = [
    { id: 'R001', number: '101', type: 'Single', status: 'available', price: 89, lastCleaned: '2 hours ago' },
    { id: 'R002', number: '102', type: 'Double', status: 'occupied', price: 129, lastCleaned: '1 day ago' },
    { id: 'R003', number: '103', type: 'Suite', status: 'available', price: 249, lastCleaned: '3 hours ago' },
    { id: 'R004', number: '201', type: 'Single', status: 'maintenance', price: 89, lastCleaned: '5 hours ago' },
    { id: 'R005', number: '202', type: 'Double', status: 'occupied', price: 129, lastCleaned: '1 day ago' },
    { id: 'R006', number: '203', type: 'Family', status: 'available', price: 189, lastCleaned: '1 hour ago' }
  ];

  const employees = [
    { id: 'E001', name: 'Alice Cooper', role: 'Manager', department: 'Operations', status: 'active', joinDate: '2023-01-15' },
    { id: 'E002', name: 'Bob Martinez', role: 'Receptionist', department: 'Front Desk', status: 'active', joinDate: '2023-03-20' },
    { id: 'E003', name: 'Carol White', role: 'Housekeeper', department: 'Housekeeping', status: 'active', joinDate: '2023-02-10' },
    { id: 'E004', name: 'Daniel Green', role: 'Chef', department: 'Kitchen', status: 'active', joinDate: '2023-05-01' },
    { id: 'E005', name: 'Eva Thompson', role: 'Accountant', department: 'Finance', status: 'active', joinDate: '2023-04-12' }
  ];

  const transactions = [
    { id: 'T001', date: '2026-03-13', description: 'Booking Payment - BK001', amount: 450, type: 'credit', status: 'completed' },
    { id: 'T002', date: '2026-03-13', description: 'Booking Payment - BK002', amount: 680, type: 'credit', status: 'completed' },
    { id: 'T003', date: '2026-03-12', description: 'Staff Salary - February', amount: -8500, type: 'debit', status: 'completed' },
    { id: 'T004', date: '2026-03-12', description: 'Maintenance Costs', amount: -350, type: 'debit', status: 'completed' },
    { id: 'T005', date: '2026-03-11', description: 'Booking Payment - BK003', amount: 520, type: 'credit', status: 'pending' }
  ];

  const handleLogout = () => {
    localStorage.removeItem('propertyOwnerLoggedIn');
    navigate('/');
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'rooms', label: 'Room Management', icon: Bed },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'employees', label: 'Employees', icon: Users },
    { id: 'customers', label: 'Customers', icon: UserCheck },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold" style={{ color: '#EE2A24' }}>
              VeroStays Partner
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search bookings, rooms, guests..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                style={{ focusRingColor: '#00FF41' }}
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-6 h-6" style={{ color: '#222222' }} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ backgroundColor: '#EE2A24' }} />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="text-right">
                <p className="text-sm font-semibold" style={{ color: '#222222' }}>
                  {propertyData.hotelName || 'Property Owner'}
                </p>
                <p className="text-xs text-gray-500">{propertyData.contactEmail || 'owner@property.com'}</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5" style={{ color: '#222222' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id as DashboardView)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left"
                  style={{
                    backgroundColor: isActive ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                    color: isActive ? '#00FF41' : '#222222'
                  }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Overview Dashboard */}
          {currentView === 'overview' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>
                  Dashboard Overview
                </h2>
                <p className="text-gray-600">Welcome back! Here's what's happening with your property today.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 255, 65, 0.1)' }}>
                      <Calendar className="w-6 h-6" style={{ color: '#00FF41' }} />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: '#222222' }}>{stats.activeBookings}</p>
                  <p className="text-sm text-gray-600">Active Bookings</p>
                  <p className="text-xs text-green-600 mt-2">+12% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(238, 42, 36, 0.1)' }}>
                      <DollarSign className="w-6 h-6" style={{ color: '#EE2A24' }} />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: '#222222' }}>£{stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Monthly Revenue</p>
                  <p className="text-xs text-green-600 mt-2">+8% from last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-50">
                      <Bed className="w-6 h-6 text-blue-600" />
                    </div>
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: '#222222' }}>{stats.occupancyRate}%</p>
                  <p className="text-sm text-gray-600">Occupancy Rate</p>
                  <p className="text-xs text-blue-600 mt-2">{stats.availableRooms} rooms available</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-yellow-50">
                      <Star className="w-6 h-6 text-yellow-600" />
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold mb-1" style={{ color: '#222222' }}>{stats.averageRating}</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                  <p className="text-xs text-yellow-600 mt-2">Based on 234 reviews</p>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-lg border border-gray-200 mb-8">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: '#222222' }}>Recent Bookings</h3>
                  <button className="text-sm font-medium" style={{ color: '#00FF41' }}>
                    View All
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#222222' }}>{booking.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{booking.guest}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{booking.room}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkIn}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkOut}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                              booking.status === 'checked-in' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#00FF41' }}>
                            £{booking.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <button className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-green-400 transition-all text-left">
                  <Hotel className="w-8 h-8 mb-3" style={{ color: '#00FF41' }} />
                  <h4 className="font-bold mb-1" style={{ color: '#222222' }}>Update Property Info</h4>
                  <p className="text-sm text-gray-600">Modify rooms, amenities, and pricing</p>
                </button>

                <button className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-green-400 transition-all text-left">
                  <Calendar className="w-8 h-8 mb-3" style={{ color: '#00FF41' }} />
                  <h4 className="font-bold mb-1" style={{ color: '#222222' }}>Manage Availability</h4>
                  <p className="text-sm text-gray-600">Update room availability calendar</p>
                </button>

                <button className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-green-400 transition-all text-left">
                  <BarChart3 className="w-8 h-8 mb-3" style={{ color: '#00FF41' }} />
                  <h4 className="font-bold mb-1" style={{ color: '#222222' }}>View Reports</h4>
                  <p className="text-sm text-gray-600">Download financial and booking reports</p>
                </button>
              </div>
            </div>
          )}

          {/* Room Management */}
          {currentView === 'rooms' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Room Management</h2>
                  <p className="text-gray-600">Manage your rooms, availability, and pricing</p>
                </div>
                <button className="px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}>
                  <Plus className="w-5 h-5" />
                  Add New Room
                </button>
              </div>

              {/* Room Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Rooms</p>
                  <p className="text-3xl font-bold" style={{ color: '#222222' }}>{stats.totalRooms}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Available</p>
                  <p className="text-3xl font-bold text-green-600">{stats.availableRooms}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Occupied</p>
                  <p className="text-3xl font-bold text-blue-600">{stats.totalRooms - stats.availableRooms}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Maintenance</p>
                  <p className="text-3xl font-bold text-orange-600">3</p>
                </div>
              </div>

              {/* Rooms Table */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: '#222222' }}>All Rooms</h3>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price/Night</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Cleaned</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {rooms.map((room) => (
                        <tr key={room.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#222222' }}>{room.number}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{room.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              room.status === 'available' ? 'bg-green-100 text-green-800' :
                              room.status === 'occupied' ? 'bg-blue-100 text-blue-800' :
                              'bg-orange-100 text-orange-800'
                            }`}>
                              {room.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#00FF41' }}>£{room.price}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{room.lastCleaned}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="View">
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Edit">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Delete">
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Bookings View */}
          {currentView === 'bookings' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Bookings</h2>
                  <p className="text-gray-600">View and manage all property bookings</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: '#222222' }}>All Bookings</h3>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Room</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-in</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Check-out</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#222222' }}>{booking.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{booking.guest}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{booking.room}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkIn}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{booking.checkOut}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              booking.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                              booking.status === 'checked-in' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold" style={{ color: '#00FF41' }}>
                            £{booking.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="View">
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Finance View */}
          {currentView === 'finance' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Finance</h2>
                <p className="text-gray-600">Track revenue, expenses, and financial reports</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
                  <p className="text-3xl font-bold" style={{ color: '#00FF41' }}>£{stats.totalRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-2">+15% from last month</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Pending Payments</p>
                  <p className="text-3xl font-bold text-orange-600">£12,450</p>
                  <p className="text-xs text-gray-600 mt-2">8 transactions</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">This Month</p>
                  <p className="text-3xl font-bold" style={{ color: '#222222' }}>£{stats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-xs text-green-600 mt-2">+8% from last month</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: '#222222' }}>Transaction History</h3>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                    <Download className="w-4 h-4" />
                    Download Report
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#222222' }}>{transaction.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaction.date}</td>
                          <td className="px-6 py-4 text-sm" style={{ color: '#222222' }}>{transaction.description}</td>
                          <td className={`px-6 py-4 whitespace-nowrap text-sm font-semibold ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.type === 'credit' ? '+' : ''}£{Math.abs(transaction.amount).toLocaleString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                              transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Employees View */}
          {currentView === 'employees' && (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Employee Management</h2>
                  <p className="text-gray-600">Manage staff, roles, and departments</p>
                </div>
                <button className="px-6 py-3 rounded-lg font-medium text-white flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}>
                  <Plus className="w-5 h-5" />
                  Add Employee
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Employees</p>
                  <p className="text-3xl font-bold" style={{ color: '#222222' }}>{stats.totalEmployees}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Active</p>
                  <p className="text-3xl font-bold text-green-600">{stats.totalEmployees}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">On Leave</p>
                  <p className="text-3xl font-bold text-orange-600">2</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Departments</p>
                  <p className="text-3xl font-bold" style={{ color: '#222222' }}>6</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: '#222222' }}>All Employees</h3>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                      <Filter className="w-4 h-4" />
                      Filter
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: '#222222' }}>{employee.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{employee.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm" style={{ color: '#222222' }}>{employee.role}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.department}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{employee.joinDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                              {employee.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <div className="flex gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="View">
                                <Eye className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded transition-colors" title="Edit">
                                <Edit className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Customers View */}
          {currentView === 'customers' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Customer Management</h2>
                <p className="text-gray-600">View guest history and manage customer relationships</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Customers</p>
                  <p className="text-3xl font-bold" style={{ color: '#222222' }}>{stats.totalCustomers}</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Repeat Guests</p>
                  <p className="text-3xl font-bold text-green-600">342</p>
                  <p className="text-xs text-gray-600 mt-2">38% repeat rate</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Active This Month</p>
                  <p className="text-3xl font-bold text-blue-600">67</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
                <UserCheck className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold mb-2" style={{ color: '#222222' }}>Customer Database</h3>
                <p className="text-gray-600 mb-4">View detailed customer history, preferences, and booking patterns</p>
                <button className="px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}>
                  View All Customers
                </button>
              </div>
            </div>
          )}

          {/* Settings View */}
          {currentView === 'settings' && (
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>Settings</h2>
                <p className="text-gray-600">Manage your property settings and preferences</p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>Property Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Property Name</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.hotelName || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Property Type</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.propertyType || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Rooms</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.totalRooms || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Star Rating</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.starRating || 'N/A'} Star</p>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 border-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
                    style={{ color: '#222222', borderColor: '#222222' }}>
                    Edit Property Details
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Email</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.contactEmail || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.contactPhone || 'N/A'}</p>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 border-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
                    style={{ color: '#222222', borderColor: '#222222' }}>
                    Update Contact Info
                  </button>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>Banking Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Bank Name</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>{propertyData.bankName || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Account Number</p>
                      <p className="font-semibold" style={{ color: '#222222' }}>****{propertyData.accountNumber?.slice(-4) || 'N/A'}</p>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-2 border-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
                    style={{ color: '#222222', borderColor: '#222222' }}>
                    Update Banking Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
