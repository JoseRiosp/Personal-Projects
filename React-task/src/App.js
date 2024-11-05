//import logo from './logo.svg';
import './App.css';

//import Father from './components/container/father';
import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterPage from './components/pure/forms/registerFormik';
import OptionalRender from './components/pure/optionalRender';
//import GreetingStyled from './components/pure/greetingStyled';
//import GreetFun from  "./components/pure/greetFun.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <img src={logo} className="App-logo" alt="logo" />*/}
        {/*Componente propio de jsx */}
       {/*<Greeting name="Elber"></Greeting>*/}
       {/*<GreetFun name="Elber"></GreetFun>*/}
       {/*<GreetingStyled name="José"></GreetingStyled>*/}
       {/* <Father></Father>*/}
        {/*<LoginFormik></LoginFormik>*/}
       {/*<TaskListComponent></TaskListComponent>*/}
       {/*<OptionalRender></OptionalRender>*/}
       <RegisterPage></RegisterPage>
      </header>
    </div>
  );
}

export default App;
