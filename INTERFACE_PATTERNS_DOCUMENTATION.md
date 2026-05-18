# VeroStays Interface Patterns Documentation

## Complete Catalog of Interactive UI Elements

This document provides a comprehensive mapping of all interactive UI patterns used in the VeroStays application, categorized according to J. Tidwell's "Designing Interfaces" pattern taxonomy. Each pattern includes implementation details, locations in the codebase, and interaction behaviors.

**Live Demo:** Visit `/interface-patterns` to see all patterns in action with full interactivity.

---

## 1. BUTTONS & ACTION TRIGGERS

### 1.1 Primary Action Buttons
**Type:** Button  
**Description:** High-emphasis buttons for primary calls-to-action  
**Visual:** Solid background with sky blue (#0EA5E9) or red (#EE2A24)  
**Interaction:** Click triggers action, shows hover state, disabled state when loading  
**Locations:**
- Hero search button (HeroSection.tsx:186) - "Search VeroStays"
- Search results filter apply (SearchResultsPage.tsx)
- Hotel booking buttons (HotelDetailsPage.tsx)
- Property registration submit (PropertyRegistrationPage.tsx)
- Login/Signup modal buttons (LoginSignupModal.tsx)

**Code Example:**
```tsx
<Button onClick={handleSearch} className="bg-sky-500 hover:bg-sky-600">
  Search VeroStays
</Button>
```

---

### 1.2 Icon Buttons
**Type:** Button  
**Description:** Compact buttons containing only icons, used in toolbars  
**Visual:** Square or circular with icon, minimal padding  
**Interaction:** Click triggers action, tooltip on hover  
**Locations:**
- Carousel navigation (HandpickedLuxuryStays.tsx, ExploreCities.tsx)
- Header language selector (Header.tsx:32)
- Edit/Delete actions in property dashboard (PropertyDashboardPage.tsx)

**Code Example:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button size="icon" variant="outline">
        <Edit className="w-4 h-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Edit</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### 1.3 Toggle Buttons
**Type:** Button  
**Description:** Buttons that switch between two states  
**Visual:** Changes color/icon when active  
**Interaction:** Click toggles state, provides visual feedback  
**Locations:**
- Favorite/like buttons on hotel cards
- Visibility toggles in property dashboard
- Switch components for settings

---

### 1.4 Action Links
**Type:** Link  
**Description:** Clickable text that triggers navigation or actions  
**Visual:** Underlined text in sky blue (#0EA5E9)  
**Interaction:** Click navigates or triggers action, hover changes color  
**Locations:**
- Header navigation (Header.tsx:22-27)
- Footer links (Footer.tsx)
- Breadcrumb navigation (Breadcrumb.tsx)
- "List your property" header link (Header.tsx:22)

---

## 2. MENUS & DROPDOWNS

### 2.1 Dropdown Menus
**Type:** Pop-up Menu  
**Description:** Menu that appears on button click with multiple action items  
**Visual:** White panel with shadow, list of items  
**Interaction:** Click button to open, click item to execute action, click outside to close  
**Locations:**
- User account menu (when implemented)
- Actions menu in property dashboard
- Sort/filter menus in search results

**Code Example:**
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions <ChevronDown /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onClick={handleEdit}>Edit</DropdownMenuItem>
    <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

### 2.2 City Locality Dropdowns
**Type:** Dropdown Menu  
**Description:** Specialized dropdown showing city localities  
**Visual:** White background button that reveals locality list on hover  
**Interaction:** Hover to open, click locality to navigate, click "View All" for city page  
**Locations:**
- Secondary navigation bar (CitiesNavigation.tsx:90-99)
- CityDropdown component (CityDropdown.tsx)

**Functionality:**
- Hover opens dropdown (no click required)
- Lists 8 popular localities per city
- "View All in [City]" footer link
- Smooth transitions on open/close

---

### 2.3 Guest Selector Popover
**Type:** Popover Menu  
**Description:** Complex popover with increment/decrement controls  
**Visual:** Floating panel with counters for rooms and guests  
**Interaction:** Click to open, use +/- buttons to adjust values, click outside to close  
**Locations:**
- Hero search bar (HeroSection.tsx:169-179)
- Search header (SearchHeader.tsx)

**Functionality:**
- Rooms: 1-10 range
- Guests: 1-20 range
- Disabled state when at min/max
- Real-time value updates

**Code Example:**
```tsx
<Popover>
  <PopoverTrigger>1 Room, 2 Guests</PopoverTrigger>
  <PopoverContent>
    <div>Rooms controls...</div>
    <div>Guests controls...</div>
  </PopoverContent>
</Popover>
```

---

### 2.4 Date Picker Popover
**Type:** Popover with Calendar  
**Description:** Calendar interface for selecting check-in/check-out dates  
**Visual:** Dual calendar display in floating panel  
**Interaction:** Click to open, click date to select, displays selected range  
**Locations:**
- Hero search bar (HeroSection.tsx:137-166)
- Search results filters

**Functionality:**
- Side-by-side calendars for check-in and check-out
- Date range display in trigger button
- Default placeholder dates shown

---

## 3. INPUT CONTROLS & FORMS

### 3.1 Text Inputs
**Type:** Input Field  
**Description:** Standard single-line text input  
**Visual:** White background, gray border, focus ring  
**Interaction:** Click to focus, type to enter text, blur to commit  
**Locations:**
- Destination search (HeroSection.tsx:115-122)
- Email subscription (EmailSubscriptionBanner.tsx)
- Contact forms
- Property registration forms (PropertyRegistrationPage.tsx)
- Login/signup forms (LoginSignupModal.tsx)

**States:**
- Default
- Focused (blue ring)
- Filled
- Error (red border)
- Disabled

---

### 3.2 Search Input with Icon
**Type:** Input Field  
**Description:** Text input with search icon prefix  
**Visual:** Search icon on left, placeholder text  
**Interaction:** Click to focus, type to search, live suggestions (if implemented)  
**Locations:**
- Hero section (HeroSection.tsx:115-122)

**Features:**
- Icon prefix for visual affordance
- "Nearby" button with geolocation functionality
- Real-time location detection using browser geolocation API
- Reverse geocoding to show city name

---

### 3.3 Textarea
**Type:** Input Field  
**Description:** Multi-line text input for longer content  
**Visual:** Larger input box with resize handle  
**Interaction:** Click to focus, type/paste content, auto-grows or scrolls  
**Locations:**
- Contact forms
- Property description fields
- Review submission forms

---

### 3.4 Checkboxes
**Type:** Checkbox  
**Description:** Allow multiple selections from options  
**Visual:** Small square box with checkmark when selected  
**Interaction:** Click to toggle checked/unchecked state  
**Locations:**
- Amenity filters in search results
- Terms acceptance in property registration (PropertyPolicyAcceptancePage.tsx)
- Feature selection in property dashboard

**States:**
- Unchecked
- Checked
- Indeterminate (partial selection)

---

### 3.5 Radio Buttons
**Type:** Radio Group  
**Description:** Allow single selection from mutually exclusive options  
**Visual:** Circular buttons, filled dot when selected  
**Interaction:** Click to select, only one can be active at a time  
**Locations:**
- Room type selection
- Payment method selection
- Sorting options

---

### 3.6 Switch/Toggle
**Type:** Switch  
**Description:** Binary on/off control for settings  
**Visual:** Pill-shaped toggle that slides left/right  
**Interaction:** Click to toggle between on/off states  
**Locations:**
- Settings toggles in property dashboard
- Notification preferences
- Feature enable/disable controls

---

### 3.7 Range Slider
**Type:** Slider  
**Description:** Select a value from a continuous range  
**Visual:** Horizontal track with draggable thumb  
**Interaction:** Drag thumb or click track to set value  
**Locations:**
- Price range filters in search results
- Rating filters
- Distance filters

---

### 3.8 File Upload
**Type:** File Input  
**Description:** Trigger system file selection dialog  
**Visual:** Button with upload icon  
**Interaction:** Click to open file browser, select file, shows selected filename  
**Locations:**
- Property image uploads (PropertyRegistrationPage.tsx)
- Document uploads in registration
- Profile photo uploads

---

## 4. NAVIGATION PATTERNS

### 4.1 Tabs
**Type:** Tab Navigation  
**Description:** Switch between views within same context  
**Visual:** Horizontal list of tab headers, active tab highlighted  
**Interaction:** Click tab to switch content panel  
**Locations:**
- Property dashboard sections (PropertyDashboardPage.tsx)
- Hotel details page (rooms, amenities, reviews)

**Code Example:**
```tsx
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="rooms">Rooms</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
</Tabs>
```

---

### 4.2 Breadcrumb Navigation
**Type:** Breadcrumb  
**Description:** Shows hierarchical location with clickable path  
**Visual:** Home > Category > Current Page with separators  
**Interaction:** Click any segment to navigate to that level  
**Locations:**
- Search results page (SearchResultsPage.tsx)
- Hotel details page (HotelDetailsPage.tsx)
- City pages (CityPage.tsx)
- Property dashboard (PropertyDashboardPage.tsx)

**Features:**
- Back button (← icon)
- Full clickable path
- Current page not clickable
- Chevron separators

**Code Implementation:** Breadcrumb.tsx

---

### 4.3 Pagination
**Type:** Pagination  
**Description:** Navigate through multiple pages of content  
**Visual:** Number buttons with prev/next arrows  
**Interaction:** Click page number or arrow to navigate  
**Locations:**
- Search results page
- City hotel listings
- Property management tables

---

### 4.4 Carousel with Navigation
**Type:** Carousel  
**Description:** Horizontally scrollable content with navigation controls  
**Visual:** Items in a row with circular nav buttons  
**Interaction:** Click arrows to scroll, drag to scroll (if enabled)  
**Locations:**
- "Handpicked Luxury Stays" (HandpickedLuxuryStays.tsx)
- "Explore Cities" (ExploreCities.tsx)
- Hotel image galleries

**Features:**
- Circular white buttons with drop shadow
- Red chevron icons (#EE2A24)
- Smooth scroll animations
- Dot indicators showing position

**Navigation Buttons Style:**
```tsx
className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
// Icon color: #EE2A24 (VeroStays red)
```

---

### 4.5 Accordion/Collapsible Sections
**Type:** Accordion  
**Description:** Expandable sections to show/hide content  
**Visual:** Header with chevron icon, content below when expanded  
**Interaction:** Click header to toggle expansion  
**Locations:**
- FAQ sections
- Hotel policy details
- Filter categories in search

**Code Example:**
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer...</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### 4.6 Secondary City Navigation Bar
**Type:** Navigation Menu Bar  
**Description:** Horizontal menu with dropdown options  
**Visual:** Light gray background (#E5E7EB), white dropdown panels  
**Interaction:** Hover over city name to reveal localities dropdown  
**Location:** Below header on all pages (CitiesNavigation.tsx:87-112)

**Cities:**
- London, Cardiff, Manchester, Aberdeen, Newport, Crewe
- "All Cities" button at end

---

## 5. FEEDBACK & PROGRESS INDICATORS

### 5.1 Toast Notifications
**Type:** Toast / Snackbar  
**Description:** Temporary message overlays for feedback  
**Visual:** Small card appearing at top/bottom with message  
**Interaction:** Appears automatically, auto-dismisses or manually closable  
**Locations:**
- Form submission success/error
- Action confirmations
- Error messages
- Info notifications

**Types:**
- Success (green) - with checkmark icon
- Error (red) - with alert icon
- Info (blue) - with info icon
- Default (gray)

**Implementation:** Uses sonner library

---

### 5.2 Progress Bar
**Type:** Progress Indicator  
**Description:** Shows completion percentage of a task  
**Visual:** Horizontal bar filling left to right  
**Interaction:** Updates automatically as task progresses  
**Locations:**
- File upload progress
- Form completion percentage
- Multi-step processes

---

### 5.3 Loading Spinner
**Type:** Progress Indicator  
**Description:** Indicates ongoing process without specific progress  
**Visual:** Rotating circular icon  
**Interaction:** Displayed while loading, disappears when complete  
**Locations:**
- Page loading states
- "Nearby" button when getting location (HeroSection.tsx:129)
- Button loading states
- Data fetching states

**States:**
- Active (spinning animation)
- Button disabled state when loading

---

### 5.4 Badges & Status Indicators
**Type:** Badge  
**Description:** Small labels showing status, counts, categories  
**Visual:** Rounded rectangle with text, colored by type  
**Interaction:** Usually non-interactive, visual indicator only  
**Locations:**
- Hotel card tags ("Featured", "New", "Discount")
- Notification counts
- Status labels (Available, Sold Out, Limited)
- Amenity tags

**Variants:**
- Default (gray)
- Success (green) - "Available"
- Destructive (red) - "Sold Out"
- Info (blue) - "New"
- Warning (yellow) - "Limited"

---

### 5.5 Hover Tooltips
**Type:** Tooltip  
**Description:** Contextual information on hover  
**Visual:** Small dark popup with text  
**Interaction:** Appears on hover, disappears when mouse leaves  
**Locations:**
- Icon button explanations
- Truncated text expansion
- Help indicators
- Feature explanations

**Code Example:**
```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Helpful information</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## 6. OVERLAYS & MODAL DIALOGS

### 6.1 Login/Signup Modal
**Type:** Modal Dialog  
**Description:** Full authentication modal with tab switching  
**Visual:** Centered white card with backdrop  
**Interaction:** Opens on "Login/Signup" click, tabs switch forms, close button/backdrop  
**Location:** LoginSignupModal.tsx

**Features:**
- Tab switching between Login and Signup
- Form validation
- Email/password inputs
- Social login buttons (Google, Facebook)
- "Forgot password" link
- Close button (X) and backdrop click to close

---

### 6.2 Coming Soon Modal
**Type:** Modal Dialog  
**Description:** Placeholder modal for features under development  
**Visual:** Centered card with gray color scheme (#4A4A4A)  
**Interaction:** Opens on feature click, displays message, close button  
**Location:** ComingSoonModal.tsx

**Design:**
- Dark gray theme (#4A4A4A)
- Centered content
- Animated appearance

---

### 6.3 Alert Dialog
**Type:** Alert Dialog  
**Description:** Confirmation dialog for critical actions  
**Visual:** Modal with header, description, and action buttons  
**Interaction:** Requires user decision (Cancel/Confirm) before closing  
**Locations:**
- Delete confirmations
- Destructive action warnings
- Booking cancellations

**Structure:**
- Title
- Description
- Cancel button
- Confirm button (often red for destructive actions)

---

### 6.4 Popover Overlays
**Type:** Popover  
**Description:** Floating panels anchored to trigger element  
**Visual:** White panel with shadow, positioned near trigger  
**Interaction:** Click trigger to open, click outside to close  
**Locations:**
- Guest selector (HeroSection.tsx:169)
- Date picker (HeroSection.tsx:137)
- Filter panels
- Action menus

---

## 7. ADVANCED INTERACTION PATTERNS

### 7.1 Multi-Step Form Wizard
**Type:** Stepped Form  
**Description:** Form broken into sequential steps with navigation  
**Visual:** Progress indicator at top, step content, Next/Previous buttons  
**Interaction:** Fill step, click Next, can go Back, submit at end  
**Location:** PropertyRegistrationPage.tsx

**Steps:**
1. Basic Information
2. Location Details
3. Property Details
4. Room Information
5. Amenities & Services
6. Pricing & Policies
7. Photos & Media
8. Review & Submit

**Features:**
- Progress indicator showing current step
- Form validation per step
- Can navigate back to edit
- Final review before submission

---

### 7.2 Policy Acceptance Flow
**Type:** Agreement Screen  
**Description:** Scrollable policy with acceptance requirement  
**Visual:** Long-form text with checkbox at bottom  
**Interaction:** Must scroll to bottom and check box to proceed  
**Location:** PropertyPolicyAcceptancePage.tsx

**Requirements:**
- Checkbox for terms acceptance
- Cannot proceed without checking
- Button enabled only after acceptance

---

### 7.3 Live Location Detection
**Type:** Geolocation Feature  
**Description:** Browser geolocation with reverse geocoding  
**Visual:** "Nearby" button with crosshair icon  
**Interaction:** Click triggers location permission, auto-fills location  
**Location:** HeroSection.tsx:18-80

**Process:**
1. User clicks "Nearby" button
2. Browser requests location permission
3. If granted, gets coordinates
4. Reverse geocodes to city name via Nominatim API
5. Auto-fills destination field

**States:**
- Default: "nearby" text
- Loading: "locating..." with spinning icon
- Success: Fills destination field
- Error: Alert with error message

**Error Handling:**
- Permission denied
- Position unavailable
- Timeout
- Geocoding failure (falls back to coordinates)

---

### 7.4 Command History
**Type:** Command Line Interface  
**Description:** Terminal-style input with history log  
**Visual:** Dark background with monospace font  
**Interaction:** Type command, press Enter, shows in history  
**Potential Locations:**
- Developer tools
- Admin console
- Search history

---

### 7.5 Undo/Redo
**Type:** State History Navigation  
**Description:** Revert or restore changes  
**Visual:** Undo/Redo buttons (usually arrows)  
**Interaction:** Click undo to revert, redo to restore  
**Potential Locations:**
- Text editors
- Form builders
- Image editing

**Implementation:**
- Maintains history stack
- Undo stack (past states)
- Redo stack (future states)
- Disabled when stack empty

---

### 7.6 Keyboard Shortcuts
**Type:** Keyboard Accelerators  
**Description:** Key combinations for quick actions  
**Visual:** Usually shown in tooltips or help menu  
**Interaction:** Press key combo to trigger action  
**Common Shortcuts:**
- `Ctrl/Cmd + K` - Search
- `Ctrl/Cmd + S` - Save
- `Ctrl/Cmd + Z` - Undo
- `Ctrl/Cmd + Y` - Redo
- `Esc` - Close modal

---

### 7.7 Hover Preview
**Type:** Preview on Hover  
**Description:** Shows additional content/actions on hover  
**Visual:** Overlay appears with more information  
**Interaction:** Hover to reveal, move away to hide  
**Locations:**
- Hotel card hover effects
- Image thumbnails
- Link previews

**Implementation:**
- Smooth opacity transitions
- Overlay with gradient background
- Additional details/CTA buttons

---

### 7.8 Inline Editing
**Type:** Direct Manipulation  
**Description:** Edit content in place without separate form  
**Visual:** Content becomes editable on click  
**Interaction:** Click to edit, blur to save  
**Locations:**
- Property details editing
- Profile information updates
- List item renaming

---

### 7.9 Drag and Drop
**Type:** Direct Manipulation  
**Description:** Reorder or move items by dragging  
**Visual:** Cursor changes, item follows mouse  
**Interaction:** Click and hold to drag, release to drop  
**Potential Locations:**
- Image upload ordering
- Room priority sorting
- Dashboard widget arrangement

---

### 7.10 Clickable Cards
**Type:** Interactive Card  
**Description:** Entire card acts as navigation link  
**Visual:** Card with hover state (shadow, transform)  
**Interaction:** Hover shows effect, click navigates  
**Location:** SearchResultsPage.tsx

**Features:**
- Entire card clickable (not just title)
- Hover effect: slight shadow increase
- Cursor changes to pointer
- Navigates to hotel details page

**Implementation:**
```tsx
<div 
  onClick={() => navigate(`/hotel/${hotel.id}`)}
  className="cursor-pointer hover:shadow-lg transition-shadow"
>
  {/* Card content */}
</div>
```

---

### 7.11 Animated Transitions
**Type:** Motion Animation  
**Description:** Smooth animations for state changes  
**Visual:** Elements fade/slide in or out  
**Interaction:** Automatic on state change  
**Locations:**
- Modal open/close
- Page transitions
- Dropdown reveal
- Carousel sliding

**Library:** motion/react (formerly Framer Motion)

**Common Patterns:**
- Fade in/out
- Slide up/down
- Scale transform
- Stagger children animations

---

## 8. SMART MENU ITEMS

### 8.1 Contextual Dropdowns
**Type:** Smart Menu  
**Description:** Menu items change based on context/state  
**Locations:**
- City dropdowns (show relevant localities)
- User menu (changes if logged in/out)

---

## 9. DATA DISPLAY PATTERNS

### 9.1 Hotel Cards
**Type:** Card Component  
**Description:** Compact display of hotel information  
**Visual:** Image, title, rating, price, amenities  
**Interaction:** Click to view details, hover for preview  
**Locations:**
- Search results page
- City pages
- Recommended hotels section

**Content:**
- Hotel image
- Hotel name
- Star rating
- Location
- Price per night
- Key amenities
- Distance from center

---

### 9.2 Data Tables
**Type:** Table  
**Description:** Structured data in rows and columns  
**Interaction:** Sort columns, select rows, pagination  
**Locations:**
- Property dashboard (bookings, rooms, employees)
- Financial reports

---

## 10. RESPONSIVE PATTERNS

### 10.1 Mobile Navigation
**Type:** Hamburger Menu  
**Description:** Collapsed menu for mobile screens  
**Visual:** Three-line icon that expands to full menu  
**Interaction:** Tap to open drawer, tap item to navigate  
**Implementation:** Responsive breakpoints in header

---

### 10.2 Responsive Grid
**Type:** Grid Layout  
**Description:** Adapts column count based on screen size  
**Visual:** Multiple columns on desktop, fewer on mobile  
**Locations:**
- Hotel listings
- Image galleries
- City cards

---

## PATTERN USAGE STATISTICS

| Pattern Category | Total Implementations |
|-----------------|----------------------|
| Buttons | 50+ |
| Menus & Dropdowns | 15+ |
| Input Controls | 30+ |
| Navigation | 20+ |
| Feedback Indicators | 25+ |
| Overlays & Modals | 8+ |
| Advanced Patterns | 12+ |

---

## COLOR CODING BY INTERACTION TYPE

**Click Actions:** Sky Blue (#0EA5E9)
- Search buttons
- CTAs
- Action buttons
- Apply filters

**Brand Elements:** VeroStays Red (#EE2A24)
- Logo
- Headings
- Carousel navigation arrows
- Brand highlights

**Neutral Actions:** Dark Gray (#222222)
- Text
- Borders
- Secondary buttons

**Success:** Green
- Confirmations
- Success toasts
- Available badges

**Destructive:** Red
- Delete actions
- Error messages
- Sold out badges

**Warning:** Yellow/Orange
- Limited availability
- Caution messages

---

## TESTING CHECKLIST

For each interactive element, verify:
- [ ] Click/tap works on all devices
- [ ] Hover states are visible (desktop)
- [ ] Touch feedback is clear (mobile)
- [ ] Keyboard navigation works
- [ ] Screen reader announces element
- [ ] Loading states display correctly
- [ ] Error states are clear
- [ ] Success feedback is immediate
- [ ] Disabled states are obvious
- [ ] Animations are smooth (60fps)

---

## ACCESSIBILITY NOTES

All interactive elements include:
- Proper ARIA labels
- Keyboard focus indicators
- Screen reader text where needed
- Sufficient color contrast
- Touch target sizes (min 44x44px)
- Focus trap in modals
- Skip navigation links

---

## IMPLEMENTATION LIBRARIES

**Core UI:** Custom components + Radix UI primitives  
**Styling:** Tailwind CSS v4  
**Icons:** Lucide React  
**Animations:** Motion (Framer Motion)  
**Toasts:** Sonner  
**Forms:** React Hook Form  
**Date Picker:** React Day Picker  
**Carousel:** Embla Carousel React  

---

## PERFORMANCE OPTIMIZATIONS

- Lazy loading for modal components
- Debounced search inputs
- Virtual scrolling for long lists
- Image lazy loading
- Optimistic UI updates
- Cached API responses

---

## FUTURE ENHANCEMENTS

Patterns to consider adding:
- [ ] Infinite scroll
- [ ] Virtual keyboard handling
- [ ] Swipe gestures
- [ ] Multi-select with checkboxes
- [ ] Bulk actions toolbar
- [ ] Copy to clipboard buttons
- [ ] Share functionality
- [ ] Print-optimized views
- [ ] Export to PDF
- [ ] Advanced filters with chips

---

**Document Version:** 1.0  
**Last Updated:** 2026-04-25  
**Live Demo:** [/interface-patterns](/interface-patterns)
