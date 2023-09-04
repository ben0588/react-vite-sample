import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ user, Permission }) => {
    // 進行登入判斷，登入狀態才可以進入對應的 子路由 (會員帳戶頁面)，否者返回首頁
    // return user.isLogin ? <Outlet /> : <Navigate to='/' />;

    // 設置的權限，如果 user 登入類型不包含就直接返回
    return user.permission.find((pre) => Permission.includes(pre)) ? <Outlet /> : <Navigate to='/' />;
};
export default ProtectedRoute;
