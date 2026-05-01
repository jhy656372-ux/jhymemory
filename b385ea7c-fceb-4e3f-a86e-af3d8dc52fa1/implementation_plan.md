# Bible Data Fix and Bookmark Persistence Plan

Fix the Bible data inconsistency in `ko_nkrv.json` and ensure the app remembers the user's reading position and bookmarks.

## Proposed Changes

### [Bible Data]
Modify `public/data/ko_nkrv.json` to fix the merged verses in Judges 4 and potentially other books.

#### [MODIFY] [ko_nkrv.json](file:///c:/Users/admin/.gemini/나의 사랑하는 책/public/data/ko_nkrv.json)
- Separate Judges 4:23 and 4:24 and ensure the chapter has 24 verses.
- Review other detected merged verses (like in Daniel) and fix if they result in missing verses.

### [Frontend]
Update `BiblePage.jsx` to persist state in `localStorage`.

#### [MODIFY] [BiblePage.jsx](file:///c:/Users/admin/.gemini/나의 사랑하는 책/src/pages/BiblePage.jsx)
- Save `currentBookIndex`, `currentChapter`, `version`, `primaryVersion`, and `secondaryVersion` to `localStorage` whenever they change.
- Load these values in a `useEffect` on mount.
- Add a "Go to Bookmarks" feature or ensure the bookmarked verse is highlighted/scrolled to if possible (though persistence of the last read position is the primary request).

## Verification Plan

### Automated Verification
- Run a script `scripts/verify_fixes.cjs` to check:
    - Judges 4 in `ko_nkrv.json` has 24 verses.
    - Verse 23 and 24 have correct content.

### Manual Verification
- Open the Bible page, navigate to a specific book/chapter (e.g., Judges 4).
- Close/Refresh the app.
- Verify it returns to Judges 4.
- Bookmark a verse, restart the app, and verify the bookmark icon is still there and the position is correct.
