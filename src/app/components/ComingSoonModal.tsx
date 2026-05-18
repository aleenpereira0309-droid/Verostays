import { X } from 'lucide-react';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6 text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" style={{ color: '#222222' }} />
          </button>
          
          {/* Loading Animation */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 border-8 border-gray-200 rounded-full"></div>
              <div 
                className="absolute inset-0 border-8 border-transparent rounded-full animate-spin"
                style={{ 
                  borderTopColor: '#4A4A4A',
                  borderRightColor: '#4A4A4A'
                }}
              ></div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-3" style={{ color: '#222222' }}>
            Coming Soon
          </h2>
          <p className="text-gray-600 text-lg">
            This profile link will be available soon. Please check back later.
          </p>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: '#4A4A4A' }}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}