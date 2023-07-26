import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
<div class="form-outline">
    <input type="number" id="typeNumber" class="form-control" />
    <label class="form-label" for="typeNumber">Budget: £{budget}</label>
</div>
    );
};
export default Budget;
