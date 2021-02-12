import React from "react";
import './Table.css';
const Table = ({counteries}) => {
    return (
      
            <div className="table">
                {counteries.map(({ country, cases }) => (
                    
                    <tr>
                        <td>{country}</td>
                        <td><strong>{cases}</strong></td>
                      

                    </tr>
                ))}
            </div>
       
    )
}
export default Table;