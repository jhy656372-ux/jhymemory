# Implementation Plan: Bible Data Integration

## Goal Description
Integrate the full Bible data files (`korean_bible.json` and `english_bible.json`) into the application, replacing the current sample data (`bible_data.json`). This will provide the user with the complete Bible text in both Korean and English.

## Proposed Changes
### Bible Page Logic
-   **File**: `src/pages/BiblePage.jsx`
-   **Changes**:
    -   Import `korean_bible.json` as `koreanBibleData`.
    -   Import `english_bible.json` as `englishBibleData`.
    -   Replace usage of `bibleData` (from `bible_data.json`) with the appropriate full dataset based on the selected language or context.
    -   Ensure the component handles the larger dataset correctly (e.g., initial load).

## Verification Plan
### Manual Verification
-   Run `npm run dev` and navigate to the Bible page.
-   Verify that the full list of Bible books is available.
-   Check that chapters and verses load correctly for both Korean and English versions.
-   Ensure smooth navigation between books and chapters.
