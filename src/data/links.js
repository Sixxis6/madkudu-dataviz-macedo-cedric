import { RiContactsLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { FiPieChart } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
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
                name: 'column',
                icon: <BsBarChart />,
            },
            {
                name: 'scatter',
                icon: <AiOutlineBarChart />,
            },
        ],
    },
];
