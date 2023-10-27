import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dataInit = {
  brand: "",
  model: "",
  color: "",
  licensePlate: "",
  _id: null,
};

const VehicleAdmin = ({ handleCreate, handleUpdate, toEdit, setToEdit }) => {
  const [form, setForm] = useState(dataInit);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if (form._id === null) {
      handleCreate(form);
    } else {
      handleUpdate(form);
    }

    handleReset();
  };

  const handleReset = (e) => {
    setForm(dataInit);
    setToEdit(null);
  };

  useEffect(() => {
    if (toEdit) {
      setForm(toEdit);
    } else {
      setForm(dataInit);
    }
  }, [toEdit]);

  return (
    <div className="row justify-content-center d-flex">
      <div className="col-md-5 ">
        <div className="card card-body">
          <h3 className="text-center">Registro de Vehiculos </h3>
          <hr className="border mb-4" />
          <form onSubmit={hadleSubmit}>
            <div className="">
              <label className="form-label">Marca</label>
              <input type="text" name="brand" className="form-control" value={form.brand} onChange={handleChange} />
            </div>

            <div className="">
              <label className="form-label">Modelo</label>
              <input type="text" name="model" className="form-control" value={form.model} onChange={handleChange} />
            </div>

            <div className="">
              <label className="form-label">Colot</label>
              <input type="text" name="color" className="form-control" value={form.color} onChange={handleChange} />
            </div>

            <div className="">
              <label className="form-label">Placa</label>
              <input type="text" name="licensePlate" className="form-control" value={form.licensePlate} onChange={handleChange} />
            </div>

            <div className=" col-auto justify-content-center align-items-center d-flex pt-5">
              <Link to={"/vehicles"} className="btn btn-dark mx-2 col-4" onClick={handleReset}>
                Cancelar
              </Link>
              <button type="submit" className="btn btn-dark mx-2 col-4">
                Aceptar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VehicleAdmin;
