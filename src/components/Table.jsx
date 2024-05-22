import React from "react";

const Table = ({ data }) => {
	//! If there is no data, display a message indicating no data is available
	if (!data.length) {
		return <div>No data available</div>;
	}

	//! Collect all unique keys from the data array
	const allKeys = Array.from(
		data.reduce((keys, item) => {
			Object.keys(item).forEach((key) => keys.add(key));
			return keys;
		}, new Set())
	);

	return (
		<table className="min-w-full bg-white border border-gray-200">
			<thead>
				<tr>
					{allKeys.map((key) => (
						<th key={key} className="py-2 px-4 border-b border-r">
							{key}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id} className="hover:bg-gray-100">
						{allKeys.map((key) => (
							<td key={key} className="py-2 px-4 border-b border-r">
								{/* Display the value for each key, or an empty string if undefined */}
								{item[key] !== undefined ? item[key] : ""}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
