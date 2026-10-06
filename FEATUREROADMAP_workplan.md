# The Oxford Comma - Feature Roadmap & Work Plan

## Overview

This document outlines every feature to be built, in order of priority. Each task includes dependencies, files to modify, and a clear definition of done. The plan is resumable and pausable—stop after each phase for review.

---

## PHASE 1: HOME PAGE (Deploy First)

### Task 1.1: Set Up Project Structure and Base Files
- [ ] **Status**: Not Started
- **Dependencies**: None
- **Files to Create/Modify**:
  - `index.html` (HOME page)
  - `styles/style.css` (global styling)
  - `scripts/script.js` (hamburger menu logic, basic interactivity)
  - `wrangler.toml` (Cloudflare Workers configuration)
  - `.gitignore`

- **What to Build**:
  - Create basic HTML5 structure for HOME page
  - Set up CSS file with color scheme (navy background, creamy white/beige/white accents)
  - Create JavaScript file for hamburger menu toggle (not fully wired yet)
  - Initialize Cloudflare Workers configuration

- **Definition of Done**:
  - Project structure is clean and organized
  - Base HTML file validates (no syntax errors)
  - CSS loads and applies basic styling (no layout yet)
  - JavaScript file loads without errors
  - All files committed and pushed to branch
  - No visible UI yet—this is infrastructure only

---

### Task 1.2: Build HOME Page Layout
- [ ] **Status**: Not Started
- **Dependencies**: Task 1.1 completed
- **Files to Modify**:
  - `index.html`
  - `styles/style.css`

- **What to Build**:
  - HTML structure for HOME page with sections:
    - Header with hamburger menu (top right, not functional yet)
    - Main title: "The Oxford Comma"
    - Description section (placeholder text)
    - Mission statement section (placeholder text)
    - Owner information section (placeholder text)
    - Footer stub (for bottom tab, to be built in Phase 2)
  - CSS for responsive layout:
    - Navy background
    - Light text (creamy white/beige/white)
    - Mobile-friendly grid/flexbox
    - No hamburger menu visibility yet (just the icon)

- **Definition of Done**:
  - HOME page displays correctly on desktop and mobile
  - All text sections visible and readable
  - Hamburger menu icon appears in top right (but not functional)
  - Footer area reserved but empty
  - Scrollable content within HOME page (user can scroll within the page)
  - No links working yet (except navigation prep)
  - Committed and pushed

---

### Task 1.3: Add Content to HOME Page
- [ ] **Status**: Not Started
- **Dependencies**: Task 1.2 completed
- **Files to Modify**:
  - `index.html`

- **What to Build**:
  - Replace placeholder text with actual content:
    - Title: "The Oxford Comma"
    - Description: Information about the pop-up coffee shop concept
    - Mission statement: Core values and purpose (to be provided by user)
    - Owner information: About the owner/operator (to be provided by user)
  - Structure content for clarity and readability

- **Definition of Done**:
  - All HOME page content filled in
  - Content is well-organized and easy to scan
  - No lorem ipsum or placeholder text
  - Committed and pushed

---

### Task 1.4: Style HOME Page (Final Polish)
- [ ] **Status**: Not Started
- **Dependencies**: Task 1.3 completed
- **Files to Modify**:
  - `styles/style.css`

- **What to Build**:
  - Refine typography (font families, sizes, line height)
  - Adjust spacing and padding
  - Fine-tune color contrast (navy + light text)
  - Add hover effects (if applicable)
  - Ensure responsive design on all screen sizes
  - Add subtle visual elements (lines, spacing) to enhance hierarchy

- **Definition of Done**:
  - HOME page looks polished and professional
  - Typography is readable and consistent
  - No layout issues on mobile, tablet, or desktop
  - Hamburger menu icon styled and positioned correctly
  - Footer area styled
  - No accessibility issues (contrast, readability)
  - Committed and pushed

---

### Task 1.5: Test HOME Page and Create Initial Pull Request
- [ ] **Status**: Not Started
- **Dependencies**: Task 1.4 completed
- **Files to Modify**: None (review phase)
- **What to Build**: None
- **Testing**:
  - Open `index.html` in browser (Chrome, Firefox, Safari)
  - Test on mobile view (DevTools)
  - Verify all text displays correctly
  - Check that scrolling works within HOME page
  - Verify hamburger menu icon is visible and positioned correctly
  - Check footer area layout

- **Definition of Done**:
  - HOME page renders correctly in all tested browsers
  - Mobile layout is functional
  - No console errors in browser DevTools
  - Pull request created and ready for user review
  - User reviews and approves before moving to Phase 2

