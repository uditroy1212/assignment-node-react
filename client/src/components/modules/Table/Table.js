import React, { useEffect, useState } from 'react';

import './Table.css';

const Table = ({ filters, items }) => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        if (items.length && filters.length) {
            let data = [];

            filters.forEach((filter) => {
                let tempData = items.filter((item) => item.type === +filter);
                data = [...data, ...tempData];
            });
            setFilterData(data);
        } else if (items.length) {
            setFilterData(items);
        }
    }, [filters, items]);

    const colourTypes = {
        0: '#48BEFF',
        1: '#3DFAFF',
        2: '#43C59E',
        3: '#3D7068',
        4: '#14453D',
    };
    return (
        <div className="table_container">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Wallet-1</th>
                        <th>Wallet-2</th>
                        <th>Wallet-3</th>
                    </tr>
                </thead>
                <tbody>
                    {filterData.map((item, index) => (
                        <tr key={index}>
                            <td style={{ backgroundColor: `${colourTypes[item.type]}` }}>
                                {index + 1}
                            </td>
                            <td>{item.email}</td>
                            <td>{item.fullName}</td>
                            <td>{item.wallet1}</td>
                            <td>{item.wallet2}</td>
                            <td>{item.wallet3}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
