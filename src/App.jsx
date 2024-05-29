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
        <Route path="/student-detail" element={<StudentDetails />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/students" element={<Students />} />
        <Route path="/add-student" element={<AddNewStudent />} />
        
      </Routes>
    </Router>
    </>
  )
}
export default App