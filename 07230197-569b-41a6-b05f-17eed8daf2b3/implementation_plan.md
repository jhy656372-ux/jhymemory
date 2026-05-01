# Implementation Plan - Admin Gallery & Mobile Fixes

The goal is to allow dynamic addition of photos in the Admin Gallery (removing the 8-photo limit) and fix mobile responsiveness issues (specifically the "no response" behavior on mobile).

## User Review Required

> [!IMPORTANT]
> The Admin Gallery will now support adding an unlimited number of photos. The previous fixed 8-slot layout will be replaced with a dynamic list where you can add/remove items.

## Proposed Changes

### Admin Functionality

#### [MODIFY] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/AdminPage.jsx)
- Update the `SectionEditor` to handle `isGalleryPhotos` dynamically.
- Remove the `Array(8)` fixed slot logic.
- Implement an "Add Photo" button to append new slots.
- Update the "Remove" button to actually remove the slot from the array (splice) instead of just clearing the content.

### Mobile Responsiveness

#### [MODIFY] [Header.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/components/layout/Header.jsx)
- Increase `z-index` from `z-50` to `z-[100]` to ensure the header stays on top of all other content.
- Increase the hit area of the mobile menu button (change `p-2` to `p-3`).
- Ensure the mobile menu dropdown has a solid background and proper z-indexing.

## Verification Plan

### Automated Tests
- None (Visual/Interaction changes).

### Manual Verification
1.  **Admin Gallery**:
    - Open Admin Page.
    - Go to "Gallery" section.
    - Click "Add Photo" multiple times (e.g., add 9th, 10th photo).
    - Upload images to new slots.
    - Save and refresh to ensure data persists.
    - Delete a photo from the middle and verify the list updates correctly.
2.  **Mobile Menu**:
    - Use `npm run dev` to start the local server.
    - Use Browser Tool to open the local URL.
    - Resize viewport to mobile width (e.g., 375px).
    - Click the hamburger menu button.
    - Verify the menu opens and links are clickable.
