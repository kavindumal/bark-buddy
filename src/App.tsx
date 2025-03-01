import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/layout/RootLayout.tsx";
import {UserSignInPage} from "./pages/UserSignInPage.tsx";
import {NotFoundPage} from "./pages/NotFoundPage.tsx";
import {UserSignUpPage} from "./pages/UserSignUpPage.tsx";
import {ForgotPasswordPage} from "./pages/ForgetPasswordPage.tsx";
import DashboardPage from "./pages/DashboardPage.tsx";
import HomePage from "./pages/dashboard/HomePage.tsx";
import MyPetPage from "./pages/dashboard/MyPetPage.tsx";
import AdoptAndLovePage from "./pages/dashboard/AdoptAndLovePage.tsx";
import LostAndFoundDogPage from "./pages/dashboard/LostAndFoundDogPage.tsx";
import SettingsPage from "./pages/dashboard/SettingsPage.tsx";
import ListningAndRequestPage from "./pages/dashboard/ListningAndRequestPage.tsx";

function App() {

    const routes = createBrowserRouter([
        {
            path: '',
            element: <RootLayout />,
            children: [
                { path: '', element: <Navigate to="/signin" replace /> },
                { path: '/signin', element: <UserSignInPage /> },
                { path: '/signup', element: <UserSignUpPage /> },
                { path: '/forgetpassword', element: <ForgotPasswordPage /> },
            ]
        },
        {
            path: '/dashboard',
            element: <DashboardPage />,  // Sidebar layout remains fixed
            children: [
                { path: '', element: <HomePage /> },
                { path: 'adopt', element: <AdoptAndLovePage /> },
                { path: 'lostandfound', element: <LostAndFoundDogPage /> },
                { path: 'mydogs', element: <MyPetPage /> },
                { path: 'listings', element: <ListningAndRequestPage /> },
                { path: 'settings', element: <SettingsPage /> },
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />
        }
])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App