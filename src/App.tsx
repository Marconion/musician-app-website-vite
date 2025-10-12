import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MusicianAppPage from "./components/MusicianAppPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AccountDeletion from "./components/AccountDeletion";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/musician-app" element={<MusicianAppPage />} />
          <Route path="/politika-privatnosti" element={<PrivacyPolicy />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
