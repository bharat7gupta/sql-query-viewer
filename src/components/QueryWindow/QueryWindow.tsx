import { Ref, useState } from 'react';
import QueryEditor from '../QueryEditor/QueryEditor';
import QueryResultsViewer from '../QueryResultsViewer/QueryResultsViewer';
import { DataRow } from '../../types/results-data';

import './QueryWindow.css';
import { fetchQueryData } from '../../services/query-service';

interface QueryWindowProps {
    dataEntity: string;
    inputRef?: Ref<HTMLElement>;
}

export default function QueryWindow({ dataEntity, inputRef }: QueryWindowProps) {
    const [data, setData] = useState<DataRow[]>([]);

    const handleQueryRun = () => {
        fetchQueryData(dataEntity)
            .then(data => setData(data));
    };

    return (
        <>
            <QueryEditor
                onRun={handleQueryRun}
                inputRef={inputRef as unknown as Ref<HTMLTextAreaElement>}
            />
            <QueryResultsViewer data={data} />
        </>
    )
}