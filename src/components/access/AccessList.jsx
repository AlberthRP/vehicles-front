import axios from "axios";
import React, { useEffect, useState } from "react";
import { THeader } from "./Table/THeader";
import { TRows } from "./Table/TRows";

const AccessList = () => {
  const [allAccess, setAllAccess] = useState([]);
  const [rows, setRows] = useState([]);
  const [field, setField] = useState("driver");
  const [toEdit, setToEdit] = useState(null);

  const url = "http://localhost:4000/api";

  const handleSearch = (value, fld) => {
    const newData = allAccess.filter((dt) => {
      return dt[fld].toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setRows(newData);
  };

  const handleDelete = async (id) => {
    const { status } = await axios.delete(`${url}/${id}`);
    if (status == 200) alert("Registro eliminado! ... ");
  };

  useEffect(() => {
    const getAccess = async () => {
      const { data } = await axios.get("http://localhost:4000/api/access");
      console.log(data);
      setAllAccess(!data ? [] : data);
    };
    getAccess();
  }, [toEdit]);

  return (
    <div className="container">
      <h1>Acceso de Vehiculos</h1>

      <div className="d-md-flex col-md-12 ">
        <div className="col-md-2 me-3">
          <label className="form-label">Campo:</label>
          <select name="fields" className="form-control" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="driver">Conductor</option>
            <option value="dateTime">Fecha</option>
            <option value="licensePlate">Placa</option>
          </select>
        </div>

        <div className="col-md-8 me-3">
          <label className="form-label">Buscar:</label>
          <input type="text" className="form-control" onChange={(e) => handleSearch(e.target.value, field)} />
        </div>
        <div className="col-md-2 d-flex">
          <button type="button" className="btn btn-primary">
            Nuevo
          </button>
        </div>
      </div>
      <div className="py-2 ">
        <table className="table table-success table-striped">
          <thead>
            <THeader />
          </thead>
          <tbody>{!rows ? null : rows.map((d) => <TRows row={d} handleDelete={handleDelete} setToEdit={setToEdit} />)}</tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessList;
