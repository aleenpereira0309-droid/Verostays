import { useNavigate } from 'react-router';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showBackButton?: boolean;
}

export function Breadcrumb({ items, showBackButton = true }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-4 py-4">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium"
          style={{ color: '#222222' }}
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
      )}

      {/* Breadcrumb Trail */}
      <nav className="flex items-center gap-2 text-sm">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.path && index < items.length - 1 ? (
              <button
                onClick={() => navigate(item.path!)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <span className="font-semibold" style={{ color: '#222222' }}>
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
