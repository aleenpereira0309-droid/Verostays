import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { HandpickedLuxuryStays } from '../components/HandpickedLuxuryStays';
import { ValueProposition } from '../components/ValueProposition';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { CitiesNavigation } from '../components/CitiesNavigation';
import { PromotionalBanner } from '../components/PromotionalBanner';
import { HolidaySpecialPrices } from '../components/HolidaySpecialPrices';
import { EmailSubscriptionBanner } from '../components/EmailSubscriptionBanner';
import { ExploreCities } from '../components/ExploreCities';
import { useState } from 'react';

export function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      <CitiesNavigation />
      <main>
        <HeroSection />
        <PromotionalBanner />
        <HandpickedLuxuryStays />
        <HolidaySpecialPrices />
        <EmailSubscriptionBanner />
        <ExploreCities />
        <ValueProposition />
      </main>
      <Footer />
      <LoginSignupModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}