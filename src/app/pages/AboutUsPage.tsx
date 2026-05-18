import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { ComingSoonModal } from '../components/ComingSoonModal';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play, TrendingUp, Globe, Settings, Heart, Linkedin, Link } from 'lucide-react';
import emonImage from 'figma:asset/81582ad6eafc917ba5cc07a73fda2e6543bdd76b.png';
import jaleenImage from 'figma:asset/67cd92955093bf25e447700a56ef1300839782ef.png';

const leadershipTeam = [
  {
    id: 1,
    name: 'Ishrakuzzaman Emon',
    title: 'Founder & CEO',
    image: emonImage,
    bio: 'VeroStays was founded by Ishrakuzzaman Emon, who envisioned creating affordable and quality accommodation for travelers worldwide. Under his leadership, the company has grown exponentially, now serving millions of guests across multiple countries with innovative hospitality solutions.',
    website: 'https://ishrakemon.me/',
    linkedin: 'https://www.linkedin.com/in/ishrakuzzaman-emon/',
    twitter: 'https://x.com/ishrak_emon'
  },
  {
    id: 2,
    name: 'John Aleen Pereira',
    title: 'Founder & CTO',
    image: jaleenImage,
    bio: 'John Aleen Pereira co-founded VeroStays and leads the technology vision, building cutting-edge platform infrastructure that powers seamless booking experiences. His innovative approach to hospitality technology has revolutionized how travelers discover and book quality accommodations globally.',
    website: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name: 'Sarah Mitchell',
    title: 'Chief Operating Officer',
    image: 'https://images.unsplash.com/photo-1758518727592-706e80ebc354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwZXhlY3V0aXZlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczMjg5Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'Sarah brings over 15 years of hospitality experience and oversees our global operations, ensuring excellence in service delivery across all markets. Her strategic leadership has been instrumental in expanding VeroStays presence worldwide.',
    website: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 4,
    name: 'James Chen',
    title: 'VP of Engineering',
    image: 'https://images.unsplash.com/photo-1553028826-defa0c2187d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGxlYWRlcnxlbnwxfHx8fDE3NzMzMDQyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bio: 'James leads our engineering teams, developing innovative solutions that power our platform and enhance the booking experience for millions of users. His technical expertise drives continuous innovation in hospitality technology.',
    website: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 5,
    name: 'Priya Sharma',
    title: 'Chief Financial Officer',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc3MzM5MTkxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Priya manages our financial strategy and operations, driving sustainable growth and ensuring strong fiscal health across all business units. Her financial acumen has enabled VeroStays to scale efficiently.',
    website: '#',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 6,
    name: 'David Thompson',
    title: 'Chief Marketing Officer',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjZW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzMzNjM1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'David spearheads our global marketing initiatives, building brand awareness and driving customer acquisition across multiple channels and regions. His creative campaigns have established VeroStays as a trusted hospitality brand.',
    website: '#',
    linkedin: '#',
    twitter: '#'
  }
];

const timeline = [
  { year: '2018', event: 'Launched VeroStays App', description: 'Started with 20 hotels in London, bringing affordable accommodation to travelers' },
  { year: '2020', event: 'Reached 10,000 Properties', description: 'Expanded across the UK with rapid partner onboarding' },
  { year: '2021', event: 'Crossed 50 Million Downloads', description: 'Became one of the most downloaded travel apps globally' },
  { year: '2023', event: 'Expanded to Europe', description: 'Launched operations in 15 European countries' },
  { year: '2024', event: 'Global Leader in Budget Hospitality', description: 'Now serving 100,000+ hotels across 35 countries' }
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Maximising revenue',
    description: 'Advanced pricing tools and analytics to optimize your earnings'
  },
  {
    icon: Globe,
    title: 'Building online presence',
    description: 'Reach millions of travelers through our global platform'
  },
  {
    icon: Settings,
    title: 'Hassle-free operations',
    description: 'Streamlined management tools for effortless day-to-day operations'
  },
  {
    icon: Heart,
    title: 'Loved by travellers',
    description: 'Join a trusted network with millions of satisfied guest reviews'
  }
];

