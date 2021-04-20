import React from "react";

function Table({ countries }) {
  return (
    <div>
      <div className="table">
        {countries.map(({ country, cases }) => (
          <tr>
            <td>{country}</td>
            <td>{cases}</td>
          </tr>
        ))}
      </div>
    </div>
  );
}

export default Table;
