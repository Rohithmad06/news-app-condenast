import './App.css';
import TopNews from './screens/TopNews/TopNews';
import { Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/headlines" element={<TopNews />} />
        <Route
          path="*"
          element={<Navigate to="/headlines" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
