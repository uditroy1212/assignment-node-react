import React from 'react';

import './Filter.css';

const Filter = ({ handleFilter, filters }) => {
    const colourTypes = {
        0: '#48BEFF',
        1: '#3DFAFF',
        2: '#43C59E',
        3: '#3D7068',
        4: '#14453D',
    };
    return (
        <div className="filter_container">
            <div>
                <input
                    type="checkbox"
                    name="filter"
                    value="all"
                    id="all"
                    onChange={(e) => handleFilter('all')}
                />{' '}
                All
            </div>
            <div className="filter_type">
                {Object.keys(colourTypes).map((type) => (
                    <div key={type} className="input_container">
                        <input
                            type="checkbox"
                            name="filter"
                            value={type}
                            id={type}
                            checked={filters.includes(type)}
                            onChange={(e) => handleFilter(e.target.value)}
                        />
                        <label
                            htmlFor={type}
                            style={{ borderBottom: `4px solid ${colourTypes[type]}` }}
                        >
                            Type{type}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;
