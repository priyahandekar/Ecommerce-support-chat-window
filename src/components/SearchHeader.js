import React from "react";

const SearchHeader = () => {
	return (
		<div className="search-container">
			<div className="search-title">Filter By Title/ Order ID</div>
			<input type="text" placeholder="Start typing to search" />
		</div>
	);
};

export default SearchHeader;
