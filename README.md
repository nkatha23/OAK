# OAK
FarmConnect - E-commerce Platform for Farmers
FarmConnect is an e-commerce platform designed to connect small and large-scale farmers directly with buyers (corporate and individual) to improve market access, fair pricing, and facilitate easy transactions. Farmers can upload their products, manage inventory, and sell directly to consumers, while buyers can access various products from farmers, search, filter, and place orders securely.

Table of Contents
Project Overview
Features
Tech Stack
Setup and Installation
Usage
API Endpoints
Database Schema
Testing
Deployment
Contributing
License
Project Overview
This project aims to provide an online marketplace where farmers can list their produce for sale and interact directly with buyers, cutting down on intermediaries and enabling fair pricing. It includes features for product listings, order management, payments, and a backend dashboard for both admin and users.

Features
Farmer Account: Farmers can register, log in, and upload their products (name, price, quantity, description, images).
Product Listings: Buyers can search, filter, and view product listings, including detailed product descriptions.
Order Management: Buyers can place orders, view their orders, and track order status. Farmers can view orders and manage inventory.
Payment Integration: Support for M-Pesa, Stripe, or PayPal payments.
Admin Dashboard: Admins can manage users, approve/reject products, and view overall platform analytics.
Role-based Access: Differentiated access for farmers, buyers, and admins.
Tech Stack
Frontend: ReactJS, React Router, Axios
Backend: Node.js, Express.js
Database: MySQL
Authentication: JWT (JSON Web Tokens) for secure user login
Payment Gateway: M-Pesa (for local payments), Stripe/PayPal (for global payments)
Hosting: Netlify (Frontend), AWS EC2/DigitalOcean (Backend), AWS RDS (MySQL Database)
Setup and Installation
Prerequisites
Node.js: Download and install Node.js
MySQL: Download and install MySQL
Git: Install Git
Frontend (ReactJS)
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/farmconnect.git
cd farmconnect
Navigate to the frontend directory:

bash
Copy code
cd client
Install dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
The app should now be running at http://localhost:3000.

Backend (Node.js + Express)
Navigate to the backend directory:

bash
Copy code
cd server
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root of the backend directory and configure your environment variables (e.g., database credentials, JWT secret):

makefile
Copy code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=farmconnect
JWT_SECRET=yourjwtsecret
PAYMENT_SECRET=yourpaymentgatewaykey
Start the backend server:

bash
Copy code
npm start
The backend server should now be running at http://localhost:5000.

Database Setup
Create a MySQL database named farmconnect:

sql
Copy code
CREATE DATABASE farmconnect;
Import the schema to set up tables (user, product, order, etc.). You can find the SQL schema file in the server/schema.sql file.

Test the connection and ensure the database is set up correctly.

Usage
For Farmers:

Register on the platform, log in, and upload your products (with images).
Manage your product inventory, update prices, and view orders.
For Buyers:

Browse through the products listed by farmers, search/filter by categories.
Add products to your cart, proceed to checkout, and make payments.
For Admins:

Manage user accounts, approve/reject products, track orders, and generate platform reports.
API Endpoints
Authentication
POST /api/auth/register - Register a new user (Farmer/Buyer)
POST /api/auth/login - User login (Farmer/Buyer/Admin)
Products
POST /api/products - Add a new product (Farmer only)
GET /api/products - Get a list of all products
GET /api/products/:id - Get detailed product information
PUT /api/products/:id - Update a product (Farmer only)
DELETE /api/products/:id - Delete a product (Farmer only)
Orders
POST /api/orders - Place a new order (Buyer only)
GET /api/orders - View all orders (Buyer/Farmer/Admin)
GET /api/orders/:id - View details of a specific order (Buyer/Farmer/Admin)
Payments
POST /api/payment - Handle payment transaction (Buyer)
Database Schema
Users
id (Primary Key, INT)
username (VARCHAR)
email (VARCHAR, unique)
password (VARCHAR)
role (ENUM: 'farmer', 'buyer', 'admin')
Products
id (Primary Key, INT)
farmer_id (Foreign Key to Users)
name (VARCHAR)
description (TEXT)
price (DECIMAL)
quantity (INT)
image_url (VARCHAR)
Orders
id (Primary Key, INT)
buyer_id (Foreign Key to Users)
farmer_id (Foreign Key to Users)
product_id (Foreign Key to Products)
quantity (INT)
total_price (DECIMAL)
status (ENUM: 'pending', 'confirmed', 'completed')
Payments
id (Primary Key, INT)
order_id (Foreign Key to Orders)
payment_status (ENUM: 'pending', 'completed', 'failed')
payment_method (VARCHAR)
amount (DECIMAL)
payment_date (DATETIME)
Testing
To test the application:

Use Jest or Mocha for backend testing.
Use React Testing Library or Jest for frontend testing.
Ensure all API endpoints and UI components work as expected.
Deployment
Frontend:
Netlify or Vercel: For quick deployment of the React frontend.
Backend:
AWS EC2 or Heroku: Host the backend Node.js server.
AWS RDS or DigitalOcean: For MySQL database hosting.
Continuous Integration/Continuous Deployment (CI/CD):
Set up GitHub Actions for automated deployment with each code change.
Contributing
Contributions are welcome! If you have any suggestions or would like to report issues, please feel free to submit a pull request or open an issue in this repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.
