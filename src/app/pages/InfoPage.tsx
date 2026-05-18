import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';

interface InfoPageProps {
  title: string;
  content: React.ReactNode;
}

export function InfoPage({ title, content }: InfoPageProps) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#222222' }}>
            {title}
          </h1>
          <div className="prose prose-lg max-w-none" style={{ color: '#222222' }}>
            {content}
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

// About Us Page Content
export function AboutPage() {
  return (
    <InfoPage
      title="About VeroStays"
      content={
        <div className="space-y-6">
          <p className="text-lg">
            VeroStays is the world's fastest-growing hotel chain, with over 100,000 hotels across 35 countries. 
            We are committed to providing exceptional accommodation experiences for travelers worldwide.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            To make quality accommodation accessible to everyone, everywhere. We believe that every traveler 
            deserves a comfortable, clean, and affordable place to stay, whether they're traveling for business 
            or leisure.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
          <p>
            Founded in 2018, VeroStays began with a simple vision: to revolutionize the hotel industry by 
            combining affordability with quality. Today, we partner with thousands of hotels worldwide to 
            bring you the best stays at the best prices.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose VeroStays?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Over 100,000 properties in 35 countries</li>
            <li>Best price guarantee</li>
            <li>24/7 customer support</li>
            <li>Sanitized and quality-checked properties</li>
            <li>Flexible cancellation policies</li>
            <li>Exclusive member benefits and rewards</li>
          </ul>
        </div>
      }
    />
  );
}

// Careers Page
export function CareersPage() {
  return (
    <InfoPage
      title="Careers at VeroStays"
      content={
        <div className="space-y-6">
          <p className="text-lg">
            Join our team of passionate hospitality professionals and help shape the future of travel.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Why Work With Us?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Competitive salaries and benefits</li>
            <li>Flexible working arrangements</li>
            <li>Career growth opportunities</li>
            <li>International work environment</li>
            <li>Employee travel discounts</li>
          </ul>
          <h2 className="text-2xl font-bold mt-8 mb-4">Open Positions</h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-bold text-xl mb-2">Software Engineer</h3>
              <p className="text-gray-600">London, UK • Full-time</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-bold text-xl mb-2">Customer Success Manager</h3>
              <p className="text-gray-600">Remote • Full-time</p>
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Marketing Specialist</h3>
              <p className="text-gray-600">Manchester, UK • Full-time</p>
            </div>
          </div>
        </div>
      }
    />
  );
}

// Terms & Conditions Page
export function TermsPage() {
  return (
    <InfoPage
      title="Terms & Conditions"
      content={
        <div className="space-y-6">
          <p className="text-sm text-gray-600">Last updated: March 13, 2026</p>
          <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using VeroStays services, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">2. Booking and Reservations</h2>
          <p>
            All bookings are subject to availability and confirmation. Prices are quoted in GBP and 
            are subject to change without notice. Payment is required at the time of booking unless 
            otherwise specified.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">3. Cancellation Policy</h2>
          <p>
            Cancellation policies vary by property. Free cancellation is available on most bookings 
            up to 24 hours before check-in. Please review the specific cancellation policy for your 
            reservation.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">4. User Conduct</h2>
          <p>
            Users agree to use VeroStays services only for lawful purposes and in accordance with 
            these Terms. You may not use our services in any way that could damage, disable, or 
            impair our systems.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">5. Privacy</h2>
          <p>
            Your use of VeroStays is also governed by our Privacy Policy. Please review our Privacy 
            Policy to understand our practices.
          </p>
        </div>
      }
    />
  );
}

// Support Page
export function SupportPage() {
  return (
    <InfoPage
      title="Customer Support"
      content={
        <div className="space-y-6">
          <p className="text-lg">
            We're here to help! Our customer support team is available 24/7 to assist you with any 
            questions or concerns.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-700">support@verostays.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-700">+44 20 1234 5678</p>
              <p className="text-sm text-gray-600">Available 24/7</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Live Chat</h3>
              <p className="text-gray-700">Available on our website and mobile app</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mt-8 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold mb-2">How do I cancel my booking?</h3>
              <p className="text-gray-700">
                Log into your account, go to "My Bookings," select the reservation you wish to cancel, 
                and click "Cancel Booking."
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What is your best price guarantee?</h3>
              <p className="text-gray-700">
                If you find a lower price for the same hotel and dates within 24 hours of booking, 
                we'll refund the difference.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">How do I become a member?</h3>
              <p className="text-gray-700">
                Click "Become a Member" in the navigation and fill out the registration form. 
                Membership is free and gives you access to exclusive deals.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}

// Generic pages for other links
export function StoryPage() {
  return <InfoPage title="Our Story" content={<p>Our story content coming soon...</p>} />;
}

export function PressPage() {
  return <InfoPage title="Press" content={<p>Press releases and media kit coming soon...</p>} />;
}

export function CulturePage() {
  return <InfoPage title="Our Culture" content={<p>Learn about our company culture...</p>} />;
}

export function PrivacyPage() {
  return <InfoPage title="Privacy Policy" content={<p>Privacy policy details coming soon...</p>} />;
}

export function CookiesPage() {
  return <InfoPage title="Cookie Policy" content={<p>Cookie policy details coming soon...</p>} />;
}

export function ContactPage() {
  return <InfoPage title="Contact Us" content={<p>Contact information coming soon...</p>} />;
}

export function FAQPage() {
  return <InfoPage title="FAQ" content={<p>Frequently asked questions coming soon...</p>} />;
}

export function MembershipPage() {
  return <InfoPage title="Become a Member" content={<p>Membership benefits and sign-up form coming soon...</p>} />;
}

export function ListPropertyPage() {
  return <InfoPage title="List Your Property" content={<p>Partner with VeroStays. Property listing form coming soon...</p>} />;
}
