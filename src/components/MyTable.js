import React from "react";
import './MyTable.css';


const MyTable = (props) => {
  return (
    <div>

<table className="table">
  <thead>
    <tr>
      <th className="tableEdit" scope="col">Day</th>
      <th className="tableEdit" scope="col">Name</th>
      <th className="tableEdit" scope="col">Clock In </th>
      <th className="tableEdit" scope="col">Clock Out</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th className="tableEdit" scope="row">{props.day}</th>
      <td className="tableEdit">Eric Lam</td>
      <td className="tableEdit">{props.clockIn}</td>
      <td className="tableEdit">{props.clockOut}</td>
    </tr>
    
    
  </tbody>
</table>
    </div>
    
  );
  
};

export default MyTable;
