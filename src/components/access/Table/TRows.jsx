import React from "react";

export const TRows = ({ row }) => {
  const convDate = (date) => {
    const descMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const nDate = new Date(date);
    return nDate.getUTCDate() + "-" + descMonth[nDate.getUTCMonth()] + "-" + nDate.getFullYear();
  };

  const convTime = (date) => {
    const nDate = new Date(date);
    return nDate.getHours() + ":" + nDate.getMinutes();
  };

  return (
    <>
      {!row ? null : (
        <tr>
          <td>{convDate(row.driver)}</td>
          <td>{convTime(row.driver)}</td>
          <td>{row.driver}</td>
          <td>{row.mileage}</td>
          <td>{row.vehicleId}</td>
          <td>{row.accessType}</td>
        </tr>
      )}
    </>
  );
};
