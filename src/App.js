import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Triage from './component/Triage';
import Brings from './component/Brings';
import Content from './component/Content';
import How from './component/How';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App h-[2000px] bg-white mx-[15px]">
      <Header />
      <Triage />
      <Brings />
      <Content />
      <How />
      <Footer />
    </div>
  );
}

export default App;
