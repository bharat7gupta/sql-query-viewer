import { ReactNode, useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { DataRow, DataRowValue } from '../../types/results-data';

import './QueryResultsViewer.css';

interface QueryResultsViewerProps {
    data: DataRow[];
}

const ESTIMATED_ROW_HEIGHT = 34; // in pixel

export default function QueryResultsViewer({ data }: QueryResultsViewerProps) {
    const [colHeaders, setColHeaders] = useState<string[]>([]);
    const [rowNumberColWidth, setRowNumberColWidth] = useState<number>(0);
    const parentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!data || data.length === 0) {
            setColHeaders([]);
            return;
        }

        setColHeaders(Object.keys(data[0]));
    }, [data]);

    useEffect(() => {
        if (data.length < Math.pow(10, 3)) {
            setRowNumberColWidth(30);
        } else if (data.length < Math.pow(10, 6)) {
            setRowNumberColWidth(60);
        } else if (data.length < Math.pow(10, 9)) {
            setRowNumberColWidth(90);
        } else {
            setRowNumberColWidth(120);
        }
    }, [data.length])

    const virtualizer = useVirtualizer({
        count: data.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => ESTIMATED_ROW_HEIGHT,
    });

    if (!data || data.length === 0) {
        return null;
    }

    const renderCellData = (cellData: DataRowValue): ReactNode => {
        if (cellData === null || cellData === undefined) {
            return cellData;
        }
        else if (Array.isArray(cellData)) {
            if (typeof cellData[0] === 'object') {
                return JSON.stringify(cellData);
            } else {
                return cellData.join(', ');
            }
        }
        else if (typeof cellData === 'object') {
            return JSON.stringify(cellData);
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

    const virtualItems = virtualizer.getVirtualItems();
    const rowNumberStyles = {
        width: `${rowNumberColWidth}px`,
        minWidth: `${rowNumberColWidth}px`,
        maxWidth: `${rowNumberColWidth}px`,
    };

    return (
        <div className='query-results' ref={parentRef} role='table' aria-label='Query Results'>
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
                <div className='col-headers' role='header'>
                    <div className='row-number' style={rowNumberStyles}></div>
                    {colHeaders.map(header => (
                        <div key={header} className='col-header'>{header}</div>
                    ))}
                </div>
                {virtualItems.map((virtualRow) => (
                    <div key={virtualRow.index} className='data-row' style={{ transform: `translateY(${virtualRow?.start}px)` }}>
                        <div className='row-number' style={rowNumberStyles}>
                            {virtualRow.index + 1}
                        </div>
                        {colHeaders.map(colName => (
                            <div key={colName} className='data-cell'>
                                {renderCellData(data[virtualRow.index][colName])}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
