# Site Index Project

The Site Index Project is a React-based web application designed to provide a comprehensive index of sites for a specific campus. It allows users to browse sites alphabetically, search for specific sites, and view detailed information about each site.

## Features

- **Browse Sites Alphabetically**: Users can view all sites categorized by the first letter of their titles.
- **Search Functionality**: A search feature that allows users to find sites based on keywords.
- **Responsive Design**: The application is fully responsive, providing a seamless experience on both desktop and mobile devices.
- **Environment-Specific Configuration**: Utilizes environment variables for configuration, making it easy to deploy in different environments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
TODO: Add link to repository

`git clone <https://github.com/yourusername/site-index-project.git>`

2. Navigate to the project directory:

`cd site-index-project`

3. Install the dependencies:

`npm install`

4. Set up environment variables:
   - Create a `.env` file in the root of your project.
   - Add the following line, replacing `your_campus_name` with the actual campus name:

```
REACT_APP_CAMPUS_NAME=your_campus_name
REACT_APP_BASE_URL=your_campus_url
```

5. Start the development server:
`npm start`

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

To deploy the application, you can use any static site hosting service that supports single-page applications, such as Netlify, Vercel, or GitHub Pages. Follow the documentation of these services for specific deployment instructions.

## Built With

- [React](https://reactjs.org/) - The web framework used
- [React Router](https://reactrouter.com/) - For routing and navigation
