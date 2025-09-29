# inside myapp folder

## Features

- Node.js backend (Express)
- React frontend
- MySQL database integration

## Prerequisites

- **Node.js** (already installed)
- **MySQL Server**

## Database Setup

1. Open your MySQL client and run:

    ```sql
    CREATE DATABASE myapp;
    CREATE USER 'myappuser'@'localhost' IDENTIFIED BY '1234';
    GRANT ALL PRIVILEGES ON myapp.* TO 'myappuser'@'localhost';
    FLUSH PRIVILEGES;
    ```

2. Update your backend configuration (if required) with these credentials.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/myapp.git
    cd myapp
    ```



2. **Install frontend dependencies:**

    ```bash
    cd client
    npm install
    ```

## Running the Project

1. **Start the Node.js Server:**

    ```bash
    node server.js
    ```

2. **Start the React Development Server:**

    ```bash
    cd client
    npm start
    ```

