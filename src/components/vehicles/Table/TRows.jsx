import React from "react";
import { Link } from "react-router-dom";

export const TRows = ({ row, handleDelete, setToEdit }) => {

  const convDate = (date) => {
    const descMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const nDate = new Date(date);
    return nDate.getUTCDate() + "-" + descMonth[nDate.getUTCMonth()] + "-" + nDate.getFullYear() +' ' + nDate.getHours() + ":" + nDate.getMinutes();
  };

  const handleClick = () => {
    if(window.confirm("Eliminará este registro, presione SI para continuar") == true)
      handleDelete(row._id)
      setToEdit(false)
  }

  return (
    <>
      {!row ? null : (
        <tr>
          <td>{row.brand}</td>
          <td>{row.model}</td>
          <td>{row.color}</td>
          <td>{
            <Link to={'/vehicles/edit/:id'} onClick={setToEdit(row)} ></Link> 
            }
          </td>
          <td>{convDate(row.createdAt)}</td>
          <td>
            <button 
              onClick={handleClick}
              className="btn btn-danger">
              Eliminar
            </button></td>
        </tr>
      )}
    </>
  );
};
