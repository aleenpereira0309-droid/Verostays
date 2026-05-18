import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef } from 'react';

const properties = [
  {
    name: 'The Lansbury Heritage Hotel',
    location: 'Poplar High Street, London',
    rating: '4.5',
    reviews: '1885',
    ratingText: 'Excellent',
    currentPrice: '223',
    originalPrice: '447',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1619005684580-0a44e7b13d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGhvdGVsJTIwYnVpbGRpbmclMjBMb25kb258ZW58MXx8fHwxNzczNDA1MDI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'The Grand Mayfair',
    location: 'Piccadilly, London',
    rating: '4.7',
    reviews: '2341',
    ratingText: 'Excellent',
    currentPrice: '289',
    originalPrice: '578',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzczMzk5MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'The Royal Chelsea',
    location: 'Kings Road, London',
    rating: '4.6',
    reviews: '1567',
    ratingText: 'Excellent',
    currentPrice: '195',
    originalPrice: '390',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1767336470847-dd0b77398367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYm91dGlxdWUlMjBob3RlbCUyMGZhY2FkZXxlbnwxfHx8fDE3NzM0MDUwMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'The Westminster Palace',
    location: 'Victoria Street, London',
    rating: '4.8',
    reviews: '2198',
    ratingText: 'Exceptional',
    currentPrice: '312',
    originalPrice: '624',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1761295909753-93a4e9e48695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGVudHJhbmNlJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzQwNTAyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'The Savoy London',
    location: 'The Strand, London',
    rating: '4.9',
    reviews: '3210',
    ratingText: 'Exceptional',
    currentPrice: '385',
    originalPrice: '770',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    name: 'The Dorchester',
    location: 'Park Lane, London',
    rating: '4.8',
    reviews: '2876',
    ratingText: 'Exceptional',
    currentPrice: '425',
    originalPrice: '850',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    name: 'Claridge\'s',
    location: 'Brook Street, London',
    rating: '4.9',
    reviews: '3542',
    ratingText: 'Exceptional',
    currentPrice: '465',
    originalPrice: '930',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    name: 'The Ritz London',
    location: 'Piccadilly, London',
    rating: '4.9',
    reviews: '4123',
    ratingText: 'Exceptional',
    currentPrice: '495',
    originalPrice: '990',
    discount: '50% off',
    taxes: '0',
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

export function HandpickedLuxuryStays() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 
          className="font-bold mb-10"
          style={{ 
            fontSize: '24px',
            color: '#4A4A4A',
            textAlign: 'left'
          }}
        >
          Handpicked Luxury Stays
        </h3>
        
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ 
              gap: '20px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {properties.map((property, index) => (
              <div 
                key={index}
                className="bg-white overflow-hidden flex-shrink-0"
                style={{ 
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
                  width: '280px'
                }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={property.imageUrl}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h4 
                    className="font-bold mb-1"
                    style={{ 
                      fontSize: '16px',
                      color: '#222222'
                    }}
                  >
                    {property.name}
                  </h4>
                  
                  <p 
                    className="mb-3"
                    style={{ 
                      fontSize: '14px',
                      color: '#4A4A4A'
                    }}
                  >
                    {property.location}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span 
                      className="px-2 py-0.5 rounded text-white font-medium flex items-center gap-1"
                      style={{ 
                        backgroundColor: '#52B553',
                        fontSize: '12px'
                      }}
                    >
                      {property.rating} ★
                    </span>
                    <span style={{ fontSize: '12px', color: '#6B7280' }}>
                      ({property.reviews} reviews) • {property.ratingText}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="font-bold"
                      style={{ 
                        fontSize: '18px',
                        color: '#EE2A24'
                      }}
                    >
                      £{property.currentPrice}
                    </span>
                    <span 
                      className="line-through"
                      style={{ 
                        fontSize: '14px',
                        color: '#6B7280'
                      }}
                    >
                      £{property.originalPrice}
                    </span>
                    <span 
                      style={{ 
                        fontSize: '14px',
                        color: '#F97316'
                      }}
                    >
                      {property.discount}
                    </span>
                  </div>
                  
                  <p style={{ fontSize: '12px', color: '#9CA3AF' }}>
                    + £{property.taxes} Taxes
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Left Navigation Button */}
          <button 
            onClick={handleScrollLeft}
            className="absolute -left-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
            style={{ 
              top: '35%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            aria-label="Previous properties"
          >
            <ChevronLeft 
              style={{ 
                color: '#EE2A24',
                width: '24px',
                height: '24px',
                strokeWidth: '2px'
              }} 
            />
          </button>
          
          {/* Right Navigation Button */}
          <button 
            onClick={handleScroll}
            className="absolute -right-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
            style={{ 
              top: '35%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            aria-label="Next properties"
          >
            <ChevronRight 
              style={{ 
                color: '#EE2A24',
                width: '24px',
                height: '24px',
                strokeWidth: '2px'
              }} 
            />
          </button>
        </div>
      </div>
    </section>
  );
}