import React from 'react'
import {render, fireEvent, cleanup} from "@testing-library/react";
import { StateContext } from "../contexts/ContextProvider";
import {Sidebar} from "../components";
import {BrowserRouter} from "react-router-dom";

afterEach(() => {
    cleanup();
})

it('Sidebar has "Madkudu Dataviz"', () => {
const { container } = render(
    <StateContext.Provider value={{
        activeMenu: true
    }}>
        <BrowserRouter>
            <Sidebar />
        </BrowserRouter>
    </StateContext.Provider>
);
    expect(container.querySelector('div').textContent).toContain('Madkudu Dataviz')
})

it('Sidebar has Pages and Charts as link categories', () => {
    const { container } = render(
        <StateContext.Provider value={{
            activeMenu: true
        }}>
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        </StateContext.Provider>
    );
    expect(container.querySelector('div').textContent).toContain('Pages')
    expect(container.querySelector('div').textContent).toContain('Charts')
})
it('Sidebar has species as Pages link', () => {
    const { container } = render(
        <StateContext.Provider value={{
            activeMenu: true
        }}>
            <BrowserRouter>
                <Sidebar />
            </BrowserRouter>
        </StateContext.Provider>
    );
    expect(container.querySelector('div').textContent).toContain('species')
})
it.todo('Sidebar has Pie chart as Charts link')
it.todo('Sidebar has Column chart as Charts link')
it.todo('Sidebar has Scatter chart as Charts link')

