import React, { useState } from "react";
import data from "../../data/sampleData";
import Filters from "../../components/Filters";
import Table from "../../components/Table";

const Home = () => {
	//! State to manage filters
	const [filters, setFilters] = useState({
		name: "",
		city: "",
		category: "",
		type: "",
		active: "",
	});

	//! Handle filter change
	const handleFilterChange = (filterName, value) => {
		// Update filters state with the new value for the specified filter
		setFilters({ ...filters, [filterName]: value });
	};

	//! Filter the data based on the active filters
	const filteredData = data.filter((item) => {
		return Object.keys(filters).every((filterName) => {
			// If filter value is empty, return true (no filtering)
			if (!filters[filterName]) return true;
			// For name filter, perform case-insensitive partial match
			if (filterName === "name") {
				return item[filterName]
					.toLowerCase()
					.includes(filters[filterName].toLowerCase());
			}
			// For other filters, perform exact match
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
