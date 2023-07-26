import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
  const {dispatch } = useContext(AppContext);

    const ChangeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-warning'> Currency {
      <select name="Currency" id="Currency" onChange={event=>ChangeCurrency(event.target.value)}>
        <option className='active' value="£">£ Uk</option>
        <option value="₹">₹ Ruppee</option>
        <option value="€">€ Europe</option>
        <option value="CAD">$ Dollar</option>
      </select>
      }	
    </div>
    );
};

export default ChangeCurrency;