# SQL Query Viewer

### App Summary
- Tabbed layout to allow editing and running multiple queries
- Switch between tabs anytime without losing state
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

### App performance

