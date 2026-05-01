# Tasks

[x] Fix Notification Permissions <!-- id: 21 -->
    - [x] Refactor `utils.js` for robust permission handling <!-- id: 22 -->
    - [x] Add detailed error logging in `utils.js` (Done in refactor) <!-- id: 23 -->
    - [x] Add `POST_NOTIFICATIONS` to Manifest (Round 2) <!-- id: 31 -->
    - [x] Fix UI Toggle Logic (Round 3) <!-- id: 32 -->
    - [x] Downgrade Target SDK to 32 (Compatibility Mode) <!-- id: 33 -->
- [x] Implement Global Reset <!-- id: 24 -->
    - [x] Create `resetAllData` in `App.jsx` (clears habits, theme, perfectDayLog) <!-- id: 25 -->
    - [x] Pass `resetAllData` to `Profile.jsx` <!-- id: 26 -->
    - [x] Verify `Stats.jsx` reflects reset data (Implicit via prop) <!-- id: 27 -->
- [x] Build & Verify <!-- id: 28 -->
    - [x] Rebuild Android APK <!-- id: 29 -->
    - [x] Manual Verification (Verified by User) <!-- id: 30 -->

- [/] Localize App to Korean <!-- id: 34 -->
    - [x] Translate `App.jsx` (Habits & Toasts) <!-- id: 35 -->
    - [x] Translate `utils.js` (Themes & Notifications) <!-- id: 36 -->
    - [x] Translate `Dashboard.jsx` (Headers) <!-- id: 37 -->
    - [x] Translate `Profile.jsx` (UI labels & Dialogs) <!-- id: 38 -->
    - [x] Translate `HabitDetail.jsx` (Stats & Labels) <!-- id: 39 -->
    - [x] Translate `Stats.jsx` (Charts & Overview) <!-- id: 42 -->
    - [x] Add Data Migration Logic (Auto-translate old habits) <!-- id: 43 -->
    - [x] Translate `Navigation.jsx` (Tabs) <!-- id: 40 -->
    - [/] Rebuild APK with Korean text (Needs verification) <!-- id: 41 -->
