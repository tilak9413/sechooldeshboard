import Dashboard from "./pages/Deshboard"
import StudentDetails from "./pages/Studentdetails"
import Teacher from "./pages/Teacher"
import Students from "./pages/Students"
import AddNewStudent from "./pages/AddNewStudent"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sliderbar from "./component/Sliderbar"
import Header from "./component/Header"
const App = () => {
  return (
    <>
      <Router>
        <Header/>
<Sliderbar/>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/StudentDetails" element={<StudentDetails />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/AddNewStudent" element={<AddNewStudent />} />
        
      </Routes>
    </Router>
    </>
  )
}
export default App