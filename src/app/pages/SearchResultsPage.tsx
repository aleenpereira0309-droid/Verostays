import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { SearchHeader } from '../components/SearchHeader';
import { Breadcrumb } from '../components/Breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, MapPin, Bed, User, Wind, Wifi, Coffee, Dumbbell, CheckCircle2, ChevronRight } from 'lucide-react';

// Mock hotel data with more details
const mockHotels = [
  {
    id: 1,
    name: 'Sunday Box Hill Burford Bridge Hotel',
    location: 'Box Hill, London',
    rating: 4.7,
    reviews: 2108,
    originalPrice: 169,
    price: 54,
    discount: 50,
    roomType: 'Classic Double Room',
    mainImage: 'https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNDAwMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3MzM4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzczMzEyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    amenities: [
      { icon: Bed, text: 'Queen Sized Bed' },
      { icon: User, text: 'Concierge' },
      { icon: Wind, text: 'Hair Dryer' }
    ],
    moreAmenities: 104
  },
  {
    id: 2,
    name: 'Sunday London Staines-upon-Thames Heathrow T5',
    location: 'Twickenham, London',
    rating: 4.7,
    reviews: 1860,
    originalPrice: 149,
    price: 65,
    discount: 50,
    roomType: 'Deluxe Room',
    mainImage: 'https://images.unsplash.com/photo-1760538047929-fb8b00adb18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwZW50cmFuY2V8ZW58MXx8fHwxNzczNDAwMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1647792855184-af42f1720b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc3MzM5OTk5OHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    amenities: [
      { icon: Bed, text: 'King Sized Bed' },
      { icon: Wifi, text: 'Free Wi-Fi' },
      { icon: Coffee, text: 'Breakfast' }
    ],
    moreAmenities: 87
  },
  {
    id: 3,
    name: 'VeroStays Central Westminster',
    location: 'Westminster, London',
    rating: 4.8,
    reviews: 3245,
    originalPrice: 220,
    price: 110,
    discount: 50,
    roomType: 'Executive Suite',
    mainImage: 'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3MzM4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzczMzEyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    amenities: [
      { icon: Bed, text: 'King Suite' },
      { icon: Dumbbell, text: 'Gym Access' },
      { icon: Wifi, text: 'Premium Wi-Fi' }
    ],
    moreAmenities: 125
  },
  {
    id: 4,
    name: 'Cozy Inn Kensington',
    location: 'Kensington, London',
    rating: 4.5,
    reviews: 892,
    originalPrice: 130,
    price: 65,
    discount: 50,
    roomType: 'Standard Double Room',
    mainImage: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc3MzM5OTk5OHww&ixlib=rb-4.1.0&q=80&w=1080',
    thumbnails: [
      'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3MzM4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    amenities: [
      { icon: Bed, text: 'Double Bed' },
      { icon: Wifi, text: 'Free Wi-Fi' },
      { icon: Coffee, text: 'Tea/Coffee' }
    ],
    moreAmenities: 45
  }
];

const popularLocations = [
  'Southwark', 'Suite 5', 'Winterville', 'Theatreland', 'Charing Cross', 
  'Westminster', 'Kensington', 'Camden', 'Shoreditch'
];

