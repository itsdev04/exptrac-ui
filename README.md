# Frontend Documentation for First Look Project

## Overview
This project is a full-stack application with an Angular frontend and a Spring Boot backend. The frontend is responsible for the user interface and client-side logic, while the backend handles data processing and business logic.

## Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- Angular CLI (version 12 or higher)
- Java Development Kit (JDK) (version 11 or higher)
- Maven (version 3.6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd first-look-project/frontend
   ```

2. **Install dependencies**
   Run the following command to install the necessary packages:
   ```bash
   npm install
   ```

### Running the Application

1. **Start the Angular frontend**
   In the frontend directory, run:
   ```bash
   ng serve
   ```
   This will start the Angular development server. You can access the application at `http://localhost:4200`.

2. **Start the Spring Boot backend**
   Navigate to the backend directory and run:
   ```bash
   mvn spring-boot:run
   ```
   The backend will be available at `http://localhost:8080`.

### Folder Structure
- `src/app`: Contains the main application components and modules.
- `src/assets`: Contains static assets such as images and stylesheets.
- `angular.json`: Configuration file for Angular CLI.
- `package.json`: Lists the dependencies and scripts for the frontend application.

## Contributing
Feel free to submit issues or pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.