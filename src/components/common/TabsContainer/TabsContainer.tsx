import { ReactNode, useState } from "react";
import { TabsContext } from "./index";

import './TabsContainer.css';

export interface Tab {
    id: string;
    name: string;
}

interface TabsContainerProps {
    tabs: Tab[];
    children: ReactNode | ReactNode[];
    onActive: (tab: Tab) => void;
}

export default function TabsContainer({ tabs, children, onActive }: TabsContainerProps) {
    const [selectedTabValue, setSelectedTabValue] = useState(tabs[0].id);

    const handleTabHeaderClick = (tab: Tab) => {
        if (selectedTabValue !== tab.id) {
            setSelectedTabValue(tab.id);
            setTimeout(() => onActive(tab));
        }
    };

    return (
        <TabsContext.Provider value={selectedTabValue}>
            <div className="tabs" role="tablist" aria-label="Query tabs">
                {tabs.map(tab => (
                    <nav
                        key={tab.id}
                        className={`tab ${tab.id === selectedTabValue ? 'active' : ''}`}
                        onClick={() => handleTabHeaderClick(tab)}
                    >
                        {tab.name}
                    </nav>
                ))}
            </div>
            {children}
        </TabsContext.Provider>
    )
}
