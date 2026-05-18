import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { CheckCircle, AlertTriangle, FileText, Shield } from 'lucide-react';

export function PropertyPolicyAcceptancePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const [acceptedPolicies, setAcceptedPolicies] = useState({
    termsAndConditions: false,
    safetyStandards: false,
    qualityGuidelines: false,
    cancellationPolicy: false,
    dataProtection: false,
    paymentTerms: false,
    contentPolicy: false,
    guestRelations: false
  });

  const handleCheckboxChange = (policy: keyof typeof acceptedPolicies) => {
    setAcceptedPolicies({
      ...acceptedPolicies,
      [policy]: !acceptedPolicies[policy]
    });
  };

  const allPoliciesAccepted = Object.values(acceptedPolicies).every(val => val);

  const handleSubmit = () => {
    if (allPoliciesAccepted) {
      // Store property data in localStorage (in production, this would go to backend)
      localStorage.setItem('propertyRegistrationData', JSON.stringify(location.state?.formData || {}));
      localStorage.setItem('propertyOwnerLoggedIn', 'true');
      
      // Navigate to property dashboard
      navigate('/property-dashboard');
    }
  };

  const policies = [
    {
      id: 'termsAndConditions',
      title: 'Terms & Conditions for Property Partners',
      icon: FileText,
      description: 'I agree to VeroStays\' terms and conditions for listing properties on the platform.',
      details: [
        'Commission structure: 15-20% per booking',
        'Minimum 30-day listing commitment',
        'Accurate property information requirement',
        'Immediate booking confirmation obligation'
      ]
    },
    {
      id: 'safetyStandards',
      title: 'Safety & Hygiene Standards',
      icon: Shield,
      description: 'I commit to maintaining VeroStays safety and hygiene standards at all times.',
      details: [
        'Regular fire safety equipment inspections',
        'Valid fire safety certificate',
        'Clean and sanitized rooms for every guest',
        'Emergency evacuation procedures in place',
        'COVID-19 safety protocols compliance'
      ]
    },
    {
      id: 'qualityGuidelines',
      title: 'Quality Assurance Guidelines',
      icon: CheckCircle,
      description: 'I agree to maintain quality standards as per VeroStays requirements.',
      details: [
        'Maintain minimum 3.5 star guest rating',
        'Professional photography of all rooms',
        'Prompt response to guest inquiries (within 24 hours)',
        'Regular property maintenance and updates',
        'Accurate amenity listings'
      ]
    },
    {
      id: 'cancellationPolicy',
      title: 'Cancellation & Refund Policy',
      icon: AlertTriangle,
      description: 'I understand and agree to follow VeroStays cancellation and refund policies.',
      details: [
        'Free cancellation up to 24 hours before check-in',
        'Full refund for guest cancellations as per policy',
        'No-show charges: 100% of first night',
        'Partner cancellations may result in penalties',
        'Overbooking penalties apply'
      ]
    },
    {
      id: 'dataProtection',
      title: 'Data Protection & Privacy (GDPR)',
      icon: Shield,
      description: 'I agree to protect guest data and comply with GDPR regulations.',
      details: [
        'Secure storage of guest information',
        'No sharing of guest data with third parties',
        'Right to data deletion upon request',
        'Transparent data usage policies',
        'Immediate breach notification'
      ]
    },
    {
      id: 'paymentTerms',
      title: 'Payment Terms & Conditions',
      icon: FileText,
      description: 'I agree to the payment terms and commission structure.',
      details: [
        'Payments processed within 7-14 business days',
        'Commission deducted before payment transfer',
        'Valid bank account information required',
        'GST/VAT charges applicable',
        'Dispute resolution within 30 days'
      ]
    },
    {
      id: 'contentPolicy',
      title: 'Content & Listing Policy',
      icon: FileText,
      description: 'I agree to provide accurate and lawful content for my property listing.',
      details: [
        'Only authentic property photos allowed',
        'Accurate description of amenities and facilities',
        'Current and valid pricing information',
        'No misleading or false claims',
        'Compliance with advertising standards'
      ]
    },
    {
      id: 'guestRelations',
      title: 'Guest Relations & Service Standards',
      icon: CheckCircle,
      description: 'I commit to providing excellent service to all VeroStays guests.',
      details: [
        '24/7 guest support availability',
        'Professional and courteous staff behavior',
        'Room ready by official check-in time',
        'Prompt resolution of guest complaints',
        'No discrimination based on nationality, race, or religion'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#EE2A24' }}>
              Partner Policies & Guidelines
            </h1>
            <p className="text-lg" style={{ color: '#222222' }}>
              Please review and accept all policies to complete your property registration
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium" style={{ color: '#222222' }}>
                Policies Accepted
              </span>
              <span className="text-sm font-bold" style={{ color: '#00FF41' }}>
                {Object.values(acceptedPolicies).filter(Boolean).length} / {Object.keys(acceptedPolicies).length}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full transition-all duration-300"
                style={{
                  width: `${(Object.values(acceptedPolicies).filter(Boolean).length / Object.keys(acceptedPolicies).length) * 100}%`,
                  backgroundColor: '#00FF41'
                }}
              />
            </div>
          </div>

          {/* Policies List */}
          <div className="space-y-6 mb-8">
            {policies.map((policy) => {
              const Icon = policy.icon;
              const isAccepted = acceptedPolicies[policy.id as keyof typeof acceptedPolicies];
              
              return (
                <div
                  key={policy.id}
                  className="border rounded-lg p-6 transition-all"
                  style={{
                    borderColor: isAccepted ? '#00FF41' : '#e5e7eb',
                    backgroundColor: isAccepted ? 'rgba(0, 255, 65, 0.02)' : 'white'
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: isAccepted ? '#00FF41' : '#f3f4f6',
                        color: isAccepted ? '#222222' : '#9ca3af'
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#222222' }}>
                        {policy.title}
                      </h3>
                      <p className="text-sm mb-4" style={{ color: '#666' }}>
                        {policy.description}
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#222222' }}>
                          Key Points:
                        </h4>
                        <ul className="space-y-1">
                          {policy.details.map((detail, index) => (
                            <li key={index} className="text-sm flex items-start gap-2" style={{ color: '#666' }}>
                              <span className="text-xs mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isAccepted}
                          onChange={() => handleCheckboxChange(policy.id as keyof typeof acceptedPolicies)}
                          className="w-5 h-5 cursor-pointer"
                          style={{ accentColor: '#00FF41' }}
                        />
                        <span className="text-sm font-medium" style={{ color: '#222222' }}>
                          I have read and agree to these {policy.title.toLowerCase()}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Acceptance */}
          <div className="bg-gray-50 border-2 rounded-lg p-8 mb-8" style={{ borderColor: allPoliciesAccepted ? '#00FF41' : '#e5e7eb' }}>
            <div className="flex items-start gap-4">
              {allPoliciesAccepted ? (
                <CheckCircle className="w-8 h-8 flex-shrink-0" style={{ color: '#00FF41' }} />
              ) : (
                <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              )}
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#222222' }}>
                  {allPoliciesAccepted ? 'Ready to Complete!' : 'Please Accept All Policies'}
                </h3>
                <p className="text-sm" style={{ color: '#666' }}>
                  {allPoliciesAccepted
                    ? 'You have accepted all required policies. Click the button below to complete your registration and access your property dashboard.'
                    : 'You must read and accept all policies above before completing your registration.'}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-between">
            <button
              onClick={() => navigate('/list-property')}
              className="px-6 py-3 border-2 rounded-lg font-medium hover:bg-gray-50 transition-all"
              style={{ color: '#222222', borderColor: '#222222' }}
            >
              Back to Registration
            </button>
            
            <button
              onClick={handleSubmit}
              disabled={!allPoliciesAccepted}
              className="px-8 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#00FF41', color: '#222222' }}
            >
              Complete Registration & Access Dashboard
            </button>
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
