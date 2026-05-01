# Notice Board (게시판) and Footer Fix Implementation Plan

This plan details the addition of a new "게시판" (Notice Board) section on the home page, a functional board page with file upload/download, and a mobile layout fix for the footer.

## Proposed Changes

### 1. Data Structure Update
#### [MODIFY] [churchData.js](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/data/churchData.js)
- Add a new `board` object:
  ```json
  "board": {
    "title": "게시판",
    "posts": []
  }
  ```
- Each post in `posts` will contain: `id`, `title`, `content`, `date`, `author`, `images` (array), `files` (array of `{ name, url }`).

### 2. Layout Fixes
#### [MODIFY] [Footer.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/components/layout/Footer.jsx)
- Change `<li className="flex flex-col md:flex-row items-center md:items-start gap-2">` to `<li className="flex flex-row items-center md:items-start gap-2">` for the address line. This keeps the icon and text on the same line even on small screens.

### 3. Home Page New Section
#### [NEW] [Board.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/components/sections/Board.jsx)
- Create a component to preview recent posts from the board.
#### [MODIFY] [HomePage.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/HomePage.jsx)
- Import and add `Board` next to `Gallery`. I will place them in a layout that feels balanced (either side-by-side or as distinct sections).

### 4. Notice Board Page
#### [NEW] [BoardPage.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/BoardPage.jsx)
- A page with two modes:
  - **List Mode**: Shows a table of posts with titles and dates.
  - **Detail Mode**: Shows the full content of a clicked post, including image gallery and file download links.

### 5. Routing
#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/App.jsx)
- Add `<Route path="/board" element={<BoardPage />} />`.

### 6. Admin Management
#### [MODIFY] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/AdminPage.jsx)
- Add a management section for `board`.
- Allow adding/editing/deleting posts.
- Use the existing `upload.php` for images and document files.

---

## Verification Plan

### Manual Verification
1. **Footer**: Check mobile view to ensure the MapPin icon is horizontally aligned with the address text.
2. **Board Functionality**:
   - Go to `/admin`, create a notice with a PDF attachment.
   - Go to `/`, check the "게시판" section for the new post.
   - Go to `/board`, click the post, and verify the PDF can be downloaded.
   - Verify that other sections (Gallery, Sunday School, etc.) remain untouched.
