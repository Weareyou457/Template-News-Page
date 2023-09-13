// import logo from './logo.svg';
import './App.css'
import Header from './COMPONENT/Header';
import Navigation from './COMPONENT/Navigation';
import TopbarStart from './COMPONENT/TopbarStart';

import Sidebar from './Sidebar/Sidebar';
import Popularpost from './Sidebar/Popularpost';
import Footer from './COMPONENT/Footer';

import NewPage from './NewPage/NewPage';

function App() {
  return (
    <>
      <div className="centre">
        <Header />
        <TopbarStart />
        <Navigation />
        <div className="display">
          <div>
            <NewPage/>
          </div>

          <div className='display-1'>
            <Sidebar />
            <Popularpost />
          </div>
        </div>
        <div>
        <Footer/>
        </div>
      </div>

    </>
  );
}


export default App;
