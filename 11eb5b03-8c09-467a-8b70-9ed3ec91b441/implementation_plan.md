# Implementation Plan - Website Updates

I will implement the following changes to the Sandol Church website.

## User Review Required

> [!IMPORTANT]
> **Image Upload Storage**: Images uploaded via the Admin Page will be saved to the user's browser **LocalStorage**. This means:
> 1. Images are **NOT** permamently stored on the server (hosting is static).
> 2. Images are visible **ONLY** on the browser/computer where they were uploaded.
> 3. To make images visible to everyone, you must "Export Data" from the Admin Page and redeploy the website, or I can implement a feature to "Copy Data for Developer" which you can send to me to rebuild.
> *Current implementation will stick to the requested "fix uploading", which in this context means making the UI work and saving to the current session/storage.*

## Proposed Changes

### Data Structure (`src/data/churchData.js`)

#### [MODIFY] [churchData.js](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/data/churchData.js)
- Add `logoImage` to the root or `header` section.
- Add `moreUrl` field to:
    - `sundaySchool`
    - `parish`
    - `service`
    - `retreat`
    - `gallery`

### Components

#### [MODIFY] [Header.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/components/layout/Header.jsx)
- Update to use `churchData.logoImage`.
- If `logoImage` is present, display it instead of the `Cross` icon.
- Maintain "Sandol Church" text next to the logo.

#### [MODIFY] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/AdminPage.jsx)
- Update `renderInput` to detect keys containing "image", "photo", "bgImage".
- Implement a file input handler that converts selected files to Base64 strings.
- Add a preview of the uploaded image.

### Pages (Adding "More" Link)

I will add a "More Info" button/link at the bottom of these pages, linking to the URL defined in `churchData`.

#### [MODIFY] [SundaySchoolPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/SundaySchoolPage.jsx)
#### [MODIFY] [ParishPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/ParishPage.jsx)
#### [MODIFY] [ServicePage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/ServicePage.jsx)
#### [MODIFY] [RetreatPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/RetreatPage.jsx)
#### [MODIFY] [GalleryPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/GalleryPage.jsx)

## Verification Plan

### Manual Verification
1.  **Header Logo**:
    - Add a dummy logo URL in `churchData` (or upload via Admin if working).
    - Verify the header shows the image.
2.  **Admin Upload**:
    - Go to `/admin`.
    - Try to change an image (e.g., in Intro or Gallery).
    - Select a file from the computer.
    - Verify the image updates in the preview and on the live site (preview mode).
3.  **More Links**:
    - Go to each detail page (e.g., `/sundayschool`).
    - Verify a "More" button/icon appears at the bottom.
    - Click it and verify it opens the URL (I will set a test URL like `https://google.com`).
