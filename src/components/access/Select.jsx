import React from 'react';

const Select = ({data = [], item, setItem}) => {
  return (
    <select value={item} onChange={(e)=>setItem(e.target.value)}>
      <option value="0">Seleccione</option>
      {!data ? null : 
        data.map(
            dt => <option value={dt._id}>{dt.licensePlate}</option>
        )
      }
    </select>
  );
}

export default Select;
