import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { HotelDetailsPage } from './pages/HotelDetailsPage';
import { CityPage } from './pages/CityPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CityDropdownDemo } from './pages/CityDropdownDemo';
import { PropertyRegistrationPage } from './pages/PropertyRegistrationPage';
import { PropertyPolicyAcceptancePage } from './pages/PropertyPolicyAcceptancePage';
import { PropertyDashboardPage } from './pages/PropertyDashboardPage';
import { InterfacePatternsPage } from './pages/InterfacePatternsPage';
import { InteractionMapPage } from './pages/InteractionMapPage';
import {
  CareersPage,
  TermsPage,
  SupportPage,
  StoryPage,
  PressPage,
  CulturePage,
  PrivacyPage,
  CookiesPage,
  ContactPage,
  FAQPage,
  MembershipPage,
  ListPropertyPage
} from './pages/InfoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/search',
    Component: SearchResultsPage
  },
  {
    path: '/hotel/:hotelId',
    Component: HotelDetailsPage
  },
  {
    path: '/city/:citySlug',
    Component: CityPage
  },
  {
    path: '/about',
    Component: AboutUsPage
  },
  {
    path: '/city-dropdown-demo',
    Component: CityDropdownDemo
  },
  {
    path: '/story',
    Component: StoryPage
  },
  {
    path: '/press',
    Component: PressPage
  },
  {
    path: '/careers',
    Component: CareersPage
  },
  {
    path: '/culture',
    Component: CulturePage
  },
  {
    path: '/terms',
    Component: TermsPage
  },
  {
    path: '/privacy',
    Component: PrivacyPage
  },
  {
    path: '/cookies',
    Component: CookiesPage
  },
  {
    path: '/support',
    Component: SupportPage
  },
  {
    path: '/contact',
    Component: ContactPage
  },
  {
    path: '/faq',
    Component: FAQPage
  },
  {
    path: '/membership',
    Component: MembershipPage
  },
  {
    path: '/list-property',
    Component: PropertyRegistrationPage
  },
  {
    path: '/property-policy-acceptance',
    Component: PropertyPolicyAcceptancePage
  },
  {
    path: '/property-dashboard',
    Component: PropertyDashboardPage
  },
  {
    path: '/interface-patterns',
    Component: InterfacePatternsPage
  },
  {
    path: '/interaction-map',
    Component: InteractionMapPage
  }
]);