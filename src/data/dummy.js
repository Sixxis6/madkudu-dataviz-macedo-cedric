import React from 'react';

export const gridSpeciesImage = (props) => (
  <div>
    <a href={props.picture}>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.picture}
      alt="species-item"
    />
    </a>
  </div>
);

export const unitHeight = (props) => (
    <div>
      {`${props.height} in`}
    </div>
);

export const unitWeight = (props) => (
    <div>
      {`${props.weight} lbs`}
    </div>
);

export const gridSpeciesStatus = (props) => (
  <button
    type="button"
    style={{ background: (props.continent === "Africa" ? "#DC1A3A": "#17D169")}}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.continent}
  </button>
);

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


export const SpeciesGrid = [
  {
    headerText: 'Image',
    template: gridSpeciesImage,
    textAlign: 'Center',
    width: '120',
  },
  { field: 'name',
    headerText: 'Species Name',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'weight',
    headerText: 'Weight',
    template: unitWeight,
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    field: 'height',
    headerText: 'Height',
    template: unitHeight,
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
  {
    headerText: 'Horns',
    field: 'horns',
    textAlign: 'Center',
    width: '120',
  },
  {
    field: 'continent',
    headerText: 'Location',
    template: gridSpeciesStatus,
    width: '150',
    textAlign: 'Center',
  },
];

export const hornPercentageCalculation = (antelopes) => {
  const hornsCount = {};
  for (const antelope of antelopes) {
    const horns = antelope.horns;
    if (horns in hornsCount) {
      hornsCount[horns]++;
    } else {
      hornsCount[horns] = 1;
    }
  }

  const newArray = [];
  for (const horns in hornsCount) {
    newArray.push({
      x: horns,
      y: hornsCount[horns],
      text: `${(hornsCount[horns] / antelopes.length) * 100}%`
    });
  }
  return newArray;
};
