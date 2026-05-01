# Mascot Selection Feature Plan

## Goal Description
Allow the user to change the app's mascot character. Currently, it is hardcoded as a bear (🐻). The user wants options like a Dog (🐶), Cat (🐱), etc.

## Proposed Changes

### State Management
#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/App.jsx)
- Add `mascot` state, initialized from localStorage (default: 'bear').
- Add `changeMascot` function.
- Pass `mascot` and `changeMascot` to relevant components.

### UI Components
#### [MODIFY] [Profile.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/Profile.jsx)
- Add a section to select the mascot.
- Display available mascots: Bear (🐻), Dog (🐶), Cat (🐱), Rabbit (🐰), Fox (🦊).

#### [MODIFY] [Dashboard.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/Dashboard.jsx)
- Accept `mascot` prop.
- Replace hardcoded '🐻' with the selected mascot emoji.
- Update animation logic to support dynamic mascot (if necessary).

#### [MODIFY] [HabitDetail.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/HabitDetail.jsx)
- Accept `mascot` prop.
- Replace hardcoded '🐻' with the selected mascot emoji.

## Verification Plan
- Manual test: Change mascot in Profile and verify it updates on Dashboard and Habit Detail pages.
