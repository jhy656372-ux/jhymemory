# Notice Board and Footer Fix Walkthrough

I have successfully added a new "게시판" (Notice Board) feature and fixed the mobile layout of the footer.

## Changes Made

### 1. Notice Board (게시판) Component
- **Home Page Section**: A new "게시판" section has been added to the home page, displaying a preview of the 4 most recent posts.
- **Board Page**: A full-featured board page (`/board`) has been created with:
  - **List View**: A clean, table-like list of all posts.
  - **Detail View**: Comprehensive view of individual posts including title, content, images, and file downloads.
- **File Support**: Users can now upload and download attachments (PDFs, documents, etc.) directly through the board.

### 2. Admin Management
- **Board Editor**: A dedicated management interface has been added to the `/admin` page.
- **Full CRUD**: Admins can Create, Read, Update, and Delete board posts.
- **Easy Uploads**: Simplified interface for uploading multiple images and files for each post.

### 3. Footer Mobile Layout Fix
- **Improved Alignment**: Fixed an issue where the address icon would jump above the text on mobile screens. It now remains perfectly aligned on the same line.

## How to Test

### Admin Management
1. Go to the [Admin Page](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/AdminPage.jsx) (Log in with `sandol1234`).
2. Scroll to the "게시판 관리" section and click "펼치기".
3. Click "+ 새 글 쓰기" to create a test post.
4. Try uploading an image and a file (like a PDF).
5. Click "저장" and then the main "저장하기" button at the bottom.

### Public View
1. Go to the [Home Page](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/HomePage.jsx) and verify the new "게시판" section.
2. Click on a post or "전체보기" to go to the [Board Page](file:///c:/Users/admin/.gemini/산돌교회%20홈페이지/src/pages/BoardPage.jsx).
3. Verify the layout and test file downloads in the detail view.
4. **Mobile Check**: Use browser dev tools (F12) to switch to mobile view and verify the footer's address icon alignment.

> [!NOTE]
> All data is persisted to `public/data.json` via the PHP backend. If working locally without a PHP server, changes will stay in the session until a refresh.
