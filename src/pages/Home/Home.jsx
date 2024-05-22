import React, { useState } from "react";
import data from "../../data/sampleData";
import Filters from "../../components/Filters";
import Table from "../../components/Table";

const Home = () => {
	const [filters, setFilters] = useState({});

	const handleFilterChange = (filterName, value) => {
		setFilters({ ...filters, [filterName]: value });
	};

	const filteredData = data.filter((item) => {
		return Object.keys(filters).every((filterName) => {
			if (!filters[filterName]) return true;
			return item[filterName] === filters[filterName];
		});
	});

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold mb-4">Data Table with Filters</h1>
			<Filters
				data={data}
				filters={filters}
				onFilterChange={handleFilterChange}
			/>
			<Table data={filteredData} />
		</div>
	);
};

export default Home;
