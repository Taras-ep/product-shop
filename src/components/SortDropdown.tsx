import React from "react";

function SortDropdown() {
    return (
        <div>
            <span>
                Sort:
                <select title="Sort" name="sort">
                    <option>
                        Alphabetic
                    </option>
                    <option>
                        By count
                    </option>
                </select>
            </span>
        </div>
    )
}

export default SortDropdown;