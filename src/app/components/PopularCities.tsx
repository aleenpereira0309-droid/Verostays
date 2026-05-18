import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const cities = [
  {
    name: 'London',
    slug: 'london',
    properties: '350+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1473896100090-53523650d4c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb25kb24lMjBjaXR5c2NhcGUlMjBpY29uaWN8ZW58MXx8fHwxNzczMzE3ODEyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Manchester',
    slug: 'manchester',
    properties: '150+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1692968678752-3f24021a188e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5jaGVzdGVyJTIwRW5nbGFuZCUyMHNreWxpbmV8ZW58MXx8fHwxNzczMzk5MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Edinburgh',
    slug: 'edinburgh',
    properties: '120+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1672330141213-449a46d5fe74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFZGluYnVyZ2glMjBjYXN0bGUlMjBjaXR5fGVufDF8fHx8MTc3MzM5OTA0OXww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Birmingham',
    slug: 'birmingham',
    properties: '180+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1773312524690-ec5a6d325985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCaXJtaW5naGFtJTIwVUslMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzczMzk5MDQ5fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Glasgow',
    slug: 'glasgow',
    properties: '95+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1641379413799-720f9f6e9770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHbGFzZ293JTIwU2NvdGxhbmQlMjBjaXR5fGVufDF8fHx8MTc3MzM5OTA1MHww&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    name: 'Liverpool',
    slug: 'liverpool',
    properties: '110+ VeroStays',
    imageUrl: 'https://images.unsplash.com/photo-1578267764859-a6f4bfd2c683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaXZlcnBvb2wlMjB3YXRlcmZyb250JTIwY2l0eXxlbnwxfHx8fDE3NzMzOTkwNTB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

export function PopularCities() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10 text-center" style={{ color: '#222222' }}>
          Popular Cities
        </h3>
        
        <div className="grid grid-cols-3 gap-8">
          {cities.map((city) => (
            <Link
              key={city.name}
              to={`/city/${city.slug}`}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square shadow-md group-hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={city.imageUrl}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-1" style={{ color: '#222222' }}>
                  {city.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {city.properties}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}