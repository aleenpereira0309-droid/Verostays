import { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { Breadcrumb } from '../components/Breadcrumb';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Star, MapPin } from 'lucide-react';

// Mock data for cities
const cityData: Record<string, any> = {
  london: {
    name: 'London',
    description: 'Discover the best hotels in London, from luxury stays to budget-friendly options.',
    heroImage: 'https://images.unsplash.com/photo-1473896100090-53523650d4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBjaXR5c2NhcGUlMjBpY29uaWN8ZW58MXx8fHwxNzczMzE3ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 1, name: 'The Royal Grand Hotel', location: 'Westminster', rating: 4.8, reviews: 523, price: 150, image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 2, name: 'VeroStays Central London', location: 'Covent Garden', rating: 4.6, reviews: 412, price: 110, image: 'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 3, name: 'Thames View Suites', location: 'South Bank', rating: 4.7, reviews: 638, price: 135, image: 'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 4, name: 'Budget Inn London', location: 'King\'s Cross', rating: 4.2, reviews: 289, price: 65, image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc3MzM5OTk5OHww&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  },
  manchester: {
    name: 'Manchester',
    description: 'Explore top-rated hotels in Manchester, perfect for business and leisure travelers.',
    heroImage: 'https://images.unsplash.com/photo-1692968678752-3f24021a188e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5jaGVzdGVyJTIwRW5nbGFuZCUyMHNreWxpbmV8ZW58MXx8fHwxNzczMzk5MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 5, name: 'Manchester Business Hotel', location: 'City Centre', rating: 4.5, reviews: 342, price: 95, image: 'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 6, name: 'VeroStays Manchester', location: 'Northern Quarter', rating: 4.4, reviews: 278, price: 80, image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  },
  edinburgh: {
    name: 'Edinburgh',
    description: 'Stay in historic Edinburgh with our carefully selected hotels near major attractions.',
    heroImage: 'https://images.unsplash.com/photo-1672330141213-449a46d5fe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZGluYnVyZ2glMjBjYXN0bGUlMjBjaXR5fGVufDF8fHx8MTc3MzM5OTA0OXww&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 7, name: 'Castle View Hotel', location: 'Old Town', rating: 4.9, reviews: 567, price: 140, image: 'https://images.unsplash.com/photo-1759223198981-661cadbbff36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwc3VpdGV8ZW58MXx8fHwxNzczMzk5OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  },
  birmingham: {
    name: 'Birmingham',
    description: 'Find comfortable accommodations in Birmingham, England\'s second-largest city.',
    heroImage: 'https://images.unsplash.com/photo-1773312524690-ec5a6d325985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaXJtaW5naGFtJTIwVUslMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzczMzk5MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 8, name: 'Birmingham Central Inn', location: 'City Centre', rating: 4.3, reviews: 234, price: 70, image: 'https://images.unsplash.com/photo-1647792855184-af42f1720b91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc3MzM5OTk5OHww&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  },
  glasgow: {
    name: 'Glasgow',
    description: 'Discover Glasgow\'s vibrant culture while staying at our partner hotels.',
    heroImage: 'https://images.unsplash.com/photo-1641379413799-720f9f6e9770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHbGFzZ293JTIwU2NvdGxhbmQlMjBjaXR5fGVufDF8fHx8MTc3MzM5OTA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 9, name: 'Glasgow Modern Suites', location: 'West End', rating: 4.6, reviews: 445, price: 90, image: 'https://images.unsplash.com/photo-1572177215152-32f247303126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzczMzc5NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  },
  liverpool: {
    name: 'Liverpool',
    description: 'Experience Liverpool\'s rich history with our selection of quality hotels.',
    heroImage: 'https://images.unsplash.com/photo-1578267764859-a6f4bfd2c683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaXZlcnBvb2wlMjB3YXRlcmZyb250JTIwY2l0eXxlbnwxfHx8fDE3NzMzOTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    hotels: [
      { id: 10, name: 'Waterfront Hotel Liverpool', location: 'Albert Dock', rating: 4.7, reviews: 512, price: 105, image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzOTUwMTV8MA&ixlib=rb-4.1.0&q=80&w=1080' }
    ]
  }
};

export function CityPage() {
  const { citySlug } = useParams();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const city = cityData[citySlug || ''] || cityData.london;

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <ImageWithFallback
            src={city.heroImage}
            alt={city.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 flex items-end">
            <div className="max-w-7xl mx-auto px-6 pb-12 w-full">
              <h1 className="text-5xl font-bold text-white mb-3">{city.name}</h1>
              <p className="text-xl text-white/90">{city.description}</p>
            </div>
          </div>
        </div>

        {/* Hotels List */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'United Kingdom' },
              { label: `${city.name} Hotels` }
            ]}
          />

          <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
            Available Hotels ({city.hotels.length})
          </h2>

          <div className="grid grid-cols-2 gap-6">
            {city.hotels.map((hotel: any) => (
              <div
                key={hotel.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-56 overflow-hidden">
                  <ImageWithFallback
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold" style={{ color: '#222222' }}>
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{hotel.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    {hotel.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold" style={{ color: '#EE2A24' }}>
                        £{hotel.price}
                      </span>
                      <span className="text-sm text-gray-500">/night</span>
                    </div>
                    <button
                      className="px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#08CB00', color: '#222222' }}
                      onClick={() => navigate(`/hotel/${hotel.id}`)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
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