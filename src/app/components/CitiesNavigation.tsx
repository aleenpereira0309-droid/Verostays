import { ChevronDown } from 'lucide-react';
import { CityDropdown } from './CityDropdown';
import { useNavigate } from 'react-router';

export function CitiesNavigation() {
  const navigate = useNavigate();

  const cityData = {
    London: [
      'South Acton',
      'Mornington Crescent station',
      'Theatreland',
      'Winterville',
      'Chingford',
      'Vauxhall Station',
      'Teddington',
      'Westminster Station'
    ],
    Cardiff: [
      'Cardiff Bay',
      'City Centre',
      'Roath',
      'Canton',
      'Cathays',
      'Pontcanna',
      'Grangetown',
      'Riverside'
    ],
    Manchester: [
      'Northern Quarter',
      'Piccadilly',
      'Deansgate',
      'Salford Quays',
      'Ancoats',
      'Castlefield',
      'Spinningfields',
      'Oxford Road'
    ],
    Aberdeen: [
      'City Centre',
      'Old Aberdeen',
      'Rosemount',
      'Ferryhill',
      'West End',
      'Union Street',
      'Beach Boulevard',
      'Dyce'
    ],
    Newport: [
      'City Centre',
      'Pillgwenlly',
      'Stow Hill',
      'Caerleon',
      'Rogerstone',
      'Beechwood',
      'Malpas',
      'Allt-yr-yn'
    ],
    Crewe: [
      'Town Centre',
      'Crewe Station',
      'West Street',
      'Nantwich Road',
      'Wistaston',
      'Haslington',
      'Shavington',
      'Leighton'
    ]
  };

  const handleSelectLocality = (locality: string) => {
    console.log('Selected locality:', locality);
    // You can navigate to a specific locality page if needed
  };

  const handleViewAll = (city: string) => {
    // Navigate to the city page
    navigate(`/city/${city.toLowerCase()}`);
  };

  const handleAllCitiesClick = () => {
    // Navigate to all cities page or show all cities
    console.log('View all cities');
  };

  return (
    <nav style={{ backgroundColor: '#E5E7EB' }} className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex items-center justify-between gap-6">
          {Object.keys(cityData).map((city) => (
            <li key={city}>
              <CityDropdown
                cityName={city}
                localities={cityData[city as keyof typeof cityData]}
                onSelectLocality={handleSelectLocality}
                onViewAll={() => handleViewAll(city)}
              />
            </li>
          ))}
          <li>
            <button
              onClick={handleAllCitiesClick}
              className="flex items-center gap-1.5 hover:opacity-70 transition-opacity bg-white px-4 py-2"
              style={{ color: '#4A4A4A', fontSize: '14px' }}
            >
              <span>All Cities</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}