import React from "react";
import Switch from "react-switch";

const Filters = ({ data, filters, onFilterChange }) => {
	// Exclude specific fields such as 'id' and 'name'
	const excludedKeys = new Set(["id", "name"]);

	// Get all unique keys from the data, excluding the specified keys
	const allKeys = Array.from(new Set(data.flatMap(Object.keys))).filter(
		(key) => !excludedKeys.has(key)
	);

	const getUniqueValues = (field) => {
		return [...new Set(data.map((item) => item[field]).filter(Boolean))];
	};

	const handleSwitchChange = (filterName, value) => {
		onFilterChange(filterName, value ? value : "");
	};

	return (
		<div className="grid grid-cols-4 gap-4 mb-4">
			{allKeys.map((filterName) => (
				<div key={filterName}>
					<label className="block font-medium">
						{filterName.charAt(0).toUpperCase() + filterName.slice(1)}
					</label>
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
