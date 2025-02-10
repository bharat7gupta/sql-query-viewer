import { useEffect, useState } from "react";
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

    const renderCellData = (cellData: DataRowValue) => {
        if (cellData === null || cellData === undefined) {
            return cellData;
        }
        else if (Array.isArray(cellData)) {
            return cellData.join(', ');
        }
        else if (typeof cellData === 'object') {
            return <span className='large-data-cell'>{JSON.stringify(cellData)}</span>;
        }
        else {
            return cellData;
        }
    }

    const gridStyles = { 
        gridTemplateColumns: `repeat(${colHeaders.length}, minmax(80px, auto))`
    };

    return (
        <div className='query-data' style={gridStyles}>
            <div className='col-headers'>
                {colHeaders.map(header => (
                    <div className='col-header' key={header}>{header}</div>
                ))}
            </div>
            <div className='data-container'>
                {data.map((row: DataRow, rowIndex: number) => (
                    <div key={rowIndex} className='data-row'>
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
