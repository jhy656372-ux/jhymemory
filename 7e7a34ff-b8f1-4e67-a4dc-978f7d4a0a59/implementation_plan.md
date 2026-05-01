# Production Readiness: Admin Data Export

To make the Admin Page useful for a static site hosted on FTP (like Dothome), we need a way to transfer changes from the browser's `localStorage` to the actual source code (`churchData.js`).

## User Review Required
> [!NOTE]
> I will add a **"개발자용 데이터 복사" (Copy Data for Code)** button to the Admin Page.
> 
> **How to use on real server:**
> 1. Make changes in Admin Page and Save.
> 2. Click "개발자용 데이터 복사".
> 3. Paste the copied text into `src/data/churchData.js` file on your computer.
> 4. Run `npm run build` and upload again.

## Proposed Changes

### Component Layer
#### [MODIFY] [AdminPage.jsx](file:///c:/Users/admin/.gemini/산돌교회 홈페이지/src/pages/AdminPage.jsx)
- Add a new button "코드에 붙여넣기용 데이터 복사" next to the Reset button.
- Implement `handleCopyData` function:
    - Format `localData` (or `data`) as a JavaScript object string.
    - Use `navigator.clipboard.writeText` to copy to clipboard.
    - Alert user with instructions.

## Verification Plan

### Manual Verification
- Edit data in Admin Page.
- Click the new Copy button.
- Paste into a text editor and verify it's valid JavaScript code matching `churchData.js` format.
