import {RiContactsLine, RiStockLine} from "react-icons/ri";
import {AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock} from "react-icons/ai";
import {FiPieChart} from "react-icons/fi";
import {BsBarChart} from "react-icons/bs";
import {GiLouvrePyramid} from "react-icons/gi";
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
                name: 'area',
                icon: <AiOutlineAreaChart />,
            },
            {
                name: 'bar',
                icon: <AiOutlineBarChart />,
            },
            {
                name: 'pie',
                icon: <FiPieChart />,
            },
            {
                name: 'financial',
                icon: <RiStockLine />,
            },
            {
                name: 'color-mapping',
                icon: <BsBarChart />,
            },
            {
                name: 'pyramid',
                icon: <GiLouvrePyramid />,
            },
            {
                name: 'stacked',
                icon: <AiOutlineBarChart />,
            },
        ],
    },
];
