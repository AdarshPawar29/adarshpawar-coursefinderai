# CourseFinder Dashboard

A modern, responsive dashboard designed for education counselors to manage student applications and overseas education services efficiently.

## 👥 Who Can Access This Application?

This application is designed for **Education Counselors and Administrators**. 
- It provides a centralized view for tracking student applications.
- **Immediate Access**: Currently, this is a demonstration build open for review. No authentication is enforced for this demo version, allowing you to explore the full layout and features immediately specifically as an Admin user persona.

## 🌟 Key Features

### Core Capabilities
- **Server-Side Rendering (SSR)**: Built with Next.js 16, utilizing SSR for fast initial page loads and improved SEO performance.
- **Advanced Metadata**: Implements the Next.js Metadata API to ensure optimal search engine visibility and social sharing capabilities.
- **Responsive Layout**: Adapts seamlessly to Desktop, Tablet, and Mobile devices using a 3-column architecture that collapses intelligently.


## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React & Custom SVGs
- **Language**: TypeScript

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd coursefinder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
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
