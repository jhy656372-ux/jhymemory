# Mobile App Conversion Plan

## Goal Description
Convert the existing "Daily Habit Tracker" web application into a native mobile app for Android (Galaxy) and iOS (iPhone) using Capacitor.

## User Review Required
> [!IMPORTANT]
> To build the final app files (.apk for Android, .ipa for iOS), you will need **Android Studio** and **Xcode** installed on your machine. I will set up the project structure, but the final build step requires these tools.

## Proposed Changes

### Project Configuration
#### [NEW] [capacitor.config.json](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/capacitor.config.json)
- Initialize Capacitor configuration
- Set `webDir` to `dist` (Vite's default build output)

#### [MODIFY] [package.json](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/package.json)
- Add scripts for building and syncing mobile apps:
  - `"mobile:build": "vite build && npx cap sync"`
  - `"mobile:open:android": "npx cap open android"`
  - `"mobile:open:ios": "npx cap open ios"`

### Dependencies
- install `@capacitor/core`
- install `@capacitor/cli`
- install `@capacitor/android`
- install `@capacitor/ios`

## Verification Plan
### Automated Tests
- Verify `npx cap doctor` returns dependencies installed correctly.
- Verify `dist` folder is created after build.
- Verify `android` and `ios` folders are created.

### Manual Verification
- Ask user to open the project in Android Studio/Xcode if available to verify it loads.
