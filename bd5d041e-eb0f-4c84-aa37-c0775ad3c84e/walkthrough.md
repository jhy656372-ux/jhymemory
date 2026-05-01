# "My Beloved Book" Walkthrough

## Overview
We have successfully built the **"나의 사랑하는 책" (My Beloved Book)** web application. The app currently runs as a local web service and includes three main features: Bible Reading, Praise Listening, and Prayer Requests.

## Features Implemented

### 1. Bible (말씀)
- **Version Toggle**: Switch between **Korean (개역개정)** and **English (NIV)**.
- **TTS Audio**: Listen to the scripture using the browser's built-in text-to-speech engine.
- **Reading Check**: A simple "1-Click Check" to mark daily reading as complete.
- **UI**: Clean, distraction-free reading environment with a warm paper-like background.

### 2. Praise (찬양)
- **YouTube Integration**: Search bar (simulation) and embedded YouTube player.
- **Recommendations**: Curated list of popular worship songs (e.g., Flowers, Way Maker, Grace).
- **Playback**: Seamless inline video playback.

### 3. Prayer (기도제목)
- **Digital Prayer Journal**: Add your personal prayer requests.
- **Persistence**: Data is saved to your browser's local storage, so it remains even after refreshing.
- **Management**: Easy deletion of answered or old prayers.

## How to Run
1. Open a terminal in the project directory:
   ```bash
   cd my-beloved-book
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to `http://localhost:5173`.

## Next Steps
- **Real Bible API**: Replace mock text with a full Bible API (requires API key).
- **YouTube Data API**: Connect real YouTube search functionality.
- **PWA Support**: Make it installable on mobile phones as an app.
