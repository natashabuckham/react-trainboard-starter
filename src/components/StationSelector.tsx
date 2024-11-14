import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormSelect from 'react-bootstrap/FormSelect';

const StationSelector: React.FC = () => {
    const [originStation, setOriginStation] = useState('');

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setOriginStation(event.target.value);
    };
    
    useEffect(() => {
        console.log(originStation);
    }, [originStation]);

    return (
        <Form.Select aria-label = "Departure station" value = { originStation } onChange = { handleSelectChange }>
            <option>Open menu</option>
            <option value = "KGX">Kings Cross</option>
            <option value = "EDB">Edinburgh</option>
        </Form.Select>

    // dropdown list 1
    // dropdown list 2

    // if same station is selected, API returns 400 with error message: "Departure station cannot be the same as arrival station"
    );
};

export default StationSelector;