---

## PHASE 2: BOTTOM TAB (Deploy Second)

### Task 2.1: Build Footer/Bottom Tab HTML Structure
- [ ] **Status**: Not Started
- **Dependencies**: Task 1.5 completed and approved
- **Files to Modify**:
  - `index.html`
  - Create `styles/footer.css` (or add to `styles/style.css`)

- **What to Build**:
  - Footer HTML with two sections:
    - **Contact Section**: Links/text for email, phone, social media
    - **Subscribe Section**: Email input form for newsletter signup
  - Responsive layout (works on mobile and desktop)
  - Styling consistent with HOME page (navy/cream color scheme)

- **Definition of Done**:
  - Footer appears at bottom of HOME page
  - Both Contact and Subscribe sections visible
  - Layout is responsive
  - No styling applied yet (just structure)
  - Committed and pushed

---

### Task 2.2: Add Contact Information
- [ ] **Status**: Not Started
- **Dependencies**: Task 2.1 completed
- **Files to Modify**:
  - `index.html`

- **What to Build**:
  - Add contact details:
    - Email address (clickable mailto link)
    - Phone number (clickable tel link, if available)
    - Social media links (Instagram, Twitter, etc. - URLs to be provided by user)
  - Format contact info clearly in footer

- **Definition of Done**:
  - All contact links present and clickable
  - Links work correctly (email opens mail client, phone opens dialer on mobile)
  - Contact information organized and easy to find
  - Committed and pushed

---

### Task 2.3: Build Newsletter Subscription Form
- [ ] **Status**: Not Started
- **Dependencies**: Task 2.2 completed
- **Files to Modify**:
  - `index.html`
  - `scripts/script.js` (add form handling)

- **What to Build**:
  - HTML form with:
    - Email input field (required)
    - Submit button ("Subscribe")
    - Optional: Name field (to be decided with user)
  - Client-side validation:
    - Check email format is valid
    - Show error message if invalid
    - Show success message on submit (placeholder for backend)
  - JavaScript to handle form submission:
    - Validate email
    - Display confirmation message
    - Clear form on success (visual feedback)

- **Definition of Done**:
  - Form displays correctly
  - Email validation works
  - Success/error messages display
  - Form submission handled (locally - no backend yet)
  - User can interact with form
  - Committed and pushed

---

### Task 2.4: Style Footer (Final Polish)
- [ ] **Status**: Not Started
- **Dependencies**: Task 2.3 completed
- **Files to Modify**:
  - `styles/style.css` (or `styles/footer.css`)

- **What to Build**:
  - Refine footer styling:
    - Spacing and alignment
    - Link styling and hover effects
    - Button styling (Subscribe button)
    - Responsive adjustments
    - Color consistency with overall theme

- **Definition of Done**:
  - Footer looks polished and integrated with HOME page
  - All elements properly aligned
  - Hover effects work on links and buttons
  - Mobile layout is clean
  - Typography matches overall design
  - Committed and pushed

---

### Task 2.5: Test Bottom Tab and Update Pull Request
- [ ] **Status**: Not Started
- **Dependencies**: Task 2.4 completed
- **Files to Modify**: None (review phase)
- **Testing**:
  - Test form submission (email validation)
  - Test contact links (mailto, tel, social media)
  - Test responsiveness on mobile and desktop
  - Check styling consistency with HOME page
  - Verify no console errors

- **Definition of Done**:
  - All footer features work correctly
  - Form validation and submission work
  - No console errors
  - Pull request updated with Phase 2 changes
  - User reviews and approves before moving to Phase 3

---

## PHASE 3: HAMBURGER MENU (Deploy Third)

### Task 3.1: Build Hamburger Menu HTML Structure
- [ ] **Status**: Not Started
- **Dependencies**: Task 2.5 completed and approved
- **Files to Modify**:
  - `index.html`
  - Create pages for each menu item (or prepare structure)
  - `styles/style.css`

- **What to Build**:
  - Update HOME page with hamburger menu toggle (currently just an icon)
  - Create HTML structure for menu (hidden by default)
  - Menu items:
    - HOME
    - POP-UPS
    - CHIP IN
    - ORDER ONLINE
  - Prepare placeholder pages:
    - `pages/popups.html`
    - `pages/chipin.html`
    - (ORDER ONLINE scoped separately - placeholder link for now)

- **Definition of Done**:
  - Hamburger menu HTML in place
  - Menu items listed (links not wired yet)
  - Menu hidden by default
  - Placeholder pages created
  - Committed and pushed

---

