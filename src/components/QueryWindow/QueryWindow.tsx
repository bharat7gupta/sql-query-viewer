import { useState } from 'react';
import { API_BASE_URL } from '../../constants';
import QueryEditor from '../QueryEditor/QueryEditor';
import QueryResultsViewer from '../QueryResultsViewer/QueryResultsViewer';
import { DataRow } from '../../types/results-data';

import './QueryWindow.css';

interface QueryWindowProps {
    dataSource: string;
}

export default function QueryWindow({ dataSource }: QueryWindowProps) {
    const [data, setData] = useState<DataRow[]>([]);

    const handleQueryRun = () => {
        fetch(`${API_BASE_URL}/examples/northwind/data/json/${dataSource}`)
            .then(res => res.json())
            .then(data => setData(data));
    };

    return (
        <>
            <QueryEditor onRun={handleQueryRun} />
            <QueryResultsViewer data={data} />
        </>
    )
}