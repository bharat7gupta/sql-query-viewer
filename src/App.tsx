import TabsContainer, { Tab } from './components/common/TabsContainer/TabsContainer';
import QueryWindow from './components/QueryWindow/QueryWindow';

import './App.css';
import TabPanel from './components/common/TabPanel/TabPanel';

export interface QueryTab extends Tab {
  dataSource: string;
}

function App() {
  const queryTabs: QueryTab[] = [
    {
      id: 'uuid-1',
      name: 'Query Window 1',
      dataSource: 'customers.json',
    },
    {
      id: 'uuid-2',
      name: 'Query Window 2',
      dataSource: 'products.json',
    },
    {
      id: 'uuid-3',
      name: 'Query Window 3',
      dataSource: 'orders.json',
    }
  ];

  return (
    <div>
      <h2 className='app-header'>SQL Query Viewer</h2>
      <TabsContainer tabs={queryTabs}>
        {queryTabs.map(tab => (
          <TabPanel value={tab.id}>
            <QueryWindow dataSource={tab.dataSource} />
          </TabPanel>
        ))}
      </TabsContainer>
    </div>
  )
}

export default App;
