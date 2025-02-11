import './StatusBar.css';

interface StatusBarProps {
    rowCount: number;
}

export default function StatusBar({ rowCount = 0 }: StatusBarProps) {
    return (
        <div className="status-bar" role="status" aria-live="polite">
            <div>Rows: {rowCount.toLocaleString()}</div>
        </div>
    )
}
