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
}

export default function TabsContainer({ tabs, children }: TabsContainerProps) {
    const [selectedTabValue, setSelectedTabValue] = useState(tabs[0].id);

    const handleTabHeaderClick = (tab: Tab) => {
        setSelectedTabValue(tab.id);
    };

    return (
        <TabsContext.Provider value={selectedTabValue}>
            <div className="tabs">
                {tabs.map(tab => (
                    <nav
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
