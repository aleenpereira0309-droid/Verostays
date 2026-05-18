import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { Building2, MapPin, Bed, DollarSign, Image, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';

interface FormData {
  // Business Information
  hotelName: string;
  businessLegalName: string;
  businessRegistrationNumber: string;
  taxId: string;
  
  // Property Details
  propertyType: string;
  starRating: string;
  yearEstablished: string;
  totalFloors: string;
  
  // Location
  address: string;
  city: string;
  postalCode: string;
  country: string;
  latitude: string;
  longitude: string;
  
  // Rooms & Capacity
  totalRooms: string;
  singleRooms: string;
  doubleRooms: string;
  suiteRooms: string;
  familyRooms: string;
  
  // Pricing
  basePrice: string;
  currency: string;
  
  // Amenities
  amenities: string[];
  
  // Contact
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  alternatePhone: string;
  
  // Bank Details
  bankName: string;
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
  
  // Description
  description: string;
  
  // Images
  images: File[];
}

export function PropertyRegistrationPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState<FormData>({
    hotelName: '',
    businessLegalName: '',
    businessRegistrationNumber: '',
    taxId: '',
    propertyType: 'hotel',
    starRating: '3',
    yearEstablished: '',
    totalFloors: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'United Kingdom',
    latitude: '',
    longitude: '',
    totalRooms: '',
    singleRooms: '',
    doubleRooms: '',
    suiteRooms: '',
    familyRooms: '',
    basePrice: '',
    currency: 'GBP',
    amenities: [],
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    alternatePhone: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    accountHolderName: '',
    description: '',
    images: []
  });

  const amenitiesList = [
    'Free WiFi', 'Parking', 'Swimming Pool', 'Gym', 'Restaurant',
    'Room Service', 'Spa', 'Conference Room', 'Bar', 'Airport Shuttle',
    'Pet Friendly', 'Laundry Service', '24/7 Reception', 'Air Conditioning', 'Elevator'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAmenityToggle = (amenity: string) => {
    setFormData({
      ...formData,
      amenities: formData.amenities.includes(amenity)
        ? formData.amenities.filter(a => a !== amenity)
        : [...formData.amenities, amenity]
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        images: Array.from(e.target.files)
      });
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 6));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to policy acceptance page
    navigate('/property-policy-acceptance', { state: { formData } });
  };

  const steps = [
    { number: 1, title: 'Business Info', icon: Building2 },
    { number: 2, title: 'Property Details', icon: MapPin },
    { number: 3, title: 'Rooms & Pricing', icon: Bed },
    { number: 4, title: 'Amenities', icon: CheckCircle },
    { number: 5, title: 'Contact & Banking', icon: DollarSign },
    { number: 6, title: 'Images & Description', icon: Image }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      {/* Promotional Banner for Property Owners */}
      <section style={{ backgroundColor: '#E5E7EB' }} className="border-y border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-white p-3 rounded-full shadow-sm">
              <TrendingUp className="w-8 h-8" style={{ color: '#EE2A24' }} />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-lg font-semibold" style={{ color: '#222222' }}>
                Boost your revenue by 45% - List your property with VeroStays today!
              </p>
              <button
                className="px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#00FF41', color: '#222222' }}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#EE2A24' }}>
              List Your Property
            </h1>
            <p className="text-lg" style={{ color: '#222222' }}>
              Join thousands of property owners who trust VeroStays to grow their business
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                        currentStep >= step.number
                          ? 'text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}
                      style={{
                        backgroundColor: currentStep >= step.number ? '#00FF41' : undefined
                      }}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                    <span className={`text-xs text-center ${currentStep >= step.number ? 'font-semibold' : ''}`}
                      style={{ color: currentStep >= step.number ? '#222222' : '#999' }}
                    >
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 transition-all ${
                        currentStep > step.number ? '' : 'bg-gray-200'
                      }`}
                      style={{
                        backgroundColor: currentStep > step.number ? '#00FF41' : undefined
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-lg p-8">
            {/* Step 1: Business Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                  Business Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Hotel/Property Name *
                    </label>
                    <input
                      type="text"
                      name="hotelName"
                      value={formData.hotelName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      style={{ focusRingColor: '#00FF41' }}
                      placeholder="e.g., Royal Grand Hotel"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Business Legal Name *
                    </label>
                    <input
                      type="text"
                      name="businessLegalName"
                      value={formData.businessLegalName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="As per registration documents"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Business Registration Number *
                    </label>
                    <input
                      type="text"
                      name="businessRegistrationNumber"
                      value={formData.businessRegistrationNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="Company registration number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Tax ID / VAT Number *
                    </label>
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="Tax identification number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Property Type *
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    >
                      <option value="hotel">Hotel</option>
                      <option value="resort">Resort</option>
                      <option value="motel">Motel</option>
                      <option value="guesthouse">Guest House</option>
                      <option value="bnb">Bed & Breakfast</option>
                      <option value="hostel">Hostel</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Star Rating *
                    </label>
                    <select
                      name="starRating"
                      value={formData.starRating}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    >
                      <option value="1">1 Star</option>
                      <option value="2">2 Star</option>
                      <option value="3">3 Star</option>
                      <option value="4">4 Star</option>
                      <option value="5">5 Star</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Year Established *
                    </label>
                    <input
                      type="number"
                      name="yearEstablished"
                      value={formData.yearEstablished}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="e.g., 2020"
                      min="1900"
                      max="2026"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Total Floors *
                    </label>
                    <input
                      type="number"
                      name="totalFloors"
                      value={formData.totalFloors}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="Number of floors"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Property Details & Location */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                  Property Location
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Street Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="Building number and street name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="City name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Postal code"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Country"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Latitude (Optional)
                      </label>
                      <input
                        type="text"
                        name="latitude"
                        value={formData.latitude}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="e.g., 51.5074"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Longitude (Optional)
                      </label>
                      <input
                        type="text"
                        name="longitude"
                        value={formData.longitude}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="e.g., -0.1278"
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-800">
                      Providing GPS coordinates helps guests find your property more easily on maps.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Rooms & Pricing */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                  Rooms & Pricing
                </h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                      Total Number of Rooms *
                    </label>
                    <input
                      type="number"
                      name="totalRooms"
                      value={formData.totalRooms}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      placeholder="Total rooms available"
                      min="1"
                    />
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#222222' }}>
                      Room Type Breakdown
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                          Single Rooms
                        </label>
                        <input
                          type="number"
                          name="singleRooms"
                          value={formData.singleRooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          placeholder="0"
                          min="0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                          Double Rooms
                        </label>
                        <input
                          type="number"
                          name="doubleRooms"
                          value={formData.doubleRooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          placeholder="0"
                          min="0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                          Suite Rooms
                        </label>
                        <input
                          type="number"
                          name="suiteRooms"
                          value={formData.suiteRooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          placeholder="0"
                          min="0"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                          Family Rooms
                        </label>
                        <input
                          type="number"
                          name="familyRooms"
                          value={formData.familyRooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Base Price Per Night *
                      </label>
                      <input
                        type="number"
                        name="basePrice"
                        value={formData.basePrice}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Starting from"
                        min="0"
                        step="0.01"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Currency *
                      </label>
                      <select
                        name="currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                      >
                        <option value="GBP">GBP (£)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="USD">USD ($)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Amenities */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                  Property Amenities
                </h2>
                
                <p className="text-sm mb-4" style={{ color: '#222222' }}>
                  Select all amenities available at your property
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenitiesList.map((amenity) => (
                    <label
                      key={amenity}
                      className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-all"
                      style={{
                        borderColor: formData.amenities.includes(amenity) ? '#00FF41' : undefined,
                        backgroundColor: formData.amenities.includes(amenity) ? 'rgba(0, 255, 65, 0.05)' : undefined
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.amenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="w-5 h-5"
                        style={{ accentColor: '#00FF41' }}
                      />
                      <span className="text-sm" style={{ color: '#222222' }}>
                        {amenity}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="bg-green-50 border rounded-lg p-4 flex items-start gap-3" style={{ borderColor: '#00FF41' }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#00FF41' }} />
                  <p className="text-sm" style={{ color: '#222222' }}>
                    Properties with more amenities receive 40% more bookings on average.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Contact & Banking */}
            {currentStep === 5 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                    Contact Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Contact Email *
                      </label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Alternate Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="alternatePhone"
                        value={formData.alternatePhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t pt-8">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                    Banking Information
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Bank Name *
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Name of your bank"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Account Holder Name *
                      </label>
                      <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="As per bank records"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Account Number *
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="Bank account number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                        Sort Code / IFSC Code *
                      </label>
                      <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        placeholder="e.g., 12-34-56 or IFSC0001234"
                      />
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3 mt-6">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-yellow-800">
                      This information is securely encrypted and used only for payment processing. Ensure all details are accurate to avoid payment delays.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 6: Images & Description */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#222222' }}>
                  Property Images & Description
                </h2>
                
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                    Property Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                    placeholder="Describe your property, unique features, nearby attractions, and what makes it special..."
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Minimum 100 characters recommended
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#222222' }}>
                    Property Images *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Image className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="inline-block px-6 py-3 text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: '#00FF41', color: '#222222' }}
                    >
                      Upload Images
                    </label>
                    <p className="text-sm text-gray-500 mt-3">
                      Upload at least 5 high-quality images (JPG, PNG)
                    </p>
                    {formData.images.length > 0 && (
                      <p className="text-sm mt-3" style={{ color: '#00FF41' }}>
                        {formData.images.length} image(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-blue-900">Image Tips:</h3>
                  <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
                    <li>Use high-resolution images (minimum 1024x768)</li>
                    <li>Include exterior, rooms, amenities, and common areas</li>
                    <li>Ensure good lighting and professional quality</li>
                    <li>First image will be used as the main thumbnail</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
                  style={{ color: '#222222', borderColor: '#222222' }}
                >
                  Previous
                </button>
              )}
              
              {currentStep < 6 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 rounded-lg font-medium text-white ml-auto hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg font-medium text-white ml-auto hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#00FF41', color: '#222222' }}
                >
                  Complete Registration
                </button>
              )}
            </div>
          </form>
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