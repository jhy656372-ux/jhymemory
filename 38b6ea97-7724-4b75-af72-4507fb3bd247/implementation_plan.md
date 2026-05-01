# Implementation Plan - My Beloved Book

## Goal Description
The goal is to finalize the "My Beloved Book" application by ensuring Bible data is correctly integrated, implementing the Praise and Prayer pages, and generating a working Android APK.
**Update:** User requested a Landing Page, improved Bible Search/Selection, and switching the Korean version label/data to NKRV (Revised New Korean Standard Version).
**Workflow Update:** Prefer generating APK files for direct device testing over using Android Studio Emulator.

## User Review Required
- **Bible Version**: Verifying if the current JSON is KRV or NKRV. If purely KRV, we might need a new data source, but for now, we will update the display labels and logic to "개역개정" as requested, while investigating data replacement options if critical differences exist.
- **Navigation**: Switching from a purely tab-based layout to a Landing Page -> Feature Page flow.

## Proposed Changes

### Navigation & Home
#### [NEW] [HomePage.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/pages/HomePage.jsx)
- Landing page with title "나의 사랑하는 책".
- **Background**: Warm color gradient (White -> Warm Beige/Orange/Rose).
- **Navigation Cards**:
  - Layout: Horizontal (Icon Left, Text Right).
  - Size: Compact.
  - Colors:
    - Bible: Light Blue
    - Praise: Light Pink
    - Prayer: Light Yellow

#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/App.jsx)
- Introduce a 'home' state.
- Render `HomePage` by default.
- Pass navigation handlers to `HomePage`.
- Add a "Back to Home" capability in the main Layout.

#### [MODIFY] [Navigation.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/components/Navigation.jsx)
- Ensure bottom bar is fixed and visible on Home page.
- Consistent styling.

### Bible Feature
#### [MODIFY] [BiblePage.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/pages/BiblePage.jsx)
- Enhance the Book/Chapter selection UI.
- Make the "Search" or "Select" interface more prominent (e.g., a modal or top bar that expands).
- Update version labels from "KRV" to "개역개정" (NKRV) in the UI.

#### [MODIFY] [BibleService.js](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/services/BibleService.js)
- Update default version constant/string to 'NKRV'.
- Ensure it loads the existing `ko_krv.json` but treats it as the primary Korean text (mapped to NKRV label).

### Praise & Prayer Features (Refining)
- Ensure they link back to the main navigation or Home.

## Verification Plan

### Automated Tests
- Run `npm run dev` in `temp_run` to verify UI changes.

### Manual Verification
1.  **Home Page Navigation**:
    - Click "말씀" -> Goes to Bible Page.
    - Click "찬양" -> Goes to Praise Page.
    - Click "기도" -> Goes to Prayer Page.
2.  **Bible Search**:
    - Open Bible Page.
    - Click "Select Book".
    - Verify 66 books are listed clearly.
    - Select a book -> Select a chapter.
    - Verify text loads.
    - Check the version label says "개역개정".

### APK Testing (Preferred)
- Generate debug APK: `gradlew assembleDebug`
- Locate APK in `android/app/build/outputs/apk/debug/app-debug.apk`
- Transfer to physical device via USB or file sharing.
- Verify app functionality directly on phone.
