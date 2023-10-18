import logo from './logo.svg';
import './App.css';
import Navbar from "./Component/navbar/navbar.jsx"
import Calendar from './Component/calendar/calendar';
import Form from './Component/Form/Form';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Calendar />
     <Form/>
    </div>
  );
}

export default App;
