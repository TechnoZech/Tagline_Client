import React from "react";

const Table = ({ data }) => {
	if (!data.length) {
		return <div>No data available</div>;
	}

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
							{key.charAt(0).toUpperCase() + key.slice(1)}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id} className="hover:bg-gray-100">
						{allKeys.map((key) => (
							<td key={key} className="py-2 px-4 border-b border-r">
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
