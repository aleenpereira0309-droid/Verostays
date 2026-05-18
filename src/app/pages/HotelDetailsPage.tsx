import { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { Breadcrumb } from '../components/Breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, MapPin, Wifi, Coffee, Dumbbell, Tv, Wind, Car, Users, CheckCircle2, Bed, ChevronRight, Share2, Heart, X } from 'lucide-react';

// Mock hotel data with detailed room information
const hotelData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Sunday Box Hill Burford Bridge Hotel',
    address: 'Macon Way, CW16DR, Box Hill',
    location: 'Box Hill, London',
    rating: 4.6,
    reviews: 1455,
    description: 'Stylish apartment stay near Box Hill Station with city views',
    mainImages: [
      'https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNDAwMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1637730827702-de34e9ae4ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc3MzM4NDg0NHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1729717949948-56b52db111dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzczMzEyMjk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    popularFor: [
      { icon: MapPin, text: 'Walking distance to Box Hill Station' },
      { icon: Users, text: 'Pet-Friendly' },
      { icon: Car, text: 'Private Parking' },
      { icon: Coffee, text: 'Bar & Restaurant' },
      { icon: Bed, text: 'Apartments' },
      { icon: Coffee, text: 'Breakfast' },
      { icon: Wind, text: 'Private bathroom' },
      { icon: Tv, text: 'View' },
      { icon: Users, text: 'Family rooms' },
      { icon: Wifi, text: 'Free WiFi' },
      { icon: Wind, text: 'Shower' }
    ],
    benefits: [
      '50% Off on Stay',
      'Lowest Price Assured',
      'No Pre-pay Needed | Reserve Now, Pay at the Hotel',
      'Flexible Check-in & Check-Out',
      'Long Stay Offer: Extra 5% off on 3+ nights | Use Code-LONGSTAYS',
      'Extended Stay Offer: Extra 8% off on 7+ nights | Use Code-EXTENDSTAY8',
      'Group & Bulk Booking Offer: Extra 10% off on 8+ room nights | Use Code-GROUP10'
    ],
    nearbyPlaces: [
      { name: 'Joey the Swan', distance: '2 miles' }
    ],
    rooms: [
      {
        id: 'r1',
        type: 'Standard Double Room',
        originalPrice: 169,
        price: 54,
        discount: 50,
        maxGuests: 2,
        bedType: 'Queen Sized Bed',
        image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        amenities: ['Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Mini Bar'],
        available: 5
      },
      {
        id: 'r2',
        type: 'Deluxe Room',
        originalPrice: 220,
        price: 75,
        discount: 50,
        maxGuests: 2,
        bedType: 'King Sized Bed',
        image: 'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        amenities: ['Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Mini Bar', 'Coffee Machine', 'City View'],
        available: 3
      },
      {
        id: 'r3',
        type: 'Executive Suite',
        originalPrice: 320,
        price: 110,
        discount: 50,
        maxGuests: 4,
        bedType: 'King Suite + Sofa Bed',
        image: 'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        amenities: ['Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Flat-screen TV', 'Mini Bar', 'Coffee Machine', 'City View', 'Separate Living Area', 'Bathrobe & Slippers'],
        available: 2
      }
    ]
  },
  '2': {
    id: 2,
    name: 'Sunday London Staines-upon-Thames Heathrow T5',
    address: 'Riverside Drive, TW18 3BA, Twickenham',
    location: 'Twickenham, London',
    rating: 4.7,
    reviews: 1860,
    description: 'Modern hotel near Heathrow Airport with excellent transport links',
    mainImages: [
      'https://images.unsplash.com/photo-1760538047929-fb8b00adb18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwZW50cmFuY2V8ZW58MXx8fHwxNzczNDAwMjA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080'
    ],
    popularFor: [
      { icon: MapPin, text: 'Near Heathrow T5' },
      { icon: Wifi, text: 'Free WiFi' },
      { icon: Car, text: 'Free Parking' },
      { icon: Coffee, text: 'Restaurant' }
    ],
    benefits: [
      '50% Off on Stay',
      'Lowest Price Assured',
      'Free Airport Shuttle'
    ],
    nearbyPlaces: [
      { name: 'Heathrow Terminal 5', distance: '1.5 miles' }
    ],
    rooms: [
      {
        id: 'r1',
        type: 'Standard Double Room',
        originalPrice: 149,
        price: 65,
        discount: 50,
        maxGuests: 2,
        bedType: 'Double Bed',
        image: 'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        amenities: ['Free WiFi', 'Air Conditioning', 'Private Bathroom', 'TV'],
        available: 8
      }
    ]
  }
};

