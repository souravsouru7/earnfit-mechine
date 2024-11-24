# Newsletter Management System

A React-based newsletter management application with subscriber tracking functionality.

## Setup Instructions

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation Steps

1. Clone the repository

2. Navigate to project directory

3. Install dependencies

3. Install dependencies

4. Start the application

Access the application at: http://localhost:3000

## Core Features

1. Newsletter Management
   - Create newsletters
   - Preview newsletters
   - Custom layouts
   - Track newsletter details

2. Subscriber Management 
   - View subscribers list
   - Track subscriber details
   - Manage subscriptions

## Project Structure
src/
├── components/
│ ├── common/
│ │ ├── Header.js # Navigation header
│ │ └── Sidebar.js # Side navigation
│ ├── Newsletter/
│ │ ├── NewsletterTable.js
│ │ ├── NewsletterLayout.js
│ │ ├── NewsletterPreview.js
│ │ ├── NewsletterCreate.js
│ │ └── NewsletterDetails.js
│ └── Subscribe/
│ └── SubscribersTable.js
└── App.js # Main application file

## Available Routes

- `/subscribers` - Subscriber management
- `/newsletter` - Newsletter dashboard
- `/newsletter/preview` - Newsletter preview
- `/newsletter/create` - Create newsletter
- `/newsletter/layout` - Layout management
- `/newsletter/details/:id` - Newsletter details

## Technologies Used

- React.js - Frontend framework
- React Router - Navigation
- Tailwind CSS - Styling

## Notes

- Dark theme enabled by default
- Responsive design for all screen sizes
- Uses React hooks for state management

## Common Issues & Solutions

If you encounter build errors:

For routing issues:
- Verify routes in App.js
- Check BrowserRouter implementation
