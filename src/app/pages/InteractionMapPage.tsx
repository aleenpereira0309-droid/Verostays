import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { LoginSignupModal } from '../components/LoginSignupModal';
import { useState } from 'react';
import {
  MousePointer2, Hand, Keyboard, Eye, Move, Target, Layers, Zap,
  ChevronDown, Menu, CheckSquare, Circle, ToggleLeft, Sliders,
  Upload, ListOrdered, MoreHorizontal, MessageSquare, Bell,
  ArrowLeftRight, RotateCcw, Command, TrendingUp, Grid3X3
} from 'lucide-react';

export function InteractionMapPage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const patterns = [
    {
      category: 'CLICK ACTIONS',
      icon: MousePointer2,
      color: 'bg-sky-500',
      items: [
        { name: 'Primary Button', trigger: 'Click', response: 'Execute action + toast', example: 'Search, Submit, Book Now' },
        { name: 'Icon Button', trigger: 'Click', response: 'Execute + show tooltip', example: 'Edit, Delete, Upload' },
        { name: 'Toggle Button', trigger: 'Click', response: 'Change state + visual toggle', example: 'Like, Show/Hide' },
        { name: 'Action Link', trigger: 'Click', response: 'Navigate or execute', example: 'Learn More, View Details' },
        { name: 'Clickable Card', trigger: 'Click', response: 'Navigate to detail page', example: 'Hotel cards, City cards' },
      ]
    },
    {
      category: 'HOVER INTERACTIONS',
      icon: Hand,
      color: 'bg-purple-500',
      items: [
        { name: 'Tooltip', trigger: 'Hover', response: 'Show info popup', example: 'Icon explanations' },
        { name: 'Dropdown Menu', trigger: 'Hover (cities)', response: 'Show locality menu', example: 'City navigation bar' },
        { name: 'Preview Card', trigger: 'Hover', response: 'Overlay with details', example: 'Hotel card hover' },
        { name: 'Button State', trigger: 'Hover', response: 'Color change, opacity', example: 'All buttons' },
        { name: 'Inline Edit Reveal', trigger: 'Hover', response: 'Show edit icon', example: 'Editable fields' },
      ]
    },
    {
      category: 'POP-UP MENUS',
      icon: Menu,
      color: 'bg-orange-500',
      items: [
        { name: 'Dropdown Menu', trigger: 'Click trigger', response: 'Show menu panel', example: 'Actions menu' },
        { name: 'Select Dropdown', trigger: 'Click', response: 'Show options list', example: 'City selector' },
        { name: 'Popover', trigger: 'Click', response: 'Show floating panel', example: 'Guest selector, Filters' },
        { name: 'Date Picker', trigger: 'Click', response: 'Show calendar(s)', example: 'Check-in/out dates' },
        { name: 'Context Menu', trigger: 'Right-click', response: 'Show contextual actions', example: 'Future: item actions' },
      ]
    },
    {
      category: 'FORM INPUTS',
      icon: CheckSquare,
      color: 'bg-green-500',
      items: [
        { name: 'Text Input', trigger: 'Click + Type', response: 'Capture text, show focus', example: 'Search, Email, Name' },
        { name: 'Checkbox', trigger: 'Click', response: 'Toggle check state', example: 'Filters, Terms acceptance' },
        { name: 'Radio Button', trigger: 'Click', response: 'Select (exclusive)', example: 'Room type, Payment' },
        { name: 'Switch', trigger: 'Click', response: 'Toggle on/off', example: 'Settings, Notifications' },
        { name: 'Slider', trigger: 'Drag or Click', response: 'Update value', example: 'Price range, Rating' },
        { name: 'File Upload', trigger: 'Click', response: 'Open file picker', example: 'Image uploads' },
      ]
    },
    {
      category: 'NAVIGATION',
      icon: ListOrdered,
      color: 'bg-blue-500',
      items: [
        { name: 'Tabs', trigger: 'Click tab', response: 'Switch content panel', example: 'Dashboard sections' },
        { name: 'Breadcrumbs', trigger: 'Click segment', response: 'Navigate to level', example: 'Home > Hotels > Details' },
        { name: 'Pagination', trigger: 'Click page/arrow', response: 'Load page content', example: 'Search results' },
        { name: 'Carousel', trigger: 'Click arrows', response: 'Scroll items', example: 'Luxury stays, Cities' },
        { name: 'Accordion', trigger: 'Click header', response: 'Expand/collapse', example: 'FAQs, Policies' },
      ]
    },
    {
      category: 'MODAL OVERLAYS',
      icon: Layers,
      color: 'bg-indigo-500',
      items: [
        { name: 'Modal Dialog', trigger: 'Click trigger', response: 'Show overlay + backdrop', example: 'Login/Signup' },
        { name: 'Alert Dialog', trigger: 'Click action', response: 'Confirm/cancel prompt', example: 'Delete confirmation' },
        { name: 'Coming Soon Modal', trigger: 'Click feature', response: 'Show placeholder message', example: 'Unimplemented features' },
        { name: 'Close Modal', trigger: 'Click X or backdrop', response: 'Dismiss modal', example: 'All modals' },
      ]
    },
    {
      category: 'FEEDBACK',
      icon: Bell,
      color: 'bg-yellow-500',
      items: [
        { name: 'Toast Notification', trigger: 'Auto or action', response: 'Temporary message', example: 'Success, Error, Info' },
        { name: 'Progress Bar', trigger: 'Auto update', response: 'Fill bar left to right', example: 'Upload, Loading' },
        { name: 'Loading Spinner', trigger: 'Auto', response: 'Rotate animation', example: 'Fetching data, Nearby button' },
        { name: 'Badge', trigger: 'None (display)', response: 'Show status/count', example: 'New, Notifications (3)' },
        { name: 'Status Indicator', trigger: 'None (display)', response: 'Color-coded state', example: 'Available, Sold Out' },
      ]
    },
    {
      category: 'KEYBOARD SHORTCUTS',
      icon: Keyboard,
      color: 'bg-red-500',
      items: [
        { name: 'Ctrl/Cmd + K', trigger: 'Key press', response: 'Open search', example: 'Quick search' },
        { name: 'Ctrl/Cmd + S', trigger: 'Key press', response: 'Save form', example: 'Form submission' },
        { name: 'Ctrl/Cmd + Z', trigger: 'Key press', response: 'Undo action', example: 'Revert changes' },
        { name: 'Esc', trigger: 'Key press', response: 'Close modal/menu', example: 'Dismiss overlays' },
        { name: 'Tab', trigger: 'Key press', response: 'Focus next element', example: 'Form navigation' },
      ]
    },
    {
      category: 'ADVANCED',
      icon: Zap,
      color: 'bg-pink-500',
      items: [
        { name: 'Undo/Redo', trigger: 'Click arrows', response: 'Navigate state history', example: 'Text editing' },
        { name: 'Drag & Drop', trigger: 'Drag', response: 'Reorder/move items', example: 'Image ordering' },
        { name: 'Multi-step Form', trigger: 'Click Next/Back', response: 'Navigate wizard steps', example: 'Property registration' },
        { name: 'Inline Edit', trigger: 'Click edit icon', response: 'Field becomes editable', example: 'Quick edits' },
        { name: 'Command History', trigger: 'Submit command', response: 'Add to log', example: 'CLI-style interfaces' },
        { name: 'Live Location', trigger: 'Click Nearby', response: 'Get + fill location', example: 'Geolocation in search' },
      ]
    },
  ];

  const interactionTypes = [
    { name: 'Click/Tap', icon: MousePointer2, description: 'Primary interaction for triggering actions' },
    { name: 'Hover', icon: Eye, description: 'Desktop-only, reveals additional info or controls' },
    { name: 'Drag', icon: Move, description: 'Reorder, resize, or move elements' },
    { name: 'Keyboard', icon: Keyboard, description: 'Shortcuts and focus navigation' },
    { name: 'Auto/System', icon: Target, description: 'Automatic feedback without user trigger' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4" style={{ color: '#222222' }}>
            VeroStays Interaction Map
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A visual reference showing all interactive UI patterns and their behaviors at a glance.
            This map categorizes every interaction type in the VeroStays application.
          </p>
        </div>

        {/* Interaction Types Legend */}
        <div className="mb-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>
            Interaction Types
          </h2>
          <div className="grid md:grid-cols-5 gap-4">
            {interactionTypes.map((type) => (
              <div key={type.name} className="flex items-start gap-3">
                <type.icon className="w-5 h-5 text-sky-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">{type.name}</div>
                  <div className="text-xs text-gray-600">{type.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern Categories */}
        <div className="space-y-8">
          {patterns.map((category) => (
            <div key={category.category} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Category Header */}
              <div className={`${category.color} text-white p-4 flex items-center gap-3`}>
                <category.icon className="w-6 h-6" />
                <h3 className="text-xl font-bold">{category.category}</h3>
                <span className="ml-auto bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                  {category.items.length} patterns
                </span>
              </div>

              {/* Pattern Items */}
              <div className="divide-y divide-gray-200">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 hover:bg-gray-50 transition-colors grid md:grid-cols-4 gap-4"
                  >
                    <div className="font-semibold" style={{ color: '#222222' }}>
                      {item.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">
                        Trigger:
                      </span>
                      <span className="text-sm text-gray-700">{item.trigger}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Response:
                      </span>
                      <span className="text-sm text-gray-700">{item.response}</span>
                    </div>
                    <div className="text-sm text-gray-500 italic">
                      {item.example}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Color Coding Reference */}
        <div className="mt-12 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200">
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#EE2A24' }}>
            Color Coding by Action Type
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Primary Actions</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-sky-500 rounded"></div>
                  <span>Sky Blue (#0EA5E9) - Search, CTAs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: '#EE2A24' }}></div>
                  <span>VeroStays Red (#EE2A24) - Brand, Logo</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Feedback States</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span>Green - Success, Available</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span>Red - Error, Destructive, Sold Out</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span>Yellow - Warning, Limited</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Neutral Elements</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-700 rounded"></div>
                  <span>Dark Gray (#222222) - Text, Borders</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-300 rounded"></div>
                  <span>Light Gray - Backgrounds, Dividers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white border-2 border-sky-500 rounded-lg text-center">
            <div className="text-4xl font-bold text-sky-500 mb-2">50+</div>
            <div className="text-sm text-gray-600">Interactive Buttons</div>
          </div>
          <div className="p-6 bg-white border-2 border-purple-500 rounded-lg text-center">
            <div className="text-4xl font-bold text-purple-500 mb-2">15+</div>
            <div className="text-sm text-gray-600">Menus & Dropdowns</div>
          </div>
          <div className="p-6 bg-white border-2 border-green-500 rounded-lg text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">30+</div>
            <div className="text-sm text-gray-600">Form Input Controls</div>
          </div>
          <div className="p-6 bg-white border-2 border-orange-500 rounded-lg text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">20+</div>
            <div className="text-sm text-gray-600">Navigation Patterns</div>
          </div>
        </div>

        {/* Testing Guide */}
        <div className="mt-12 p-6 bg-gray-900 text-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Interaction Testing Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-sky-400">Desktop Testing</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Click actions execute correctly</li>
                <li>✓ Hover states are visible</li>
                <li>✓ Keyboard navigation works (Tab, Enter, Esc)</li>
                <li>✓ Tooltips appear on icon hover</li>
                <li>✓ Dropdown menus open/close properly</li>
                <li>✓ Modal backdrop dismisses on click</li>
                <li>✓ Form validation shows errors</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-400">Mobile Testing</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ Tap targets are 44x44px minimum</li>
                <li>✓ Touch feedback is visible</li>
                <li>✓ Menus work without hover (tap to open)</li>
                <li>✓ Swipe gestures work (carousels)</li>
                <li>✓ Virtual keyboard doesn't obscure inputs</li>
                <li>✓ Long-press actions work</li>
                <li>✓ Pinch-to-zoom disabled on inputs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links to Other Resources */}
        <div className="mt-12 p-6 bg-sky-50 rounded-lg border border-sky-200">
          <h2 className="text-xl font-bold mb-4" style={{ color: '#222222' }}>
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href="/interface-patterns"
              className="p-4 bg-white rounded border border-sky-300 hover:border-sky-500 transition-colors flex items-center gap-3"
            >
              <Grid3X3 className="w-8 h-8 text-sky-500" />
              <div>
                <div className="font-semibold text-sky-700">Live Pattern Library</div>
                <div className="text-sm text-gray-600">Interactive demos of all UI components</div>
              </div>
            </a>
            <a
              href="/INTERFACE_PATTERNS_DOCUMENTATION.md"
              target="_blank"
              className="p-4 bg-white rounded border border-sky-300 hover:border-sky-500 transition-colors flex items-center gap-3"
            >
              <MessageSquare className="w-8 h-8 text-sky-500" />
              <div>
                <div className="font-semibold text-sky-700">Full Documentation</div>
                <div className="text-sm text-gray-600">Detailed technical documentation</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <LoginSignupModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </div>
  );
}
