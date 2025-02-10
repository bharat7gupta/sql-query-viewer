import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { isMac } from '../../utils/common';

import './QueryEditor.css';

interface QueryEditorProps {
    onRun: () => void;
}

export default function QueryEditor({ onRun }: QueryEditorProps) {
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
        <div>
            <textarea
                rows={8}
                className='query-editor-field'
                placeholder={`SQL Query here... Press (${runHotKey}) to run`}
                value={query}
                onChange={handleQueryChange}
                onKeyDown={handleKeyDown}
            />
            <div className='actions'>
                <button
                    type='button'
                    onClick={onRun}
                    className='query-run'
                    disabled={runDisabled}
                >
                    Run
                </button>
            </div>
        </div>
    )
}
