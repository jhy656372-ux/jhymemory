# Implementation Plan - Phase 2: Navigation & Views

The core "Habit Tracking" loop is done. Now we need to make the "Stats" and "Me" tabs functional.

## Proposed Changes

### 1. Navigation Logic
-   **Extract Navigation**: Move the `bottom-nav` from `Dashboard` to a separate `Layout` component or include it in `App.jsx` so it's visible on all main tabs (Home/Stats/Profile). 
    -   *Decision*: For simplicity, I'll keep it in a `Navigation` component and include it in the Routes or wrapping component.

### 2. New Components

#### `Stats.jsx`
-   **Goal**: Visualize user progress.
-   **Features**:
    -   "Completion Rate" (Circle chart or progress bar).
    -   "Total Habits Completed" (All time count).
    -   "Best Streak" (Calculated across all habits).

#### `Profile.jsx` (Me)
-   **Goal**: User personalization and data management.
-   **Features**:
    -   "Your Name": Simple distinct text/input.
    -   "Theme Picker": Maybe toggle between "Pastel" (current) and "Dark/Night" mode (if time permits, otherwise just a placeholder or simple color shift).
    -   "Danger Zone": Clear All Data button.

### 3. Routing Updates (`App.jsx`)
-   Add routes: `/stats`, `/profile`.
-   Update `Dashboard` to be just the home view `Home`.

### 4. Styling
-   Ensure consistent "Glassmorphism" look across new pages.

## Verification
-   Clicking "Stats" goes to Stats page.
-   Clicking "Me" goes to Profile page.
-   "Clear Data" actually wipes localStorage and resets state.
