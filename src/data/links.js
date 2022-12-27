import { RiContactsLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import React from "react";

export const links = [
    {
        title: 'Pages',
        links: [
            {
                name: 'species',
                icon: <RiContactsLine />,
            },
        ],
    },
    {
        title: 'Charts',
        links: [
            {
                name: 'pie',
                icon: <FiPieChart />,
            },
            {
                name: 'scatter',
                icon: <AiOutlineBarChart />,
            },
        ],
    },
];
