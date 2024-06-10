import './App.css';
import Pagination from './Pagination';
import { useDispatch, useSelector } from "react-redux";

function App() {

  const {selectedPage} = useSelector(state => state.selectPage)

  return (
    <div className="App">
      <Pagination numberOfpages="25" selectedPage={selectedPage}></Pagination>
    </div>
  );
}

export default App;