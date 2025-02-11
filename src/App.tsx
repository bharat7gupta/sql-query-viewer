import { Ref, RefObject, useRef } from 'react';
import TabsContainer, { Tab } from './components/common/TabsContainer/TabsContainer';
import QueryWindow from './components/QueryWindow/QueryWindow';
import TabPanel from './components/common/TabPanel/TabPanel';

import './App.css';

export interface QueryTab extends Tab {
  dataEntity: string;
  inputRef?: Ref<HTMLElement>;
}

function App() {
  const queryTabs: QueryTab[] = [
    {
      id: 'uuid-1',
      name: 'Query Window 1',
      dataEntity: 'customers',
      inputRef: useRef<HTMLElement>(null),
    },
    {
      id: 'uuid-2',
      name: 'Query Window 2',
      dataEntity: 'products',
      inputRef: useRef<HTMLElement>(null),
    },
    {
      id: 'uuid-3',
      name: 'Query Window 3',
      dataEntity: 'orders',
      inputRef: useRef<HTMLElement>(null),
    }
  ];

  const onActive = (tab: Tab) => {
    const focusElement = (tab as QueryTab).inputRef as RefObject<HTMLElement>;
    focusElement?.current.focus();
  };

  return (
    <div className='app-container'>
      <h2 className='app-header'>SQL Query Viewer</h2>
      <TabsContainer tabs={queryTabs} onActive={onActive}>
        {queryTabs.map(tab => (
          <TabPanel key={tab.id} value={tab.id}>
            <QueryWindow inputRef={tab.inputRef} dataEntity={tab.dataEntity} />
          </TabPanel>
        ))}
      </TabsContainer>
    </div>
  )
}

export default App;
