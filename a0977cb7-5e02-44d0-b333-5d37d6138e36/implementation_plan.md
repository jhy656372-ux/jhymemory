# Implementation Plan - Consistency & Add Habit

This plan covers adding data persistence via `localStorage`, upgrading the data model to support streaks (history vs boolean), and implementing the "Add Habit" feature.

## User Review Required
> [!IMPORTANT]
> **Data Structure Change**: We are migrating from a simple `completed: boolean` to `history: string[]` (list of ISO dates). This will allow us to calculate streaks and view past history.
>
> **Date Handling**: We will use local date strings (YYYY-MM-DD) for simplicity to avoid timezone complexity for this MVP.

## Proposed Changes

### Logic & State Management
#### [MODIFY] [App.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/App.jsx)
- **State Initialization**: Initialize `habits` state from `localStorage.getItem('habits')`. If empty, use default data.
- **Persistence**: Add `useEffect` to save `habits` to `localStorage` whenever it changes.
- **Data Structure**:
    ```javascript
    // Old
    { id: 1, text: '...', completed: false }
    // New
    { id: 1, text: '...', history: ['2026-02-06', ...] } // Dates when completed
    ```
- **Toggle Logic**: `toggleHabit` will check if *today's date* is in the `history` array. If yes, remove it (undo). If no, add it.
- **Add Habit**: Implement `addHabit(text)` function.

### UI Components
#### [MODIFY] [Dashboard.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/Dashboard.jsx)
- **Props**: Accept `addHabit` prop.
- **Rendering**: Updates `habits.map` to check `habit.history.includes(today)` to determine if completed today.
- **Add Habit UI**: Add a simple input field and "+" button at the top or bottom of the list.

#### [MODIFY] [HabitDetail.jsx](file:///c:/Users/admin/.gemini/스위치웹서비스/daily-habit-tracker/src/HabitDetail.jsx)
- **Streak Calculation**: Calculate current streak based on consecutive days in `habit.history`.
- **History Display**: Show actual history from `habit.history`.

## Verification Plan
### Manual Verification
1.  **Persistence**:
    - Check off a habit.
    - Refresh the page.
    - Verify the habit is still checked.
2.  **Add Habit**:
    - Enter "New Habit" and click Add.
    - Verify it appears in the list.
    - Refresh page to verify it persists.
3.  **Streaks**:
    - Manually edit `localStorage` to simulate past dates.
    - Verify Streak count in Detail page.
