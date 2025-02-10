import { ReactNode, useContext } from "react";
import { TabsContext } from "../TabsContainer";

interface TabPanelProps {
    value: string;
    children: ReactNode | ReactNode[];
}

export default function TabPanel({ value, children }: TabPanelProps) {
    const selectedTabValue = useContext(TabsContext);

    return (
        <div className={selectedTabValue === value ? 'tab-show' : 'tab-hide'}>
            {children}
        </div>
    );
}
