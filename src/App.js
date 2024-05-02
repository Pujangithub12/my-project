import Header from './components/Header'
import Balance from './components/Balance';
import IncomeExpences from './components/IncomeExpences';
import TransactionLists from './components/TransactionLists';
import AddTransaction from './AddTransaction';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpences />
        <TransactionLists />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
