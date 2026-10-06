# The Oxford Comma - Pop-up Coffee Shop Website

## Overview

This is the official website for **The Oxford Comma**, a pop-up coffee shop. The site provides information about locations, allows customers to pre-order online, accept donations, and stay updated on upcoming pop-ups.

## What This Is

A responsive website built with plain HTML, CSS, and JavaScript. It serves as the digital home for The Oxford Comma's pop-up operations, featuring a home page, pop-up locations, online ordering, donation section, and subscription signup.

## Who Built It

Built for The Oxford Comma by Claude Code.

## How to Run It Locally

1. Clone this repository:
   ```
   git clone https://github.com/liwostaf/theoxfordcomma.git
   cd theoxfordcomma
   ```

2. Open `index.html` in your web browser to view the home page locally.

3. For development, you can use any simple HTTP server:
   ```
   python3 -m http.server 8000
   ```
   Then navigate to `http://localhost:8000` in your browser.

## How to Deploy

This project is deployed to **Cloudflare Workers** (Free plan).

### Deployment Steps:

1. Install Wrangler CLI (Cloudflare's command-line tool):
   ```
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```
   wrangler login
   ```

3. Initialize the project (if not already done):
   ```
   wrangler init
   ```

4. Deploy:
   ```
   wrangler deploy
   ```

Your site will be live at `https://theoxfordcomma.workers.dev`

## Project Structure

```
theoxfordcomma/
├── index.html          # Home page
├── pages/
│   ├── popups.html     # Pop-ups page
│   ├── chipin.html     # Chip In (donations) page
│   ├── subscribe.html  # Subscription confirmation page
├── styles/
│   └── style.css       # All styling
├── scripts/
│   └── script.js       # All JavaScript functionality
├── wrangler.toml       # Cloudflare Workers configuration
└── README.md           # This file
```

## Color Scheme

- Primary: Navy background
- Accents: Creamy white, beige, white text
- Theme: Light-mode standard with high contrast

## Features

- **HOME**: Main landing page with title, description, mission statement, and owner information
- **POP-UPS**: Information about current and upcoming pop-up locations
- **CHIP IN**: Donation and suggestion section
- **ORDER ONLINE**: Pre-order system for customers to reserve items per time slot
- **BOTTOM TAB**: Contact information and subscription signup
- **Navigation**: Hamburger menu in top right corner for easy navigation between pages

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge). Mobile-responsive design.
