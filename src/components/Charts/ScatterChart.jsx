import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ScatterSeries } from '@syncfusion/ej2-react-charts';
import { species } from "../../data/mock-data";

const ScatterChart = () => {

    const primaryxAxis = {
        title: 'Weight (lbs)', minimum: 2, maximum: 1000,
        edgeLabelPlacement: 'Shift', labelFormat: '{value}lbs'
    };
    const primaryyAxis = {
        title: 'Height (in)', minimum: 2, maximum: 70,
        labelFormat: '{value}in', rangePadding: 'None'
    };
    const marker = { width: 15, height: 15 };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Height / Weight'>
        <Inject services={[ScatterSeries, Legend, Tooltip, DataLabel, Category]}/>
        <SeriesCollectionDirective>
            {species.map((specie) => <SeriesDirective dataSource={species.filter(obj => obj.name === specie.name)} xName='weight' yName='height' name={`${specie.name}`} type='Scatter' marker={marker}>
            </SeriesDirective>)}
        </SeriesCollectionDirective>
    </ChartComponent>;
}


export default ScatterChart;