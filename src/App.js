import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import CalendarPick from './react-files/Calendar';
import Counter from './react-files/Counter';
import FilterList from './react-files/FilterList';
import Home from './react-files/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter-list" element={<FilterList />} />
        <Route path="/calendar" element={<CalendarPick />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>

      <button className="button-link">
        <Link to="/">Home</Link>
      </button>
      <button className="button-link">
        {" "}
        <Link to="/calendar">Calendar</Link>
      </button>
      <button className="button-link">
        {" "}
        <Link to="/counter">Counter</Link>
      </button>
      <button className="button-link">
        <Link to="/filter-list">Filter</Link>
      </button>
    </BrowserRouter>
  );
}

export default App;
