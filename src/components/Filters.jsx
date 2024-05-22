import React from "react";
import Switch from "react-switch";


const Filters = ({ data, filters, onFilterChange }) => {
	//! Exclude specific fields such as 'id'
	const excludedKeys = new Set(["id"]);

	//! Get all unique keys from the data, excluding the specified keys
	const allKeys = Array.from(new Set(data.flatMap(Object.keys))).filter(
		(key) => !excludedKeys.has(key)
	);

	//! Get unique values for a given field
	const getUniqueValues = (field) => {
		return [...new Set(data.map((item) => item[field]).filter(Boolean))];
	};

	//! Handle switch change
	const handleSwitchChange = (filterName, value) => {
		onFilterChange(filterName, value ? value : "");
	};

	//! Handle input change for name filter
	const handleInputChange = (e) => {
		onFilterChange("name", e.target.value);
	};

	return (
		<div className="grid grid-cols-4 gap-4 mb-4">
			{/* Input field for name filter */}
			<div>
				<label className="block font-medium">Name</label>
				<input
					type="text"
					value={filters.name}
					onChange={handleInputChange}
					className="mt-2 p-2 border border-gray-300 rounded"
				/>
			</div>
			{/* Switches for other filters */}
			{allKeys.map((filterName) => (
				<div key={filterName}>
					<label className="block font-medium">
						{filterName.charAt(0).toUpperCase() + filterName.slice(1)}
					</label>
					{/* Generate switches for unique values of each filter */}
					{getUniqueValues(filterName).map((value) => (
						<div key={value} className="flex items-center mb-2">
							<Switch
								onChange={(checked) =>
									handleSwitchChange(filterName, checked ? value : "")
								}
								checked={filters[filterName] === value}
							/>
							<span className="ml-2">{value}</span>
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Filters;
