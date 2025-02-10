import { useState } from 'react';
import { API_BASE_URL } from '../../constants';
import QueryEditor from '../QueryEditor/QueryEditor';
import QueryResultsViewer from '../QueryResultsViewer/QueryResultsViewer';
import { DataRow } from '../../types/results-data';

import './QueryWindow.css';

export default function QueryWindow() {
    const [data, setData] = useState<DataRow[]>([]);

    const handleQueryRun = () => {
        fetch(`${API_BASE_URL}/examples/northwind/data/json/customers.json`)
            .then(res => res.json())
            .then(data => setData(data));
    };

    return (
        <div>
            <QueryEditor onRun={handleQueryRun} />
            <QueryResultsViewer data={data} />
        </div>
    )
}