export function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([37, 454]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');

  const destination = searchParams.get('destination') || 'London';
  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const rooms = searchParams.get('rooms') || '1';
  const guests = searchParams.get('guests') || '2';

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev =>
      prev.includes(location)
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const handleViewHotel = (hotelId: number) => {
    const params = new URLSearchParams();
    if (checkIn) params.set('checkIn', checkIn);
    if (checkOut) params.set('checkOut', checkOut);
    params.set('rooms', rooms);
    params.set('guests', guests);
    navigate(`/hotel/${hotelId}?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <SearchHeader 
        initialDestination={destination}
        initialCheckIn={checkIn || undefined}
        initialCheckOut={checkOut || undefined}
        initialRooms={rooms}
        initialGuests={guests}
      />
      
      <main className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'United Kingdom' },
              { label: `${destination} Hotels` }
            ]}
          />

          <div className="flex gap-6">
            {/* Filters Sidebar */}
            <aside className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg p-6 sticky top-32">
                <h3 className="text-xl font-bold mb-6" style={{ color: '#222222' }}>
                  Filters
                </h3>

                {/* Popular Locations */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: '#222222' }}>
                    Popular locations in {destination}
                  </h4>
                  <div className="space-y-2">
                    {popularLocations.slice(0, showAllLocations ? undefined : 5).map((location) => (
                      <button
                        key={location}
                        onClick={() => toggleLocation(location)}
                        className={`text-sm px-3 py-1.5 rounded-md border transition-colors ${
                          selectedLocations.includes(location)
                            ? 'border-red-500 bg-red-50 text-red-600'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {location}
                      </button>
                    ))}
                  </div>
                  {!showAllLocations && (
                    <button
                      onClick={() => setShowAllLocations(true)}
                      className="text-sm mt-2"
                      style={{ color: '#EE2A24' }}
                    >
                      + View More
                    </button>
                  )}
                </div>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b">
                  <h4 className="font-semibold mb-3" style={{ color: '#222222' }}>
                    Price
                  </h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-600">£{priceRange[0]}</span>
                    <span className="text-sm text-gray-600">£{priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="37"
                    max="454"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-red-500"
                  />
                </div>

                {/* Collections */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3" style={{ color: '#222222' }}>
                    Collections
                  </h4>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="accent-red-500" />
                    <span>Homegrown luxury hotel chain</span>
                  </label>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-semibold mb-3" style={{ color: '#222222' }}>
                    Categories
                  </h4>
                  <label className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="accent-red-500 mt-0.5" />
                    <div>
                      <div className="font-medium">VeroStays Hotels</div>
                      <div className="text-xs text-gray-500">Super affordable stays with essential amenities</div>
                    </div>
                  </label>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Page Title & Controls */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h1 className="text-2xl font-bold" style={{ color: '#222222' }}>
                    Top Hotels in {destination} with 50% Off on Breakfast & 50% Off on Stays
                  </h1>
                  <div className="flex items-center gap-3">
                    <button className="text-sm text-gray-600 hover:text-gray-800">
                      Map View
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Sort By</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-1.5 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="popularity">Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Free Cancellation Banner */}
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-green-800 mb-1">Free Cancellation</div>
                    <div className="text-sm text-green-700">
                      Free cancellation till 9AM on the check-in date.
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotel Cards */}
              <div className="space-y-4">
                {mockHotels.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => handleViewHotel(hotel.id)}
                  >
                    <div className="flex">
                      {/* Main Image */}
                      <div className="w-80 h-64 flex-shrink-0 relative">
                        <ImageWithFallback
                          src={hotel.mainImage}
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Thumbnails */}
                      <div className="w-12 flex flex-col">
                        {hotel.thumbnails.map((thumb, idx) => (
                          <div key={idx} className="h-[calc(256px/3)] border-b border-gray-200 last:border-0">
                            <ImageWithFallback
                              src={thumb}
                              alt={`${hotel.name} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Hotel Details */}
                      <div className="flex-1 p-5 flex flex-col">
                        <div className="flex-1">
                          <div className="mb-2">
                            <h3 className="text-xl font-bold mb-1" style={{ color: '#222222' }}>
                              {hotel.name}
                            </h3>
                            <div className="text-sm text-gray-500 mb-3">
                              {hotel.location}
                            </div>
                          </div>

                          {/* Rating */}
                          <div className="flex items-center gap-2 mb-4">
                            <div className="px-2 py-1 rounded text-sm font-semibold text-white flex items-center gap-1" style={{ backgroundColor: '#08CB00' }}>
                              {hotel.rating}
                              <Star className="w-3 h-3 fill-white" />
                            </div>
                            <span className="text-sm" style={{ color: '#222222' }}>
                              ({hotel.reviews} reviews) • Excellent
                            </span>
                          </div>

                          {/* Price */}
                          <div className="mb-4">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold" style={{ color: '#EE2A24' }}>
                                £{hotel.price}
                              </span>
                              <span className="text-lg text-gray-400 line-through">
                                £{hotel.originalPrice}
                              </span>
                              <span className="text-sm font-semibold" style={{ color: '#08CB00' }}>
                                {hotel.discount}% off
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">+ £0 Taxes</div>
                          </div>

                          {/* Amenities */}
                          <div className="flex items-center gap-4 mb-4">
                            {hotel.amenities.map((amenity, idx) => {
                              const Icon = amenity.icon;
                              return (
                                <div key={idx} className="flex items-center gap-1.5 text-sm text-gray-700">
                                  <Icon className="w-4 h-4" />
                                  <span>{amenity.text}</span>
                                </div>
                              );
                            })}
                            {hotel.moreAmenities > 0 && (
                              <span className="text-sm text-gray-500">+ {hotel.moreAmenities} more</span>
                            )}
                          </div>

                          {/* Room Type */}
                          <div className="text-sm font-medium text-gray-700 mb-2">
                            {hotel.roomType}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-4 border-t">
                          <button
                            className="px-6 py-2.5 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            style={{ borderColor: '#08CB00', color: '#08CB00' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewHotel(hotel.id);
                            }}
                          >
                            View Details
                          </button>
                          <button
                            className="px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: '#08CB00', color: '#222222' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewHotel(hotel.id);
                            }}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <LoginSignupModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}