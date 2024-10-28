
Location/Address Flow
This project is a Location/Address management application built with React (frontend) and Node.js (backend). Users can select their delivery location using the Google Maps API, add address details, and manage saved addresses. Optional features include geolocation permission prompts and a map-based address fine-tuning tool.

Features
Location Permission Prompt: A popup prompt for location access or manual address search.
Map Integration: Allows users to view, select, and adjust their location on a map using Google Maps.
Geolocation: Users can use the "Locate Me" feature for automatic location selection.
Address Form: Collects specific address details like House No., Apartment/Road, and allows categorizing addresses (Home, Office, Friends & Family).
Address Management: Users can save, view, update, and delete their saved addresses.
Responsive UI: The app is fully responsive, suitable for mobile and desktop views.
Optional Bonus Features: Mark locations as favorites, map preview, and error handling.
Technologies Used
Frontend: React, Google Maps API
Backend: Node.js, Express.js, MongoDB (via Mongoose)
State Management: Context API (or Redux if preferred)
Environment Variables: .env files for managing API keys and MongoDB URI.

Getting Started
Prerequisites
To set up and run the project, ensure you have the following:

Node.js and npm installed
A MongoDB database (or access to a MongoDB Atlas cluster)
A Google Maps API Key


Usage
Step-by-Step Guide
Location Permission Request:

Upon loading, the app prompts the user to enable location services. The user can:
Enable Location: Requests the user’s current location using browser permissions.
Search Manually: Allows the user to manually enter an address in a Google Maps search field.
Geolocation and Pin Selection:

If the user grants location access, the selected location is displayed on a Google Map.
The user can manually adjust the location by dragging a pin to fine-tune their location.
Delivery Address Form:

The user enters additional address details:
House/Flat/Block No.
Apartment/Road/Area
The user can save the address under categories like Home, Office, or Friends & Family.
Address Management:

View saved addresses, select an address for delivery, or delete/update an address.
A search feature allows users to find recent addresses or search for new locations.
Optional Features
Save as Favorite: Mark frequently used addresses as favorites for quick access.
Address Validation: Ensures accurate data entry.
Map Preview: Provides a quick preview of selected addresses on the map.
Code Explanation
Frontend
App.js: The main component that manages location permissions, displays the map, address form, and manages address data.
LocationPrompt.js: A modal component for requesting location access.
MapComponent.js: Uses Google Maps to display and adjust location.
AddressForm.js: A form for collecting address details.
ManageAddresses.js: Displays and manages saved addresses.
Backend
Address.js (Model): Mongoose schema for address data, including location (latitude/longitude), house/road details, and address category.
addressRoutes.js: Defines routes for adding, viewing, and managing addresses.
server.js: Main server file that connects to MongoDB and sets up the Express server.
Environment Variables
Both the frontend and backend rely on environment variables:

Google Maps API Key: In frontend/.env
MongoDB URI: In backend/.env


Error Handling
The application handles various errors, including:

Location Permission Denial: Displays a prompt if the user denies location access.
Network Issues: Notifies the user if there are connection problems.
Invalid Address: Prompts users to verify address details if validation fails.
Future Improvements
User Authentication: Implement user authentication to personalize address management.
Enhanced UI: Further refine the user interface for a smoother experience.
Address Validation: Use third-party services for accurate address validation.
