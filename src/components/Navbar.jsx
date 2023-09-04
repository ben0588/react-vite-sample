import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>首頁</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>關於我</NavLink>
                </li>
                <li>
                    <NavLink to='/account'>帳戶</NavLink>
                </li>
                <li>
                    <NavLink to='/admin'>管理者</NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
