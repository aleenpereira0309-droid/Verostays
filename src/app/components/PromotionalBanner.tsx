import { Gift } from 'lucide-react';

export function PromotionalBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-red-50 border-y border-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm">
            <Gift className="w-8 h-8" style={{ color: '#EE2A24' }} />
          </div>
          <div className="flex items-center gap-3">
            <p className="text-lg font-semibold" style={{ color: '#222222' }}>
              Get 45% off your first VeroStays booking!
            </p>
            <button
              className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#08CB00', color: '#222222' }}
            >
              Sign up now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}