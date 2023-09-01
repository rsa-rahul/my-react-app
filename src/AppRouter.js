import UsernameForm from './components/UsernameForm';
import QuestionForm from './components/QuestionForm';
import Result from './components/Result';

// Update your import statement for Switch
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ...

// Use Routes instead of Switch in your Router component
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameForm />} />
        <Route path="/questionForm" component={QuestionForm} />
        {/* Add other routes for different pages */}
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