export function HotelDetailsPage() {
  const { hotelId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImageGallery, setShowImageGallery] = useState(false);

  const hotel = hotelData[hotelId || '1'];
  
  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const checkIn = searchParams.get('checkIn');
  const checkOut = searchParams.get('checkOut');
  const rooms = searchParams.get('rooms') || '1';
  const guests = searchParams.get('guests') || '2';

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Select date';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  const selectedRoom = hotel.rooms.find((r: any) => r.id === selectedRoomId) || hotel.rooms[0];
  const couponDiscount = 41;
  const totalSavings = couponDiscount;
  const totalPrice = selectedRoom.price;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      {/* Image Gallery Modal */}
      {showImageGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowImageGallery(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-6xl w-full px-4">
            <ImageWithFallback
              src={hotel.mainImages[currentImageIndex]}
              alt={hotel.name}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
              {hotel.mainImages.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 ${idx === currentImageIndex ? 'ring-2 ring-white' : ''}`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`${hotel.name} ${idx + 1}`}
                    className="w-20 h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main className="bg-white">
        {/* Hero Images */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'United Kingdom' },
              { label: `${hotel.location.split(',')[1]?.trim() || 'London'} Hotels`, path: `/search?destination=${hotel.location.split(',')[1]?.trim() || 'London'}` },
              { label: hotel.name }
            ]}
          />

          <div className="grid grid-cols-4 gap-2 mb-6 relative">
            <div className="col-span-2 row-span-2">
              <ImageWithFallback
                src={hotel.mainImages[0]}
                alt={hotel.name}
                className="w-full h-full object-cover rounded-l-lg cursor-pointer"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setShowImageGallery(true);
                }}
              />
            </div>
            {hotel.mainImages.slice(1, 5).map((img: string, idx: number) => (
              <div key={idx} className={idx === 3 ? 'relative' : ''}>
                <ImageWithFallback
                  src={img}
                  alt={`${hotel.name} ${idx + 2}`}
                  className={`w-full h-48 object-cover cursor-pointer ${
                    idx === 1 ? 'rounded-tr-lg' : idx === 3 ? 'rounded-br-lg' : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(idx + 1);
                    setShowImageGallery(true);
                  }}
                />
                {idx === 3 && (
                  <button
                    onClick={() => setShowImageGallery(true)}
                    className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 font-semibold hover:bg-gray-50"
                    style={{ color: '#222222' }}
                  >
                    <MapPin className="w-4 h-4" />
                    View all photos
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-8">
            {/* Left Column - Hotel Details */}
            <div className="flex-1">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-3xl font-bold mb-2" style={{ color: '#222222' }}>
                      {hotel.name}
                    </h1>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="px-2 py-1 rounded text-sm font-semibold text-white flex items-center gap-1" style={{ backgroundColor: '#00FF41' }}>
                        {hotel.rating}
                        <Star className="w-3 h-3 fill-white" />
                      </div>
                      <span className="text-sm text-gray-600">{hotel.reviews} Ratings</span>
                    </div>
                    <p className="text-sm text-gray-500">{hotel.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Promotion Banner */}
                <div className="flex items-center gap-2 p-3 rounded-lg border-2" style={{ borderColor: '#EE2A24', backgroundColor: '#FFF5F5' }}>
                  <span className="text-sm font-semibold" style={{ color: '#EE2A24' }}>
                    🎉 Easter Holiday Sale is Live - Grab Flat 50% Off | Up to 10% Extra Off for Long Stays & Group Bookings
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-3" style={{ color: '#222222' }}>Description</h2>
                <p className="text-gray-700 mb-4">{hotel.description}</p>

                <h3 className="font-semibold mb-3" style={{ color: '#222222' }}>Most Popular For</h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {hotel.popularFor.map((item: any, idx: number) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span>{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                <h3 className="font-semibold mb-3" style={{ color: '#222222' }}>Exclusive Direct Benefits</h3>
                <div className="space-y-2">
                  {hotel.benefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#00FF41' }} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {hotel.nearbyPlaces && hotel.nearbyPlaces.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-3" style={{ color: '#222222' }}>📍 Places Nearby</h3>
                    <div className="space-y-2">
                      {hotel.nearbyPlaces.map((place: any, idx: number) => (
                        <div key={idx} className="text-sm text-gray-700">
                          {place.name} - {place.distance}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Available Rooms */}
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>Available Rooms</h2>
                <div className="space-y-4">
                  {hotel.rooms.map((room: any) => (
                    <div
                      key={room.id}
                      className={`border-2 rounded-lg overflow-hidden transition-all ${
                        selectedRoomId === room.id
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex">
                        <div className="w-64 h-48 flex-shrink-0">
                          <ImageWithFallback
                            src={room.image}
                            alt={room.type}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-bold mb-1" style={{ color: '#222222' }}>
                                {room.type}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                <Bed className="w-4 h-4" />
                                <span>{room.bedType}</span>
                                <span>•</span>
                                <Users className="w-4 h-4" />
                                <span>Max {room.maxGuests} guests</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-2xl font-bold" style={{ color: '#EE2A24' }}>
                                  £{room.price}
                                </span>
                                <span className="text-sm text-gray-400 line-through">
                                  £{room.originalPrice}
                                </span>
                              </div>
                              <span className="text-xs font-semibold" style={{ color: '#00FF41' }}>
                                {room.discount}% off
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-3">
                            {room.amenities.map((amenity: string, idx: number) => (
                              <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-700">
                                {amenity}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">
                              {room.available} rooms available
                            </span>
                            <button
                              onClick={() => setSelectedRoomId(room.id)}
                              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                                selectedRoomId === room.id
                                  ? 'text-white'
                                  : 'border-2 hover:bg-gray-50'
                              }`}
                              style={
                                selectedRoomId === room.id
                                  ? { backgroundColor: '#00FF41', color: '#222222' }
                                  : { borderColor: '#00FF41', color: '#00FF41' }
                              }
                            >
                              {selectedRoomId === room.id ? 'Selected' : 'Select Room'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="w-96 flex-shrink-0">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold" style={{ color: '#EE2A24' }}>
                      £{selectedRoom.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">
                      £{selectedRoom.originalPrice}
                    </span>
                    <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: '#00FF41', color: 'white' }}>
                      {selectedRoom.discount}% off
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">Inclusive of all taxes</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CheckCircle2 className="w-4 h-4" style={{ color: '#00FF41' }} />
                    <span className="text-sm font-semibold" style={{ color: '#00FF41' }}>Free Cancellation</span>
                  </div>
                </div>

                {/* Booking Details */}
                <div className="mb-4 pb-4 border-b">
                  <div className="text-sm mb-2">
                    <span className="font-semibold">{formatDate(checkIn)} – {formatDate(checkOut)}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {rooms} Room, {guests} Guests
                  </div>
                </div>

                {/* Selected Room */}
                <div className="mb-4 pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="accent-green-500"
                      />
                      <span className="text-sm font-medium">{selectedRoom.type}</span>
                    </div>
                  </div>
                </div>

                {/* Savings */}
                <div className="mb-4 pb-4 border-b">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm" style={{ color: '#EE2A24' }}>⚡ MAXIMUM coupon applied</span>
                      <CheckCircle2 className="w-4 h-4" style={{ color: '#00FF41' }} />
                    </div>
                    <span className="font-semibold">-£{couponDiscount}</span>
                  </div>
                  <button className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                    MORE OFFERS
                  </button>
                </div>

                <div className="mb-4 pb-4 border-b">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>Your savings</span>
                    <span>£{totalSavings}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-lg font-bold mb-1">
                    <span>Total price</span>
                    <span>£{totalPrice}</span>
                  </div>
                  <p className="text-xs text-gray-500">(incl. of all taxes)</p>
                </div>

                {/* Continue Button */}
                <button
                  className="w-full py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity mb-3"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Continue to Book
                </button>

                {/* Cancellation Policy */}
                <div className="text-center">
                  <button className="text-sm" style={{ color: '#EE2A24' }}>
                    Cancellation Policy ⓘ
                  </button>
                  <p className="text-xs text-gray-500 mt-2">
                    By proceeding, you agree to our <span style={{ color: '#EE2A24' }}>Guest Policies</span>.
                  </p>
                </div>
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