import Navbar from './components/Navbar'
import './App.css'
import Loading from './pages/Loading'
import Footer from './components/Footer'
import Register from './pages/Register'
import Forgetpassword from './pages/Forgetpassword'
import Donelogin from './pages/Donelogin'
import Checkemail from './pages/checkemail'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import CompanyProfile from './pages/CompanyProfile'


function App() {
  return (
    <>
      <Navbar/>
      <Loading/>
      <Footer/>
      <Register/>
      <Forgetpassword/>
      <Donelogin/>
      <Checkemail/>
      {/* <Sidebar/> */}
      <Profile/>
      <CompanyProfile/>
    </>
  )
}

export default App
