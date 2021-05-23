import Header from './Header'
import './App.css';
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import Feed from './Feed'

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="app_body">
           <LeftSideBar />
           <Feed />
           <RightSideBar />
      </div>
    </div>
  );
}

export default App;
