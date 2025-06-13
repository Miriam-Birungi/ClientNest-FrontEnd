import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import SupportedPlatforms from './components/sections/SupportedPlatforms'
import Footer from './components/layout/Footer'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'
import './App.css'

function AppContent() {
  const location = useLocation();
  const hideHeaderFooter = ['/signup', '/login', '/forgot-password'].includes(location.pathname);
  return (
    <div className="App">
      {!hideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              <SupportedPlatforms />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
