import { useState } from 'react';

export function EmailSubscriptionBanner() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className="bg-white flex items-center justify-between px-8 py-6"
          style={{
            border: '1px solid #EAEAEA',
            borderRadius: '8px'
          }}
        >
          {/* Left Side */}
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div 
              className="flex items-center justify-center"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#FED7AA',
                fontSize: '24px'
              }}
            >
              🔥
            </div>
            
            {/* Text Stack */}
            <div>
              <h4 
                className="font-bold mb-0.5"
                style={{
                  fontSize: '16px',
                  color: '#4A4A4A'
                }}
              >
                Get access to exclusive deals
              </h4>
              <p 
                style={{
                  fontSize: '14px',
                  color: '#6B7280'
                }}
              >
                Only the best deals reach your inbox
              </p>
            </div>
          </div>
          
          {/* Right Side */}
          <form onSubmit={handleSubmit} className="flex items-center gap-3">
            {/* Email Input */}
            <div className="relative">
              <label 
                htmlFor="newsletter-email"
                className="absolute -top-2 left-3 px-1 bg-white"
                style={{
                  fontSize: '11px',
                  color: '#6B7280'
                }}
              >
                Your email
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g., don@email.com"
                className="px-4 py-2.5"
                style={{
                  border: '1px solid #D1D5DB',
                  borderRadius: '6px',
                  fontSize: '14px',
                  width: '280px',
                  outline: 'none'
                }}
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="px-6 py-2.5 text-white font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: '#D9423E',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            >
              Notify me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}