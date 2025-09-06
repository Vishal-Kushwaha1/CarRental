# CarRental

A modern car rental web application that allows users to browse, book, and manage car rentals, as well as provides an owner dashboard for car management.

## Features

- **User Functionality**
  - Browse available cars
  - View detailed car information
  - Book cars and manage bookings
  - Responsive navigation and footer

- **Owner Functionality**
  - Owner dashboard for managing cars
  - Add new cars to the platform
  - Separate owner layout for management pages

## Project Structure

```
frontend/
  ├── src/
  │   ├── App.jsx
  │   ├── compponents/
  │   │   ├── Navbar.jsx
  │   │   └── Footer.jsx
  │   ├── pages/
  │   │   ├── Home.jsx
  │   │   ├── Cars.jsx
  │   │   ├── CarDetail.jsx
  │   │   ├── MyBooking.jsx
  │   │   └── owner/
  │   │       ├── Layout.jsx
  │   │       ├── Dashboard.jsx
  │   │       └── AddCar.jsx
  └── ...
```

## How It Works

- **Routing:**  
  Uses React Router for navigation between pages.  
  - `/` — Home page  
  - `/cars` — List of cars  
  - `/car-details/:id` — Car details  
  - `/my-bookings` — User bookings  
  - `/owner` — Owner dashboard  
  - `/owner/add-car` — Add car page

- **Conditional Layout:**  
  Navbar and Footer are hidden on owner dashboard routes for a focused management experience.

- **State Management:**  
  Uses React hooks for UI state (e.g., login modal).

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Run the development server:**
   ```
   npm start
   ```

3. **Open in browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Contributing

Feel free to fork the repository, open issues, or submit pull requests for improvements and bug fixes.

## License

This project is licensed under the MIT License.

---

**Made with ❤️ by Vishal Kushwaha**