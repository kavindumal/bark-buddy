import { createBrowserRouter, RouterProvider } from "react-router"
import "./App.css"
import { RootLayout } from "./components/RootLayout"

function App() {
    const routes = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                // { path: "", element: <Dashboard /> },
                // { path: "/place-order", element: <PlaceOrder /> }
            ]
        }
    ])

    return (
        <>
            <RouterProvider router={routes} />
        </>
    )
}

export default App
