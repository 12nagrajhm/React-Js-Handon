import IncDec from "./components/IncDec";
import Increment from "./components/Increment";
import Form from "./components/Form";
import AddTwoNumber from "./components/AddTwoNumbers";
import SubTwoNumbers from "./components/SubTwoNumbers";
import MulTwoNumbers from "./components/MulTwoNumbers";
import Calculator from "./components/Calculator";
import ParentComponent from "./components/ParentComponent";
import OddEvenCheck from "./components/OddEvenCheck";
import LoginForm from "./components/LoginForm";
import TodoApp from "./components/TodoApp";
import DivideTwoNumbers from "./components/DivideTwoNumbers";
import SimpleReact from "./components/SimpleReact";
//import Login from "./Projects/Login";
import LoginPage from "./project1/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./ReactRouter/About";
import Home from "./ReactRouter/Home";
import Login from "./ReactRouter/Login"

const App = () => {
  return (
    <Router>

      {/*<Increment />*/}
      {/*<IncDec />*/}
      {/*<Form />
      <AddTwoNumber />
      <SubTwoNumbers />
      <MulTwoNumbers/>*/}
      {/*<Calculator />*/}
      {/*<ParentComponent />
      <OddEvenCheck />
      <LoginForm />
      <TodoApp />
      <DivideTwoNumbers/>*/}
      {/*<SimpleReact />*/}
      {/*<Login/>*/}
      {/*<LoginPage/>*/}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Link</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

    </Router>
  );
};

export default App;
