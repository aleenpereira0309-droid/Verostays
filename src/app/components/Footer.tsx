import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="py-12" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              VeroStays
            </h2>
            <p className="text-gray-400 text-sm">
              World's fastest-growing hotel chain
            </p>
          </div>

          {/* About Us */}
          <div>
            <h5 className="text-white font-semibold mb-4">Company</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Teams / Careers */}
          <div>
            <h5 className="text-white font-semibold mb-4">Careers</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Teams
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Culture
                </Link>
              </li>
            </ul>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h5 className="text-white font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h5 className="text-white font-semibold mb-4">Support</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/support" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 text-sm hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-white font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link to="/interface-patterns" className="text-gray-400 text-sm hover:text-white transition-colors">
                  UI Patterns Library
                </Link>
              </li>
              <li>
                <Link to="/interaction-map" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Interaction Map
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 VeroStays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}