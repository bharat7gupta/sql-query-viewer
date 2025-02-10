import { ReactNode, useEffect, useState } from 'react';
import { DataRow, DataRowValue } from '../../types/results-data';

import './QueryResultsViewer.css';

interface QueryResultsViewerProps {
    data: DataRow[];
}

export default function QueryResultsViewer({ data }: QueryResultsViewerProps) {
    const [colHeaders, setColHeaders] = useState<string[]>([]);

    useEffect(() => {
        if (!data || data.length === 0) {
            setColHeaders([]);
            return;
        }

        setColHeaders(Object.keys(data[0]));
    }, [data]);

    if (!data || data.length === 0) {
        return null;
    }

    const renderCellData = (cellData: DataRowValue): ReactNode => {
        if (cellData === null || cellData === undefined) {
            return cellData;
        }
        else if (Array.isArray(cellData)) {
            return cellData.map(data => renderCellData(data));
        }
        else if (typeof cellData === 'object') {
            return <div className='large-data-cell'>{JSON.stringify(cellData)}</div>;
        }
        else if (typeof cellData === 'boolean') {
            return `${cellData}`;
        }
        else {
            // for string and number
            // displaying dates as it is. since in the absence of a schema
            // we would never know if we need to trim down the time part or not
            return cellData;
        }
    }

    const gridStyles = { 
        gridTemplateColumns: `auto repeat(${colHeaders.length}, minmax(auto, 300px))`
    };

    return (
        <div className='query-data' style={gridStyles}>
            <div className='col-headers'>
                <div className='col-header'></div>
                {colHeaders.map(header => (
                    <div className='col-header' key={header}>{header}</div>
                ))}
            </div>
            <div className='data-container'>
                {data.map((row: DataRow, rowIndex: number) => (
                    <div key={rowIndex} className='data-row'>
                        <div key={rowIndex} className='data-cell row-number'>{rowIndex + 1}</div>
                        {colHeaders.map(colName => (
                            <div key={colName} className='data-cell'>
                                {renderCellData(row[colName])}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
