import { ChangeEvent, useState } from 'react';
import './QueryEditor.css';

interface QueryEditorProps {
    onRun: () => void;
}

export default function QueryEditor({ onRun }: QueryEditorProps) {
    const [query, setQuery] = useState('');

    const handleQueryChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setQuery(event.target.value);
    };

    const runDisabled = !query || query.trim().length === 0;

    return (
        <div>
            <textarea
                rows={8}
                className='query-editor-field'
                placeholder='SQL Query here...'
                value={query}
                onChange={handleQueryChange}
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
