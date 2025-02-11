# SQL Query Viewer

Explore here https://sql-query-viewer.netlify.app/

### App Summary
- Tabbed layout to allow editing and running multiple queries
- Switch between tabs anytime without losing state
- Show column headers and row numbers
- Results list is virualised. can handle huge set of data
- Sticky column headers at the top and row numbers at the left
- Hotkey (Cmd + Enter) to run query
- Autofocus on query editor on switching tabs
- Status bar at the bottom to show number of rows (can be extended to include more info) 


### External liraries used
- **react**: UI library
- **@tanstack/react-virtual**: used for virtualising the list of rows rendered. helpful to keep UI sleek for large payloads.


### What more can be done?
- Handle objects and arrays better (maybe use table layout)
- Column-wise UI virtualization for cases when number of columns are huge
- column width resizing
- sorting and filtering on the data
- if the data can come in chunks then maybe implement an infinite scroll for the query results
- selecting a row and then copy it (maybe multiple rows too)

### App performance (on hosted website)
**Page load (using devtools Performance tab)** 
- Largest Contentful Paint (LCP): 0.16s
- Cumulative Layout Shift (CLS): 0
- Interaction to Next Paint (INP): 16 ms

**Page load (using lighthouse)** 
- Performance score: 100
- Accessibility score: 89
- Best Practices: 100
- SEO: 90

Check [lighthouse score screenshot](https://ibb.co/DgW2D0fW)

**After interaction (using devtools Performance tab)** - switching between tabs, run query, scroll through data. switch tabs and run query again
- Interaction to Next Paint (INP): 25 ms
- Cumulative Layout Shift (CLS): 0
