import React from 'react'
import {Header, Scatter } from "../../components";
import {hornPercentageCalculation} from "../../data/dummy";
import {species} from "../../data/mock-data";

const hornCount = hornPercentageCalculation(species)

const ScatterChart = () => {
    return ( <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <Header category="Scatter" title="Body Template Breakdown"/>
        <div className="w-full">
            <Scatter id="chart-pie" data={hornCount} legendVisiblity height="full"/>
        </div>
    </div> )
};

export default ScatterChart;