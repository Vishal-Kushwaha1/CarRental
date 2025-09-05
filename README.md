# CarRental

A modern car rental web application built with React and Vite.

## Features
- Browse available cars with images and details
- View car details and specifications
- Book cars online
- User authentication (login/signup)
- Responsive design for mobile and desktop
- Dashboard for managing bookings
- Newsletter subscription
- Testimonials and reviews

## Project Structure
```
frontend/
  ├── public/
  ├── src/
  │   ├── assets/         # Images and SVGs
  │   ├── compponents/    # Reusable React components
  │   ├── pages/          # Application pages (Home, Cars, CarDetail, MyBooking)
  │   ├── App.jsx         # Main App component
  │   ├── main.jsx        # Entry point
  │   └── index.css       # Global styles
  ├── index.html
  ├── package.json
  ├── vite.config.js
  └── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or above recommended)
- npm

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Vishal-Kushwaha1/CarRental.git
   ```
2. Navigate to the frontend directory:
   ```
   cd CarRental/frontend
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

## Scripts
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

## Folder Details
- **assets/**: Images, icons, and SVGs used in the app
- **compponents/**: Banner, CarCard, FeaturedSection, Footer, Hero, Navbar, Newsletter, Testimonial, Title
- **pages/**: Home, Cars, CarDetail, MyBooking

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.
