import Navbar from "./components/Navbar";
import "./App.css";
import Loading from "./pages/Loading";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Forgetpassword from "./pages/Forgetpassword";
import Donelogin from "./pages/Donelogin";
import Checkemail from "./pages/checkemail";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import CompanyProfile from "./pages/CompanyProfile";
// import CompanyAosCard from "./components/CompanyAosCard";
import FindJob from "./pages/FindJob";
// import BrowseCompanies from "./pages/Search_Companies_Profile";
import JobListing from "./pages/JobListing";
function App() {
  return (
    <>
      <Navbar />
      <Loading />
      <Footer />
      <Register />
      <Forgetpassword />
      <Donelogin />
      <Checkemail />
      {/* <Sidebar/> */}
      <Profile />
      <CompanyProfile />
      <FindJob />
      {/* <BrowseCompanies /> */}
      <JobListing />
      {/* <CompanyAosCard /> */}
    </>
  );
}

export default App;
