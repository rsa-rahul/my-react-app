import Home from './components/Home';
import UsernameForm from './components/UsernameForm';
import AfterUsername from './components/AfterUsername';
import QuestionForm from './components/QuestionForm';
import Result from './components/Result';
import FailedPage from './components/FailedPage';
import CurrencyForm from './components/currencyform';
import ThankYou from './components/ThankYou';
import './App.css';


// Update your import statement for Switch
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ...

// Use Routes instead of Switch in your Router component
function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/usernameform" element={<UsernameForm/>} />
        <Route path="/afterusername" element={<AfterUsername/>} />
        <Route path="/questionForm" element={<QuestionForm/>} />
        <Route path="/result" element={<Result />} />
        <Route path="/failedpage" element={<FailedPage />} />
        <Route path="/currencyform" element={<CurrencyForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
