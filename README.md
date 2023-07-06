# Digitized Mvita Requests System

The Digitized Mvita Requests System is a web-based application aimed at streamlining and automating the request management process in the Mvita region. It provides a centralized platform for citizens to submit various types of requests, such as public service requests, infrastructure maintenance, and community development projects. The system allows users to track the progress of their requests and enables government authorities to efficiently manage and prioritize incoming requests.

## Features

- User Registration and Authentication: Allows citizens to create accounts and log in securely.
- Request Submission: Provides an intuitive interface for users to submit different types of requests.
- Request Tracking: Enables users to monitor the progress and status of their submitted requests.
- Admin Dashboard: Offers a comprehensive dashboard for government authorities to manage incoming requests, assign tasks, and prioritize actions.
- Analytics and Reporting: Generates reports and insights to analyze request trends, response times, and areas of improvement.
- Communication and Notifications: Facilitates communication between citizens and government authorities through notifications and updates on request status.

## Technologies Used

- Frontend: React.js, Redux
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Authentication: JSON Web Tokens (JWT)
- Styling: CSS Modules, Material-UI

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies for frontend: `cd client && npm install`
4. Install dependencies for backend: `cd ../server && npm install`
5. Set up the PostgreSQL database and configure the connection in the `server/config/database.js` file
6. Run the application: `npm run dev`

## Usage

1. Access the application in your web browser at `http://localhost:3000`
2. Register a new user account or log in with existing credentials
3. Explore the dashboard and submit different types of requests based on the available categories
4. Stakeholders for each categories notified via whatsapp API
5. Admin users can access the admin dashboard to manage and prioritize incoming requests
6. Analyze reports and data insights to improve the efficiency and responsiveness of request management
7. Receptionist can also receive letters & invites, Appointments and Deliveries to the office through this system

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
