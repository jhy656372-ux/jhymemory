# "My Beloved Book" Implementation Plan

## Goal
Create a web application named **"나의 사랑하는 책" (My Beloved Book)** with three main features: Bible reading (with TTS & reading plan), Praise (YouTube integration), and Prayer Requests (CRUD).

## User Review Required
> [!IMPORTANT]
> **Bible Text & Copyright**: Providing full text of modern translations (NIV, ESV, etc.) often requires API keys or licensing. For this MVP, we will use **public domain versions** (like WEB or KJV) or **mock data** for demonstration unless an API key is provided.
> **YouTube API**: Requires an API Key for search. We will implement the UI and logic, but might need a placeholder or specific video IDs if no key is available.

## Proposed Changes

### Tech Stack
- **Framework**: React (Vite)
- **Styling**: TailwindCSS (for rapid, beautiful UI)
- **Icons**: Lucide-React
- **State Management**: React Context / LocalStorage (for persistence)

### Component Structure
#### [NEW] `src/App.jsx`
- Main layout with navigation (Bottom tab or Sidebar).
#### [NEW] `src/pages/BiblePage.jsx`
- Version selector.
- Text display area (reading from local `bible_data.json`).
- TTS control button.
- "Bible in a Year" checklist toggle.
#### [NEW] `src/data/bible_data.json`
- Contains full text for supported versions (e.g., Genesis 1 to Revelation 22).
- Structure: `{ "KRV": { "Genesis": { "1": "..." } }, "NIV": { ... } }`
#### [NEW] `src/pages/PraisePage.jsx`
- Search bar for CCM.
- YouTube embed player.
#### [NEW] `src/pages/PrayerPage.jsx`
- Input form for new requests.
- List of prayer requests with delete button.

## Design Concept
- **Theme**: "Warm & Comforting" (Beige, Warm Gray, Soft Gold codes).
- **Typography**: Clean, readable serif for Bible text; sans-serif for UI.

## Verification Plan
### Automated Tests
- None for MVP.
### Manual Verification
- **Bible**: Check if text switches between versions and TTS reads it.
- **Praise**: Verify YouTube video loads upon search/selection.
- **Prayer**: Add a prayer request, refresh page (check persistence), delete it.
