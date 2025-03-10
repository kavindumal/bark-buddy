import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Navigation } from '@toolpad/core/AppProvider';
import {
    Construction, EmojiPeople, Inventory,
    LocalShipping, Payment,
    PowerSettingsNew, Settings, TransferWithinAStation,
    Warehouse
} from "@mui/icons-material";

export const DashboardNavComponent: Navigation = [
    {
        kind: 'header',
        title: 'Main Items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'warehouses',
        title: 'Warehouses',
        icon: <Warehouse />,
    },
    {
        segment: 'customers',
        title: 'Customers',
        icon: <EmojiPeople />,
    },
    {
        segment: 'employees',
        title: 'Employees',
        icon: <TransferWithinAStation />,
    },
    {
        kind: 'header',
        title: 'Inventory Items',
    },
    {
        segment: 'inventory',
        title: 'Item Inventory',
        icon: <Inventory />,
    },
    {
        segment: 'transportation ',
        title: 'Transportation ',
        icon: <LocalShipping />,
    },
    {
        segment: 'equipment',
        title: 'Equipments',
        icon: <Construction />,
    },
    {
        segment: 'reports',
        title: 'Analyzes',
        icon: <BarChartIcon />,
    },
    {
        segment: 'payment',
        title: 'Payment',
        icon: <Payment />,
    },
    {
        segment: 'settings',
        title: 'User Account',
        icon: <Settings />,
    },
    {
        segment: 'logout',
        title: 'Sign Out',
        icon: <PowerSettingsNew />,
    },
];