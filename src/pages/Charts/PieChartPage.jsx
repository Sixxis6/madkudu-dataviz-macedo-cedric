import React from 'react'
import {  hornPercentageCalculation } from '../../data/dummy';
import { Header, Pie as PieChart } from '../../components';
import { species } from "../../data/mock-data";

const hornCount = hornPercentageCalculation(species)

const PieChartPage = () => {
   return ( <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Pie" title="Horn Type Breakdown"/>
        <div className="w-full">
            <PieChart id="chart-pie" data={hornCount} legendVisiblity height="full"/>
        </div>
    </div> )
};

export default PieChartPage;