import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort,
    ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject, Search, Toolbar } from "@syncfusion/ej2-react-grids";
import { species } from '../data/mock-data'
import { Header } from "../components";
import { SpeciesGrid } from "../data/dummy";

const Species = () => {
    return (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Antelopes Species" />
            <GridComponent
                dataSource={species}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width="auto"
            >
                <ColumnsDirective>
                    {SpeciesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}></ColumnDirective>
                        )
                    )}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Species;