export function AboutUsPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isComingSoonModalOpen, setIsComingSoonModalOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#') {
      e.preventDefault();
      setIsComingSoonModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        {/* Hero / Our Mission Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-16">
              {/* Left Content */}
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-8" style={{ color: '#222222' }}>
                  Our Mission
                </h1>
                <p className="text-xl leading-relaxed text-gray-700">
                  VeroStays is a global platform that empowers entrepreneurs and small businesses 
                  with hotels and homes by providing full-stack technology that increases earnings 
                  and eases operations. We bring affordable and trusted accommodation that guests 
                  can book instantly.
                </p>
              </div>

              {/* Right Video/Image */}
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwY29ycG9yYXRlfGVufDF8fHx8MTc3MzM2NzUzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="VeroStays team"
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button 
                      className="w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl"
                      style={{ backgroundColor: '#0EA5E9' }}
                    >
                      <Play className="w-10 h-10 text-white fill-white ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics & Partner Benefits */}
        <section className="py-20" style={{ backgroundColor: '#F8F9FA' }}>
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#222222' }}>
              Over 150,000 storefronts are using our tech globally.
            </h2>

            <div className="grid grid-cols-4 gap-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ backgroundColor: '#E5E7EB' }}>
                      <Icon className="w-10 h-10" style={{ color: '#222222' }} />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#222222' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Timeline - Our Story */}
        <section className="bg-white py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: '#222222' }}>
              Our Story
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <h3 className="text-3xl font-bold mb-2" style={{ color: '#08CB00' }}>
                        {item.year}
                      </h3>
                      <h4 className="text-xl font-bold mb-2" style={{ color: '#222222' }}>
                        {item.event}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>

                    {/* Center Dot */}
                    <div className="w-6 h-6 rounded-full border-4 border-white z-10 flex-shrink-0" style={{ backgroundColor: '#08CB00', boxShadow: '0 0 0 4px #F8F9FA' }}></div>

                    {/* Empty Space for Stagger */}
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#222222' }}>
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced leaders driving VeroStays' mission to transform the hospitality industry worldwide.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              {leadershipTeam.map((leader) => (
                <div 
                  key={leader.id} 
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden" style={{ height: '360px' }}>
                    <ImageWithFallback
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#222222' }}>
                      {leader.name}
                    </h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: '#EE2A24' }}>
                      {leader.title}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-5">
                      {leader.bio}
                    </p>
                    
                    {/* Social Links */}
                    {leader.website || leader.linkedin || leader.twitter ? (
                      <div className="flex items-center justify-center gap-3">
                        {leader.website && (
                          <a 
                            href={leader.website}
                            onClick={(e) => handleLinkClick(e, leader.website)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
                            style={{ backgroundColor: '#333333' }}
                            aria-label="Website"
                          >
                            <Link className="w-5 h-5" style={{ color: '#F4F1E8', strokeWidth: '1.5px' }} />
                          </a>
                        )}
                        {leader.linkedin && (
                          <a 
                            href={leader.linkedin}
                            onClick={(e) => handleLinkClick(e, leader.linkedin)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
                            style={{ backgroundColor: '#333333' }}
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" style={{ color: '#F4F1E8', strokeWidth: '1.5px' }} />
                          </a>
                        )}
                        {leader.twitter && (
                          <a 
                            href={leader.twitter}
                            onClick={(e) => handleLinkClick(e, leader.twitter)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
                            style={{ backgroundColor: '#333333' }}
                            aria-label="X (Twitter)"
                          >
                            <svg 
                              className="w-5 h-5"
                              viewBox="0 0 24 24" 
                              fill="none"
                              stroke="#F4F1E8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                              <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ) : (
                      <button 
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all hover:opacity-80"
                        style={{ backgroundColor: '#333333' }}
                      >
                        <Linkedin className="w-5 h-5" style={{ color: '#F4F1E8', strokeWidth: '1.5px' }} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <LoginSignupModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
      <ComingSoonModal 
        isOpen={isComingSoonModalOpen} 
        onClose={() => setIsComingSoonModalOpen(false)} 
      />
    </div>
  );
}