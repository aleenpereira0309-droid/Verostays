import { ImageWithFallback } from './figma/ImageWithFallback';

const promos = [
  {
    code: 'BEACH50',
    title: 'Last-Minute Deals',
    discount: '50',
    imageUrl: 'https://images.unsplash.com/photo-1605581813258-076a6654a37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHJlc29ydCUyMHZhY2F0aW9uJTIwdHJhdmVsfGVufDF8fHx8MTc3MzQwNTE2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'CITY30',
    title: 'Weekend Getaways',
    discount: '30',
    imageUrl: 'https://images.unsplash.com/photo-1672419803775-13cf67ff1961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwYnJlYWslMjB3ZWVrZW5kJTIwZ2V0YXdheXxlbnwxfHx8fDE3NzM0MDUxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    code: 'ADVENTURE40',
    title: 'Adventure Escapes',
    discount: '40',
    imageUrl: 'https://images.unsplash.com/photo-1646531186270-7ec940198148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhvbGlkYXklMjBhZHZlbnR1cmUlMjB0cmF2ZWx8ZW58MXx8fHwxNzczNDA1MTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function HolidaySpecialPrices() {
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
          Holiday Special Prices
        </h3>
        
        <div 
          className="grid grid-cols-3"
          style={{ gap: '20px' }}
        >
          {promos.map((promo, index) => (
            <div 
              key={index}
              className="relative overflow-hidden"
              style={{ 
                borderRadius: '8px',
                aspectRatio: '2/1'
              }}
            >
              <ImageWithFallback
                src={promo.imageUrl}
                alt={promo.title}
                className="w-full h-full object-cover"
                style={{ filter: 'blur(2px)' }}
              />
              
              {/* Dark gradient overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.6) 100%)'
                }}
              />
              
              {/* Top Left Badge */}
              <div 
                className="absolute top-4 left-4 px-3 py-1.5 uppercase"
                style={{
                  border: '1px solid white',
                  fontSize: '10px',
                  color: 'white',
                  borderRadius: '4px'
                }}
              >
                CODE ✂ {promo.code}
              </div>
              
              {/* Main Title */}
              <h4 
                className="absolute font-bold"
                style={{
                  fontSize: '28px',
                  color: 'white',
                  top: '50%',
                  left: '24px',
                  transform: 'translateY(-50%)'
                }}
              >
                {promo.title}
              </h4>
              
              {/* Bottom Left Button */}
              <button 
                className="absolute bottom-4 left-4 px-4 py-2 bg-white hover:bg-gray-100 transition-colors"
                style={{
                  borderRadius: '6px',
                  fontSize: '14px',
                  color: '#222222',
                  fontWeight: '500'
                }}
              >
                Book now
              </button>
              
              {/* Bottom Right Discount */}
              <div 
                className="absolute bottom-4 right-4 text-white text-right"
              >
                <div style={{ fontSize: '12px' }}>Flat</div>
                <div style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '1' }}>
                  {promo.discount}%
                </div>
                <div style={{ fontSize: '12px' }}>off</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}