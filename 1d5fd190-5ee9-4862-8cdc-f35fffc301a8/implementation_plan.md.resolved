# Mobile Optimization and Build Plan

## Goal Description
Prepare the Daily Habit Tracker for mobile deployment by optimizing the web assets for mobile viewports (handling notches and scaling) and syncing the code to the Android project using Capacitor.

## User Review Required
None. Standard mobile optimizations.

## Proposed Changes

### Web Assets
#### [MODIFY] [index.html](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/index.html)
- Update `<meta name="viewport">` to include `viewport-fit=cover` and `user-scalable=no` for a native app feel.

#### [MODIFY] [index.css](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/index.css)
- Add `padding-top: env(safe-area-inset-top)` and `padding-bottom: env(safe-area-inset-bottom)` to `body` or `#root` to handle status bars and home indicators on modern devices.
- Ensure touch targets are accessible.

### Build & Sync
- Run `npm run mobile:build` (which runs `vite build` and `npx cap sync`).

## Verification Plan

### Automated Verification
- Check output of `npm run mobile:build` for success.
- Verify `android/app/src/main/assets/public/index.html` exists and is updated (if accessible).

### Manual Verification
- User will need to run the app in Android Studio (`npm run mobile:open:android`) to see the final result on a device/emulator.
