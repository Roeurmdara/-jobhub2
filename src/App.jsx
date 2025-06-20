import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";

import Register from "./pages/Register";
import Forgetpassword from "./pages/Forgetpassword";
import Donelogin from "./pages/Donelogin";
import Checkemail from "./pages/Checkemail";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
import Help from "./pages/Help";
import MyProfile from "./pages/MyProfile";
import MyApplications from "./pages/MyApplications";
import Setdetail from "./pages/Setdetail";
import Messager from "./pages/Messager";
import Usedashbord from "./pages/Usedashbord";
import Findjob from './pages/Findjob';
import BrowseCompanies from "./pages/BrowseCompanies";
import Loading from "./pages/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
          <Route path="/help" element={<Help />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-applications" element={<MyApplications />} />
          <Route path="/messager" element={<Messager />} />
          <Route path="/user-dashboard" element={<Usedashbord />} />
          <Route path="/browse-companies" element={<BrowseCompanies />} />
         <Route path="/find-job" element={<Findjob />} />
          <Route path="/set-detail" element={<Setdetail />} />
        </Route>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Loading />} />
          
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/done-login" element={<Donelogin />} />
        <Route path="/check-email" element={<Checkemail />} />
        <Route path="/set-detail" element={<Setdetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
