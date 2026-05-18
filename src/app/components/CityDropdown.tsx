import { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown, ChevronRight } from 'lucide-react';

interface CityDropdownProps {
  cityName: string;
  localities: string[];
  onSelectLocality?: (locality: string) => void;
  onViewAll?: () => void;
}

export function CityDropdown({ cityName, localities, onSelectLocality, onViewAll }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLocalityClick = (locality: string) => {
    if (onSelectLocality) {
      onSelectLocality(locality);
    }
    setIsOpen(false);
  };

  const handleViewAll = () => {
    if (onViewAll) {
      onViewAll();
    }
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Active Tab */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-4 py-2 transition-all hover:bg-white/50"
        style={{ fontSize: '14px', color: '#4A4A4A', backgroundColor: isOpen ? '#FFFFFF' : 'transparent' }}
      >
        <span>{cityName}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" style={{ color: '#9CA3AF' }} />
        ) : (
          <ChevronDown className="w-4 h-4" style={{ color: '#4A4A4A' }} />
        )}
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div
          className="absolute top-full left-0 bg-white z-50"
          style={{
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '0',
            minWidth: '280px'
          }}
        >
          <div className="p-6">
            {/* Title */}
            <h3
              className="font-bold mb-4"
              style={{ fontSize: '16px', color: '#222222' }}
            >
              Popular Localities
            </h3>

            {/* List Items */}
            <div className="space-y-4">
              {localities.map((locality, index) => (
                <button
                  key={index}
                  onClick={() => handleLocalityClick(locality)}
                  className="block w-full text-left transition-colors hover:opacity-70"
                  style={{ fontSize: '14px', color: '#4B5563' }}
                >
                  {locality}
                </button>
              ))}
            </div>

            {/* Bottom Link */}
            <button
              onClick={handleViewAll}
              className="flex items-center gap-2 mt-6 transition-opacity hover:opacity-70"
              style={{ fontSize: '14px', color: '#E54B4B' }}
            >
              <span>All of {cityName}</span>
              <ChevronRight className="w-4 h-4" style={{ color: '#E54B4B' }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}