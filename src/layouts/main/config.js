import ChartPieIcon from "@heroicons/react/24/outline/ChartPieIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import HomeModernIcon from "@heroicons/react/24/outline/HomeModernIcon";
import { SvgIcon } from "@mui/material";
export const items = [
    {
        id: 1,
        path: "/home",
        title: "Visão geral",
        icon: (
            <SvgIcon fontSize="small">
                <ChartPieIcon />
            </SvgIcon>
        ),
    },
    {
        id: 2,
        path: "/home",
        title: "Adotantes",
        icon: (
            <SvgIcon fontSize="small">
                <UserIcon />
            </SvgIcon>
        ),
    },
    {
        id: 3,
        path: "/home",
        title: "ONGs",
        icon: (
            <SvgIcon fontSize="small">
                <HomeModernIcon />
            </SvgIcon>
        ),
    },
];
