import { Shield, Wifi, Monitor, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Sanitized stays',
    description: 'Professionally cleaned for your safety'
  },
  {
    icon: Wifi,
    title: 'Free Wi-Fi',
    description: 'High-speed internet in all rooms'
  },
  {
    icon: Monitor,
    title: 'AC & TV',
    description: 'Modern amenities for your comfort'
  },
  {
    icon: RefreshCw,
    title: 'Flexible Cancellation',
    description: 'Free cancellation on most bookings'
  }
];

export function ValueProposition() {
  return (
    <section className="py-16" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#FEE2E2' }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#EE2A24' }} />
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: '#222222' }}>
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
