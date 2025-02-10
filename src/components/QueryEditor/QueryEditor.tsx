import './QueryEditor.css';

interface QueryEditorProps {
    onRun: () => void;
}

export default function QueryEditor({ onRun }: QueryEditorProps) {
    return (
        <div>
            <textarea rows={8} className='query-editor-field' placeholder='SQL Query here...'></textarea>
            <div className='actions'>
                <button type='button' onClick={onRun} className='query-run'>Run</button>
            </div>
        </div>
    )
}
