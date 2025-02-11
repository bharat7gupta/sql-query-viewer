import { Ref, useState } from 'react';
import QueryEditor from '../QueryEditor/QueryEditor';
import QueryResultsViewer from '../QueryResultsViewer/QueryResultsViewer';
import { DataRow } from '../../types/results-data';

import { fetchQueryData } from '../../services/query-service';
import StatusBar from './StatusBar';

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

            {!data || data.length === 0 ? null : <StatusBar rowCount={data.length} />}
        </>
    )
}