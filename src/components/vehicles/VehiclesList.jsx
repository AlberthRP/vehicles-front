import axios from "axios";
import React, { useEffect, useState } from "react";
import { TRows } from "./Table/TRows";
import { THeader } from "./Table/THeader";
import { Link } from "react-router-dom";

const VehiclesList = () => {
  const [allVehicles, setAllVehicles] = useState([]);
  const [rows, setRows] = useState([]);
  const [field, setField] = useState("licensePlate");
  const [toEdit, setToEdit] = useState(null);

  const url = "http://localhost:4000/api/vehicles";

  const handleSearch = (value, fld) => {
    const newData = allVehicles.filter((dt) => {
      return dt[fld].toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setRows(newData);
  };

  const handleCreate = async () => {
    const { status } = await axios.post(`${url}`);
    if (status == 200) alert("Registro Creado! ... ");
  };

  const handleUpdate = async (id) => {
    const { status } = await axios.put(`${url}/${id}`);
    if (status == 200) alert("Registro Actualizado! ... ");
  };

  const handleDelete = async (id) => {
    const { status } = await axios.delete(`${url}/${id}`);
    if (status == 200) alert("Registro eliminado! ... ");
  };

  useEffect(() => {
    const getVehicles = async () => {
      const { data } = await axios.get(`${url}`);
      setAllVehicles(!data ? [] : data);
      setRows(!data ? [] : data);
    };
    getVehicles();
  }, [toEdit]);

  return (
    <div className="container">
      <h1>Lista de Vehiculos</h1>
      <div className="d-md-flex col-md-12 ">
        <div className="col-md-2 me-3">
          <label className="form-label">Campo:</label>
          <select name="fields" className="form-control" value={field} onChange={(e) => setField(e.target.value)}>
            <option value="brand">Marca</option>
            <option value="model">Modelo</option>
            <option value="licensePlate">Placa</option>
          </select>
        </div>

        <div className="col-md-8 me-3">
          <label className="form-label">Buscar:</label>
          <input type="text" className="form-control" onChange={(e) => handleSearch(e.target.value, field)} />
        </div>
        <div className="col-md-2 d-flex row justify-content-center ">
          <Link to={'/vehicles/create'} className="btn btn-primary col-auto px-4  row align-items-center">
            Nuevo
          </Link>
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

export default VehiclesList;
