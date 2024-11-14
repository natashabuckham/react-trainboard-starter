import React, { useEffect, useState } from 'react';
import { fetchStations } from '../helpers/ApiCallHelper';
import StationSelector from './StationSelector';

const Stations: React.FC = () => {

    const [allStations, setAllStations] = useState([]);

    useEffect(() => {
        fetchStations()
            .then((value) => console.log(value))
            .catch((err) => console.log(err))
            .finally(() => console.log('finally'));
    }, []);

    console.log('hello world');

    return (
        <div>
            Stations!
            { <StationSelector/> }
        </div>
    );
};

export default Stations;
