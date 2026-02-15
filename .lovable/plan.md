
# SeeWhozThere — Dashboard UI Facelift with Charts & Stats

## Overview
Redesign the SeeWhozThere web dashboard as a modern, dark-themed React app with rich but lightweight data visualizations. The app will use mock/demo data by default with a configurable API URL to connect to the live FastAPI backend on the Raspberry Pi.

---

## 1. Dark Modern Theme & Layout
- Dark color scheme (deep grays, blue accents) matching the "dark & modern" preference
- Sticky top navigation bar with SeeWhozThere branding, nav links (Dashboard, History, Settings), and a dark/light mode toggle
- Responsive layout that works on desktop and mobile browsers
- Clean card-based design with subtle shadows and hover effects

## 2. Stats Summary Cards (Top Row)
- **Total Visitors** — all-time count with icon
- **Today's Activity** — visitors seen today
- **Active Cameras** — number of cameras online
- **Unknown Visitors** — unidentified faces today
- Each card with a colored icon accent and subtle animation on load

## 3. Dashboard Charts Section

### Hourly Activity Timeline
- Bar chart showing visitor detections by hour throughout the current day
- Color-coded bars (blue for known, amber for unknown)

### Known vs Unknown Breakdown
- Donut chart showing the ratio of identified vs unidentified visitors
- Clean labels with percentages

### Weekly Activity Trend
- Line chart showing daily visitor counts over the past 7 days
- Smooth curves with data point markers

### Activity by Camera
- Horizontal bar chart showing detection counts per camera
- Sorted by most active camera first

### Top Visitors Ranking
- Simple ranked list/bar showing the most frequently seen individuals
- Avatar thumbnail, name, and sighting count

### Peak Hours Heatmap
- Grid visualization showing busiest detection times across days of the week
- Color intensity represents activity level (cool to hot gradient)

## 4. Visitor Grid (Existing Feature, Redesigned)
- Card grid of today's visitors with thumbnail images, name, first/last seen times, and sighting count
- Filter buttons: All | Known | Unknown
- Status badges on each card
- "Identify" button for unknown visitors, "History" button for known ones

## 5. Configurable API Connection
- Settings/config to point the app at a live FastAPI URL (e.g., `http://raspberrypi.local:8000`)
- Falls back to realistic mock/demo data when the API is unreachable
- API URL configurable via a settings page or environment variable

## 6. Footer
- Branding, privacy note, version number, GitHub link
