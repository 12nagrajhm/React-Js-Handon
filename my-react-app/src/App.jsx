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


const App = () => {
  return (
    <div>
      {/*<Increment />*/}
      {/*<IncDec />*/}
      {/*<Form />
      <AddTwoNumber />
      <SubTwoNumbers />
      <MulTwoNumbers/>*/}
      {/*<Calculator/>*/}
      <ParentComponent/>
      <OddEvenCheck/>
      <LoginForm/>
      

    </div>
  );
};

export default App;
