import UsernameForm from './components/UsernameForm';
import QuestionForm from './components/QuestionForm';
import Result from './components/Result';
import FailedPage from './components/FailedPage';
import CurrencyForm from './components/currencyform';

// Update your import statement for Switch
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ...

// Use Routes instead of Switch in your Router component
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameForm />} />
        <Route path="/questionForm" element={<QuestionForm/>} />
        {/* Add other routes for different pages */}
        <Route path="/result" element={<Result />} />
        <Route path="/failedpage" element={<FailedPage />} />
        <Route path="/currencyform" element={<CurrencyForm />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
