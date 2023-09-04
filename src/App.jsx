import { useEffect, useState } from 'react';
import { ProductProvider } from './components/ProudctContext';
import useProductContext from './hooks/useProductContext';
import axios from 'axios';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Account from './pages/Account';
import Admin from './pages/Admin';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

// 路由權限名稱設置，可能不會是以下，用其他不會讓使用者知道的名稱代表
const permission = {
    User: 'User',
    Admin: 'Admin',
};

function App() {
    const user = {
        isLogin: false,
        permission: ['User'], // 登入時紀錄是什麼權限種類
    };

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route element={<ProtectedRoute user={user} Permission={[permission.User, permission.Admin]} />}>
                    {/* Permission = 代表擁有  User 會員，Admin 使用者都可以訪問 */}
                    <Route path='/account' element={<Account />}></Route>
                </Route>
                <Route element={<ProtectedRoute user={user} Permission={[permission.Admin]} />}>
                    {/* Permission = 代表只有 Admin 使用者可以訪問 */}
                    <Route path='/admin' element={<Admin />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;

// function App({ type }) {
//     // const [data, setData] = useState([]);
//     // useEffect(() => {
//     //     (async () => {
//     //         try {
//     //             const result = await axios.get('data.json');
//     //             console.log(result.data);
//     //             setData(result.data);
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     })();
//     // }, []);

//     return <div></div>;
// }
