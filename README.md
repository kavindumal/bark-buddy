# 🐶 Bark Buddy Frontend

## 📌 Project Overview

Bark Buddy is a pet services management platform designed to connect pet owners with pet service providers. The platform offers features such as pet profile management, appointment booking, veterinary services, pet adoption listings, and pet service recommendations.

This repository contains the frontend code for the Bark Buddy platform, built with:

- **React**
- **TypeScript**
- **Redux**
- **Redux Thunk**
- **Tailwind CSS**

## 🛠️ Key Features

1. **User Authentication & Role Management**
    - JWT-based authentication (Login, Registration, Logout)
    - Role-based access control (RBAC) for Pet Owners & Service Providers
    - Secure password hashing using bcrypt
    - User Profiles (edit profile, change password, update preferences)

2. **Pet Management**
    - Pet Profiles (Name, Breed, Age, Medical History, Images)
    - Adoption Listings for users looking to adopt pets
    - Lost & Found Pets section to report missing pets

3. **Appointment Booking System**
    - Book, Cancel, and Reschedule pet services
    - Service Categories: Vet Consultations, Grooming, Training, Boarding
    - Real-time Appointment Status Updates

4. **Pet Service Marketplace**
    - Service Listings (Vets, Groomers, Trainers, Boarding Centers)
    - Search & Filter providers by location, rating, and availability
    - User Reviews & Ratings

5. **Messaging & Notifications**
    - In-app messaging between pet owners and service providers
    - Email & Push Notifications for upcoming appointments and updates

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later) or **yarn** (v1.22 or later)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/bark-buddy-frontend.git
    cd bark-buddy-frontend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

   or

    ```bash
    yarn install
    ```

### Running the Development Server

To start the development server, run:

```bash
npm start
```

or

```bash
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build, run:

```bash
npm run build
```

or

```bash
yarn build
```

The build artifacts will be stored in the `build/` directory.

## 📂 Project Structure

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   ├── components
│   ├── features
│   ├── hooks
│   ├── pages
│   ├── redux
│   ├── services
│   ├── styles
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── ...
```

- **public/**: Contains the `index.html` file and static assets.
- **src/assets/**: Contains images, fonts, and other static assets.
- **src/components/**: Contains reusable React components.
- **src/features/**: Contains feature-specific components and logic.
- **src/hooks/**: Contains custom React hooks.
- **src/pages/**: Contains page components for different routes.
- **src/redux/**: Contains Redux store, slices, and middleware.
- **src/services/**: Contains API service functions.
- **src/styles/**: Contains global styles and Tailwind CSS configuration.

## 🧪 Running Tests

To run the tests, use:

```bash
npm test
```

or

```bash
yarn test
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

If you have any questions or suggestions, feel free to contact us at [kavindu11250403@gmail.com].

Happy coding!