import EqCards from '../EqCards/EqCards';
import Navbar from '../Navbar/Navbar'
import { ScrollToTop } from 'react-to-top'
import parentStyle from './App.module.scss';

function App() {

  return (
    <div className={parentStyle.App}>
      <Navbar/>
      <EqCards/>
      <ScrollToTop symbol={String.fromCodePoint(0x2191)} strokeWidth={4} symbolSize={40} bgColor={'rgb(2,8,32)'}/>
    </div>
  );
}

export default App;
