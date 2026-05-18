import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { CityDropdown } from '../components/CityDropdown';

const londonLocalities = [
  'South Acton',
  'Mornington Crescent station',
  'Theatreland',
  'Winterville',
  'Chingford',
  'Vauxhall Station',
  'Teddington',
  'Westminster Station'
];

const manchesterLocalities = [
  'Northern Quarter',
  'Piccadilly',
  'Deansgate',
  'Salford Quays',
  'Ancoats',
  'Castlefield',
  'Spinningfields',
  'Oxford Road'
];

const birminghamLocalities = [
  'Jewellery Quarter',
  'Digbeth',
  'Bullring',
  'New Street',
  'Brindleyplace',
  'Moseley',
  'Edgbaston',
  'Chinese Quarter'
];

export function CityDropdownDemo() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedLocality, setSelectedLocality] = useState<string | null>(null);

  const handleSelectLocality = (locality: string) => {
    setSelectedLocality(locality);
    console.log('Selected locality:', locality);
  };

  const handleViewAll = (city: string) => {
    console.log(`View all of ${city}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <main className="py-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h1 className="text-5xl font-bold mb-4" style={{ color: '#222222' }}>
            City Dropdown Navigation Demo
          </h1>
          <p className="text-xl text-gray-600">
            Interactive dropdown menu for selecting cities and popular localities
          </p>
        </div>

        {/* Secondary Navigation Bar - Dropdown Demo */}
        <div className="bg-gray-50 border-t border-b border-gray-200 py-4 mb-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-6">
              <span className="text-sm font-semibold" style={{ color: '#222222' }}>
                Explore Cities:
              </span>
              <div className="flex items-center gap-4">
                <CityDropdown
                  cityName="London"
                  localities={londonLocalities}
                  onSelectLocality={handleSelectLocality}
                  onViewAll={() => handleViewAll('London')}
                />
                <CityDropdown
                  cityName="Manchester"
                  localities={manchesterLocalities}
                  onSelectLocality={handleSelectLocality}
                  onViewAll={() => handleViewAll('Manchester')}
                />
                <CityDropdown
                  cityName="Birmingham"
                  localities={birminghamLocalities}
                  onSelectLocality={handleSelectLocality}
                  onViewAll={() => handleViewAll('Birmingham')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
              Component Features
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#222222' }}>
                  Active State Tab
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>White rectangular background</li>
                  <li>14px dark gray text for city name</li>
                  <li>Light gray chevron (up when open, down when closed)</li>
                  <li>Smooth hover effect</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#222222' }}>
                  Dropdown Panel
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>White background with subtle shadow (blur 10, Y 4, opacity 10%)</li>
                  <li>Zero border radius</li>
                  <li>24px padding on all sides</li>
                  <li>Automatically closes when clicking outside</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#222222' }}>
                  Content Structure
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Title: "Popular Localities" in 16px bold dark text</li>
                  <li>8 locality items in 14px regular dark gray</li>
                  <li>16px vertical spacing between items</li>
                  <li>Bottom link: "All of [City]" in coral-red (#E54B4B) with chevron</li>
                  <li>Clickable items with hover effects</li>
                </ul>
              </div>

              {selectedLocality && (
                <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#F0FDF4', border: '1px solid #00FF41' }}>
                  <p className="text-lg">
                    <span className="font-bold" style={{ color: '#222222' }}>Selected Locality: </span>
                    <span style={{ color: '#00FF41' }}>{selectedLocality}</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Design Specifications */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
              Design Specifications
            </h2>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-3" style={{ color: '#222222' }}>Typography</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>City Name:</strong> 14px, Regular, #4B5563</p>
                  <p><strong>Title:</strong> 16px, Bold, #222222</p>
                  <p><strong>Localities:</strong> 14px, Regular, #4B5563</p>
                  <p><strong>Bottom Link:</strong> 14px, Regular, #E54B4B</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3" style={{ color: '#222222' }}>Spacing & Effects</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Panel Padding:</strong> 24px all sides</p>
                  <p><strong>Item Spacing:</strong> 16px vertical</p>
                  <p><strong>Shadow:</strong> 0 4px 10px rgba(0,0,0,0.1)</p>
                  <p><strong>Border Radius:</strong> 0px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <LoginSignupModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
