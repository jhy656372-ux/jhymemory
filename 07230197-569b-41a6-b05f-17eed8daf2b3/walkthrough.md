# Visual Verification

## Admin Gallery
- [x] "Add Photo" button is visible and functional.
- [x] Each photo slot has a visual "Remove" button.
- [x] The default 8-slot grid is replaced with a dynamic list.
- [x] **File Uploads:** Images uploaded in Admin panel are now saved to `uploads/` directory on the server.
- [x] **URL Display:** Images are correctly displayed using root-relative paths (`/uploads/...`) instead of failing with "External Image".

## Mobile Responsiveness
- [x] Header `z-index` increased to 100 to prevents content overlay.
- [x] Mobile menu button padding increased for better touch accessibility.
- [x] **"View More" Buttons:** Buttons with dead links (`#`) are hidden on mobile to prevent unresponsive clicks.
- [x] **Gallery Visibility:** Server-side persistence ensures photos uploaded on desktop are visible on mobile devices.

## Server-Side Functionality (New)
- [x] **Data Persistence:** Replaced `localStorage` with `data.json` file storage via `api/save.php`.
- [x] **Universal Access:** Changes made on one device are instantly available to all visitors after a page refresh.
