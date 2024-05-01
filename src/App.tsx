import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Deposit from './pages/Deposit';
import Saving from './pages/Saving';
import Stock from './pages/Stock';
import Coin from './pages/Coin';
import Header from './pages/Header';
import Login from './pages/Login';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path='/main' element={<Main/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/deposit' element={<Deposit/>}></Route>
                <Route path='/saving' element={<Saving/>}></Route>
                <Route path='/stock' element={<Stock/>}></Route>
                <Route path='/coin' element={<Coin/>}></Route>
                <Route path='*' element={<Navigate replace to="/login"/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
