# coursefinder.ai Dashboard

A modern, responsive dashboard application for managing student applications and overseas education services. Built with Next.js 16, TailwindCSS v4, and shadcn/ui components.

## 🎨 Design Implementation

This dashboard is a pixel-perfect implementation of the Figma design, featuring:

- **Three-column dashboard layout** (Sidebar | Main Content | Right Panel)
- **Deep blue header** with search, notifications, and user profile
- **Collapsible sidebar** with navigation items and expandable groups
- **Colorful stat cards** - Blue, Green, Yellow, Red variants
- **Applications table** with tabs and sorting
- **Promotional banner** with gradient styling
- **Right panel** with News, Events, Quick Links, and Contacts

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd coursefinder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** TailwindCSS v4
- **Component Library:** shadcn/ui
- **Icons:** Lucide React
- **Language:** TypeScript

## 📁 Project Structure

```
coursefinder/
├── app/
│   ├── globals.css      # Global styles and design tokens
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main dashboard page
├── components/
│   ├── dashboard/       # Dashboard-specific components
│   │   ├── ApplicationsTable.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FilterBar.tsx
│   │   ├── NewsBulletin.tsx
│   │   ├── PromoBanner.tsx
│   │   ├── QuickLinks.tsx
│   │   ├── StatCards.tsx
│   │   └── UpcomingEvents.tsx
│   ├── layout/          # Layout components
│   │   ├── DashboardLayout.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   └── ui/              # shadcn/ui components
├── lib/
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## 📱 Responsive Design

The dashboard is fully responsive:

- **Desktop (1280px+):** Full three-column layout
- **Tablet (768px-1279px):** Sidebar collapses, right panel hidden
- **Mobile (<768px):** Hamburger menu, single column layout

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for all interactive components
- Color contrast compliance

## 🌐 Browser Compatibility

Tested and compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎯 Features

### Navigation
- Collapsible sidebar with smooth animations
- Active state highlighting
- Expandable menu groups

### Dashboard Widgets
- **Stat Cards:** Real-time statistics with color coding
- **Filter Bar:** Multiple dropdown filters
- **Applications Table:** Sortable, paginated data table
- **News Bulletin:** Carousel with navigation
- **Events Card:** Upcoming events with registration
- **Quick Links:** External resource links
- **Contact Section:** Regional manager contacts

## 📝 License

This project is for demonstration purposes.

---

Built with ❤️ using Next.js and shadcn/ui
