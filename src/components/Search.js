import React from "react";
import "./Datasort.css";

const Search = ({ change }) => {
    return (
        <div>
            <div className="searchBox">
                <input type="search" className="search" placeholder="Find Member" onChange={change} />
            </div>
        </div>
    )
}
export default Search