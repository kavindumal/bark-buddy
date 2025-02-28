import {Component, ReactElement, useEffect, useMemo, useState} from "react";
import {Router} from '@toolpad/core/AppProvider';
// import {WarehousesPage} from "../../../pages/WarehousesPage.tsx";
import {NotFoundPage} from "../../../pages/NotFoundPage.tsx";
import {MainPage} from "../../../pages/MainPage.tsx";
import {Navigate, useNavigate} from "react-router-dom";
import {toast} from "sonner";

type RouteConfig = {
    [path: string]: ReactElement;
};

export function DashboardRouterComponent(initialPath: string): Router  & { Component: ReactElement } {
    const [pathname, setPathname] = useState(initialPath);
    const navigate = useNavigate();

    const routes: RouteConfig = {
        '/dashboard': <MainPage />,
        // '/warehouses': <WarehousesPage />,
        // '/customers': <CustomerPage />,
        '/logout': <Navigate to="/signin" replace />
    };

    useEffect(() => {
        if (pathname === "/logout") {
            toast.info("Sign out successful!");
            navigate("/signin", { replace: true });

        }
    }, [pathname]);

    return useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
            Component: routes[pathname] || <NotFoundPage />,
        };
    }, [pathname, Component]);
}