import { ReactNode, useContext } from "react";
import { TabsContext } from "../TabsContainer";

interface TabPanelProps {
    value: string;
    children: ReactNode | ReactNode[];
}

export default function TabPanel({ value, children }: TabPanelProps) {
    const selectedTabValue = useContext(TabsContext);
    let className;

    if (selectedTabValue !== value) {
        className = 'tab-hide';
    }

    return <div className={className}>{children}</div>;
}
