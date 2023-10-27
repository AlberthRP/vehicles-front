import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from './Select';

const dataInit = {
  driver: "",
  dateTime: "",
  mileage: 0,
  accessType: "",
  comments: "",
  vehicleId: null,
};

const AccessAdmin = () => {
  const [form, setForm] = useState(dataInit);
  const [vehicles, setVehicles] = useState([]);
  const [item, setItem] = useState(0);

  const handleSubmit = () => {};

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const handleReset = () => {};

  useEffect(() => {
    const getVehicles = async () =>{
      const {data}= await axios.get('http://localhost:4000/api/vehicles');
      console.log(data);
      setVehicles(!data ? [] : data);
    }
    getVehicles();
  }, []);

  return (
    <div className="container col-4">
      <div className="col-md-8">
        <form onSubmit={handleSubmit}>

          <Select data={vehicles} item={item} setItem={setItem} />

          <input
            type="text"
            name="driver"
            className=""
            placeholder="Nombre del Motorista"
            onChange={handleChange}
            value={form.driver}
            required
          />
          <input 
            type="date" 
            name="date" 
            className="" 
            placeholder="Fehca" 
            onChange={handleChange} 
            value={form.date} 
            required 
          />
          <input 
            type="number" 
            name="date" 
            className="" 
            min={0}
            placeholder="Fehca" 
            onChange={handleChange} 
            value={form.date} 
            required 
          />

          <select value={form.accessType} onChange={handleChange} name="accessType" >
            <option value="Entrada">Entrada</option>
            <option value="Salida">Salida</option>
          </select>
          
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpiar" onClick={handleReset} />
        </form>
      </div>
    </div>
  );
};

export default AccessAdmin;