### Task 3.2: Build Hamburger Menu JavaScript Logic
- [ ] **Status**: Not Started
- **Dependencies**: Task 3.1 completed
- **Files to Modify**:
  - `scripts/script.js`

- **What to Build**:
  - JavaScript to handle menu toggle:
    - Click hamburger icon to open/close menu
    - Hover to show menu (optional, based on user preference)
    - Close menu when a link is clicked
    - Close menu when clicking outside of it
  - Mobile-friendly interaction

- **Definition of Done**:
  - Hamburger menu opens and closes on click
  - Menu links visible when open
  - Menu closes when clicking a link
  - Menu closes when clicking outside (if implemented)
  - No console errors
  - Committed and pushed

---

### Task 3.3: Style Hamburger Menu
- [ ] **Status**: Not Started
- **Dependencies**: Task 3.2 completed
- **Files to Modify**:
  - `styles/style.css`

- **What to Build**:
  - Style hamburger menu:
    - Icon positioning and styling (top right corner)
    - Menu dropdown appearance (navy background, light text)
    - Menu item styling and hover effects
    - Animation for menu open/close (smooth slide or fade)
    - Mobile optimization

- **Definition of Done**:
  - Menu looks polished and professional
  - Hover effects on menu items work
  - Menu animation is smooth
  - Mobile layout is functional
  - Color scheme consistent with overall design
  - Committed and pushed

---

### Task 3.4: Wire Up Hamburger Menu Links (Navigation)
- [ ] **Status**: Not Started
- **Dependencies**: Task 3.3 completed
- **Files to Modify**:
  - `index.html`
  - `scripts/script.js`

- **What to Build**:
  - Link hamburger menu items to their respective pages:
    - HOME → `index.html`
    - POP-UPS → `pages/popups.html`
    - CHIP IN → `pages/chipin.html`
    - ORDER ONLINE → (placeholder link or separate system URL - TBD with user)
  - Update page headers to include hamburger menu and footer
  - Add navigation styling to show current page (optional)

- **Definition of Done**:
  - All menu links navigate correctly
  - Each page loads with hamburger menu and footer
  - Menu works consistently across all pages
  - Committed and pushed

---

### Task 3.5: Test Hamburger Menu and Create Final Pull Request
- [ ] **Status**: Not Started
- **Dependencies**: Task 3.4 completed
- **Files to Modify**: None (review phase)
- **Testing**:
  - Click hamburger menu icon to open/close
  - Click each menu item and verify navigation
  - Test menu on mobile and desktop
  - Test menu behavior with footer
  - Verify no console errors
  - Test on multiple browsers

- **Definition of Done**:
  - Hamburger menu fully functional
  - All links navigate correctly
  - Menu works on all screen sizes
  - No console errors
  - All pages display hamburger menu and footer
  - Pull request updated with Phase 3 changes
  - User reviews and approves

---

## PHASE 4: PLACEHOLDER PAGES (To Be Scheduled)

*After Phase 3 approval, the following pages will be built:*

- **POP-UPS Page**: Display locations and dates
- **CHIP IN Page**: Donation and suggestion placeholders
- **ORDER ONLINE**: Decision on separate website vs. integrated system

*Each page follows the same pattern: structure, content, styling, testing.*

---

## DEPLOYMENT CHECKLIST

Once all phases are complete:

- [ ] All files committed and pushed
- [ ] Pull request approved by user
- [ ] Test locally with `python3 -m http.server 8000`
- [ ] Configure Cloudflare Workers (`wrangler.toml`)
- [ ] Deploy to Cloudflare: `wrangler deploy`
- [ ] Test live deployment at `https://theoxfordcomma.workers.dev`
- [ ] Monitor for any issues

---

## Notes

- **Resumable**: Each task can be paused and resumed. Always commit after each task.
- **Review Points**: User reviews after Phase 1, Phase 2, and Phase 3.
- **Flexibility**: Content and details (mission statement, owner info, contact details) to be provided by user.
- **No Emojis**: All text plain, no emoji decorations.
- **Separate Pages**: Each page accessed via hamburger menu, not site-wide scrolling.

---

## Summary

1. **Phase 1** (HOME): Build landing page with title, description, mission, owner info
2. **Phase 2** (BOTTOM TAB): Add footer with contact links and newsletter signup
3. **Phase 3** (HAMBURGER MENU): Build navigation menu and wire up all pages
4. **Phase 4** (PLACEHOLDER PAGES): Build remaining pages (scheduled later)
5. **DEPLOYMENT**: Deploy to Cloudflare Workers

**Next Step**: User reviews this workplan and selects which task to start with (recommended: Task 1.1).
