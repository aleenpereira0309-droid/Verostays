import { Globe, Hotel, UserCircle } from 'lucide-react';
import { Link } from 'react-router';

interface HeaderProps {
  onLoginClick: () => void;
}

export function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold" style={{ color: '#EE2A24' }}>
            VeroStays
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link 
            to="/list-property" 
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: '#222222' }}
          >
            <Hotel className="w-4 h-4" />
            List your property
          </Link>
          <button 
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
            style={{ color: '#222222' }}
          >
            <Globe className="w-4 h-4" />
            English
          </button>
          <button 
            onClick={onLoginClick}
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-md border-2 hover:bg-gray-50 transition-all"
            style={{ 
              color: '#222222',
              borderColor: '#222222',
              backgroundColor: 'transparent'
            }}
          >
            <UserCircle className="w-4 h-4" />
            Login / Signup
          </button>
        </nav>
      </div>
    </header>
  );
}