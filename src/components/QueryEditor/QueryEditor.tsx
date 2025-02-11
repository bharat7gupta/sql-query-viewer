import { ChangeEvent, KeyboardEvent, Ref, useState } from 'react';
import { isMac } from '../../utils/common';

import './QueryEditor.css';

interface QueryEditorProps {
    onRun: () => void;
    inputRef?: Ref<HTMLTextAreaElement>;
}

export default function QueryEditor({ onRun, inputRef }: QueryEditorProps) {
    const [query, setQuery] = useState('');

    const runDisabled = !query || query.trim().length === 0;
    const runHotKey = isMac() ? 'Cmd + Enter' : 'Ctrl + Enter';

    const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(event.target.value);
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if(event.metaKey && event.key === 'Enter' && !runDisabled) {
            onRun();
        }
    };

    return (
        <>
            <textarea
                ref={inputRef}
                rows={8}
                className='query-editor-field'
                placeholder={`SQL Query here... Press (${runHotKey}) to run`}
                value={query}
                onChange={handleQueryChange}
                onKeyDown={handleKeyDown}
                aria-label="SQL Query Input"
                aria-describedby="SQL query editor for user to enter SQL queries"
                autoFocus
            />
            <div className='actions'>
                <button
                    type='button'
                    onClick={onRun}
                    className='query-run'
                    disabled={runDisabled}
                    aria-label="Run SQL Query"
                    aria-disabled={runDisabled}
                >
                    Run
                </button>
            </div>
        </>
    )
}
