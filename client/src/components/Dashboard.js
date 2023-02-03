import { useState, useEffect } from 'react';
import { Circles } from 'react-loader-spinner';
import axios from 'axios';

import Filter from './modules/Filter/Filter';
import Table from './modules/Table/Table';

function Dashboard() {
    const [filters, setFilters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const loggedUser = localStorage.getItem('token');

    const getData = async (filters) => {
        setLoading(true);
        try {
            console.log(loading);
            const { data } = await axios.get(`http://localhost:9000/getUserDetails`);
            console.log(data);

            setLoading(false);
            setItems(data);
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleFilter = (filter) => {
        if (filter === 'all') {
            setFilters(['0', '1', '2', '3', '4']);
            return;
        }
        if (filters.includes(filter)) {
            setFilters(filters.filter((item) => item !== filter));
        } else {
            setFilters([...filters, filter]);
        }
    };

    return (
        <div>
            {loading ? (
                <Circles
                    className="d-flex text-align-center justify-content-center"
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            ) : (
                <div className="main_page_container">
                    <Filter handleFilter={handleFilter} filters={filters} />
                    {loggedUser ? (
                        <Table filters={filters} items={items} />
                    ) : (
                        <h1>You are not logged in</h1>
                    )}
                </div>
            )}
        </div>
    );
}

export default Dashboard;
