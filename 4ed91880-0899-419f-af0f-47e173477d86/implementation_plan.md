# Final UI Adjustments and APK Build Plan

## Goal Description
1.  **Bible Page Dropdown**: Ensure clicking the Book name opens the book list, and clicking the Chapter name opens the chapter list. (This logic seems already in place, but I will double-check `toggleBookMenu` and `toggleChapterMenu` functions).
2.  **Praise Page Search**: Change the search placeholder text to remove the "example" part.
3.  **Build APK**: Generate the release APK.

## User Review Required
None.

## Proposed Changes

### Pages

#### [MODIFY] [BiblePage.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/pages/BiblePage.jsx)
-   Verify `toggleBookMenu` sets `activeMenu` to 'book'.
-   Verify `toggleChapterMenu` sets `activeMenu` to 'chapter'.
-   *Note*: The user said "Clicking specific chapter shows chapter list". The current implementation toggles menus. I will just ensure the labels and click handlers are correct.

#### [MODIFY] [PraisePage.jsx](file:///c:/Users/admin/.gemini/나의%20사랑하는%20책/src/pages/PraisePage.jsx)
-   Update input placeholder text: `찾고 싶은 찬양을 입력하세요... (예: 마커스 꽃들도)` -> `찾고 싶은 찬양을 입력하세요`

### Build

#### Build and Sync
-   Run `npm run build`
-   Run `npx cap sync android`
-   Run `cd android && ./gradlew assembleDebug` (or `assembleRelease` if key is set up, but debug is faster for testing)

## Verification Plan

### Manual Verification
1.  **Bible Page**: Click "Genesis". Book list should appear. Click "1". Chapter list should appear.
2.  **Praise Page**: Check search placeholder.
3.  **APK**: Verify the APK file exists in `android/app/build/outputs/apk/debug/`.
