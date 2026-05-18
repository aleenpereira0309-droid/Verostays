import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useRef } from 'react';

const cities = [
  {
    name: 'London',
    slug: 'london',
    imageUrl: 'https://images.unsplash.com/photo-1600682111749-2456071bf366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBCaWclMjBCZW4lMjBsYW5kbWFya3xlbnwxfHx8fDE3NzMzOTk5OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Cardiff',
    slug: 'cardiff',
    imageUrl: 'https://images.unsplash.com/photo-1546403072-d1881511179d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJkaWZmJTIwQ2FzdGxlJTIwV2FsZXN8ZW58MXx8fHwxNzczNDA1MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Manchester',
    slug: 'manchester',
    imageUrl: 'https://images.unsplash.com/photo-1771404880140-ce44d06b2f5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5jaGVzdGVyJTIwY2l0eXNjYXBlJTIwRW5nbGFuZHxlbnwxfHx8fDE3NzM0MDUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Edinburgh',
    slug: 'edinburgh',
    imageUrl: 'https://images.unsplash.com/photo-1733003071382-d28303134bb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZGluYnVyZ2glMjBTY290bGFuZCUyMGNhc3RsZXxlbnwxfHx8fDE3NzM0MDUxNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Birmingham',
    slug: 'birmingham',
    imageUrl: 'https://images.unsplash.com/photo-1773312524690-ec5a6d325985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaXJtaW5naGFtJTIwVUslMjBjaXR5fGVufDF8fHx8MTc3MzQwNTczMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Glasgow',
    slug: 'glasgow',
    imageUrl: 'https://images.unsplash.com/photo-1641379413799-720f9f6e9770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHbGFzZ293JTIwU2NvdGxhbmQlMjBjaXR5fGVufDF8fHx8MTc3MzM5OTA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Belfast',
    slug: 'belfast',
    imageUrl: 'https://images.unsplash.com/photo-1501514799070-290ae1c889fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCZWxmYXN0JTIwTm9ydGhlcm4lMjBJcmVsYW5kfGVufDF8fHx8MTc3MzQwNTczNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Liverpool',
    slug: 'liverpool',
    imageUrl: 'https://images.unsplash.com/photo-1615915041112-63d3aaf05251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaXZlcnBvb2wlMjBFbmdsYW5kJTIwd2F0ZXJmcm9udHxlbnwxfHx8fDE3NzM0MDU3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function ExploreCities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
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
          Explore cities
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
            {cities.map((city, index) => (
              <Link
                key={index}
                to={`/city/${city.slug}`}
                className="relative overflow-hidden group cursor-pointer flex-shrink-0"
                style={{ 
                  borderRadius: '8px',
                  aspectRatio: '3/4',
                  width: '280px'
                }}
              >
                <ImageWithFallback
                  src={city.imageUrl}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Dark gradient overlay at bottom */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 75%, rgba(0,0,0,0.7) 100%)'
                  }}
                />
                
                {/* City Name */}
                <h4 
                  className="absolute bottom-4 left-4 font-bold"
                  style={{
                    fontSize: '20px',
                    color: 'white'
                  }}
                >
                  {city.name}
                </h4>
              </Link>
            ))}
          </div>
          
          {/* Left Navigation Button */}
          <button 
            onClick={handleScrollLeft}
            className="absolute -left-4 flex items-center justify-center bg-white hover:bg-gray-50 transition-colors"
            style={{ 
              top: '40%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            aria-label="Previous cities"
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
              top: '40%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)'
            }}
            aria-label="Next cities"
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