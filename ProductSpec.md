# Product Specification: The Oxford Comma Website

## What This App Does

The Oxford Comma website is a digital storefront and information hub for a pop-up coffee shop. It allows customers to:

1. Learn about the coffee shop's mission and story
2. Discover pop-up locations and dates
3. Pre-order items online in time slots
4. Donate or submit suggestions (Chip In)
5. Subscribe to updates about new pop-ups

## How It Is Organized

The website consists of three main sections, each accessed as a **separate page** (not a continuous scroll):

### 1. HOME Page (Entry Point)
- **Title**: "The Oxford Comma" prominently displayed
- **Description**: What the coffee shop is
- **Mission Statement**: The values and purpose of The Oxford Comma
- **Owner Information**: About who runs the shop
- **Navigation**: Hamburger menu in top right corner
- **Footer**: Bottom tab with contact and subscription

**User Experience**: When users land on the site, they see the home page. Scrolling happens within this page only. To access other pages, they must use the hamburger menu.

### 2. HAMBURGER MENU (Top Right Navigation)
- Located in the top right corner of every page
- Reveals navigation options when hovered or clicked
- Links to all other pages:
  - POP-UPS: Locations and dates of upcoming coffee shop pop-ups
  - CHIP IN: Donation and suggestion section
  - ORDER ONLINE: Pre-order system (separate ordering website/system)
  - HOME: Return to main page

**User Experience**: Menu appears/expands on hover or click. Clicking a link navigates to a new page (not a scroll).

### 3. BOTTOM TAB (Footer Navigation)
- Appears on every page at the bottom
- Contains two sections:
  - **Contact**: Links to email, phone, social media
  - **Subscribe**: Form to sign up for email updates about new pop-ups

**User Experience**: Consistent footer accessible from any page. The subscription form collects email addresses and confirms subscription.

## Page Structure Details

### HOME Page
- Navy background with light accents
- Scrollable content within the page (not site-wide)
- Contains: Title, description, mission, owner info
- Always includes hamburger menu (top right) and bottom tab (footer)

### POP-UPS Page
- Lists current and upcoming pop-up locations
- Shows dates, times, and addresses
- Separate page (accessed via hamburger menu)
- Contains hamburger menu and bottom tab

### CHIP IN Page
- Donation section (amount input, payment method)
- Suggestion box (text area for feedback)
- Neither feature is functional yet (placeholder form)
- Separate page (accessed via hamburger menu)
- Contains hamburger menu and bottom tab

### ORDER ONLINE
- **Decision Pending**: This may be a separate website entirely
- Pre-order system with time slot selection
- Currently scoped for separate design and development
- Link in hamburger menu points to this system

## Visual Design

**Color Palette**:
- Background: Navy (primary)
- Text & Accents: Creamy white, beige, white
- Mode: Light-mode standard (navy with light elements)

**No Emojis**: Strictly plain text and icons only.

**Typography**: Clean, readable fonts; emphasis on clarity and professionalism.

**Responsive**: Works on desktop, tablet, and mobile devices.

## Navigation Flow

```
HOME (Landing Page)
  ├─ Hamburger Menu (Top Right)
  │   ├─ HOME (return)
  │   ├─ POP-UPS (separate page)
  │   ├─ CHIP IN (separate page)
  │   └─ ORDER ONLINE (external or separate system)
  └─ Bottom Tab (Footer on all pages)
      ├─ Contact Links
      └─ Subscribe to Updates
```

## Key Constraint: Separate Pages, Not Scrolling

Each page is a self-contained unit. A user cannot scroll from HOME page to see POP-UPS or CHIP IN content. They must navigate using the hamburger menu. This creates distinct, focused user experiences for each section.

## Summary

The Oxford Comma website is a multi-page application with clear navigation, a consistent footer, and a dedicated menu system. It prioritizes simplicity and clarity while maintaining a cohesive visual identity centered on navy and cream tones.
