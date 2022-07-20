import logo from './logo.svg';
import './App.css';
import WithPointlessComponents from './Components/WithPointlessComponents';
import WithExtraProps from './Components/WithExtraProps';
import Favaourite from './Components/Favaourite';
import Menu from './Components/Menu';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>Hello world happy</h1>
      <hr></hr>
      <Menu/>
      <hr></hr>
     
      <Favaourite/>
    </div>
  );
}
const PointLess=WithExtraProps(App)
export default PointLess;
