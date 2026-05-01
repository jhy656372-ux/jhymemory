# NicheMaster Concierge MVP Implementation Plan

## Goal Description
Build a "Wizard of Oz" concierge MVP platform where users submit requests that appear automated but are processed by a human admin with AI assistance. The goal is to validate WTP (Willingness to Pay) for a niche business idea.

## Proposed Changes

### Project Structure
- Initialize a Next.js 14+ (App Router) project is `C:\Users\admin\.gemini\antigravity\scratch\NicheMaster_Concierge_MVP`
- Configure Tailwind CSS
- Set up Shadcn/ui for components

### Database (Supabase)
- **Users**: Auth profiling
- **Tasks**: Stores user requests, status (New, Processing, Review, Done), original inputs, AI drafts, final outputs.
- **Messages**: 1:1 communication between User and Admin.

### Frontend Components

#### Landing Page (`app/page.tsx`)
- Hero section with clear Value Prop.
- "Get Sample" / "Order Now" CTA.
- Testimonials.

#### Intake Form (`app/intake/page.tsx`)
- Multi-step form using state.
- File upload placeholder (or actual implementation if simple).
- Conditional logic simulation.

#### User Dashboard (`app/dashboard/page.tsx`)
- Progress bar visualization.
- Result viewer.
- Chat interface.

#### Admin Dashboard (`app/admin/page.tsx`)
- **Kanban Board**: Drag-and-drop or simple status switching for tasks.
- **Work Area**:
    - View User Input.
    - AI Draft generation (mocked or connected to OpenAI API).
    - **Editor**: Textarea for manual refinement.
    - **Publish Button**: Updates task status and sends result to user.

### Backend / API

#### `app/api/submit-result/route.ts`
- Handlers for Admin to submit the final "polished" result.
- Updates Supabase record.
- Triggers notification (mocked) or status update.

## Verification Plan

### Manual Verification
- **User Flow**: Visit Landing -> Submit Form -> Check Dashboard (Status: New).
- **Admin Flow**: Visit Admin -> See Task -> Generate Draft -> Edit -> Publish.
- **Completion**: User Dashboard shows "Complete" and displays the result.
