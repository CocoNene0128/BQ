import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import useUserStore from "./utils/useUserStore.jsx";
import {BASE_URL} from "./components/elements/constants/constants.js";
import {useEffect, useState} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Footer, Layout} from "./components/elements/layout/index.js";
import {ItemList, ItemOrderRequest, ItemOrderRequestList, ItemAdd} from "./components/pages/item/index.js";
import {ChangePass, Login, ManageUser, MyPage} from "./components/pages/member/index.js";
import CurrentStockWarehouse from "./components/pages/stock/CurrentStockWarehouse.jsx";
import StockInOutList from "./components/pages/stock/StockInOutList.jsx";
import CostStatics from "./components/pages/statistics/CostStatics.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import EmployeeItemStatics from "./components/pages/statistics/EmployeeItemStatics.jsx";

function App() {
    const setUser = useUserStore(state => state.setUser);
    const clearUser = useUserStore(state => state.clearUser);
    const user = useUserStore(state => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // ------------------------------
        // 🔒 기존 로그인 로직 (백엔드 연동용)
        // ------------------------------
        /*
        if (localStorage.getItem("isLoggedIn") === "true") {
            axios.post(BASE_URL + "/api/auth/auto-login", {}, {withCredentials: true})
                .then(() => axios.get(BASE_URL + "/api/users/me", {withCredentials: true}))
                .then(res => {
                    setUser(res.data)
                    localStorage.setItem("isLoggedIn", "true")
                })
                .catch(() => {
                    clearUser();
                    localStorage.setItem("isLoggedIn", "false")
                })
                .finally(() => setLoading(false));
        } else {
            setLoading(false);
        }
        */

        // ------------------------------
        // 🧩 시연용: 로그인 요청 비활성화
        // ------------------------------
        setLoading(false);
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <BrowserRouter>
            <Layout/>
            <Routes>
                {/* ----------------------------------------- */}
                {/* 기존 로그인 경로 (백엔드 필요) */}
                {/* ----------------------------------------- */}
                {/*
                <Route path="/login" element={user ? <Navigate to="/items" replace/> : <Login/>}/>
                <Route path="*" element={user ? <Navigate to="/items" replace/> : <Navigate to="/login" replace/>}/>
                */}

                {/* ----------------------------------------- */}
                {/* 🧩 시연용: 로그인 없이 모든 페이지 접근 가능 */}
                {/* ----------------------------------------- */}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/items" replace />} />

                {/* 회원 관련 페이지 */}
                {/* <Route path="/me" element={<PrivateRoute><MyPage/></PrivateRoute>}/> */}
                {/* <Route path="/me/pass" element={<PrivateRoute><ChangePass/></PrivateRoute>}/> */}
                {/* <Route path="/admin/users" element={<PrivateRoute minRoleId={3}><ManageUser/></PrivateRoute>}/> */}

                {/* 시연용 - PrivateRoute 제거 */}
                <Route path="/me" element={<MyPage />} />
                <Route path="/me/pass" element={<ChangePass />} />
                <Route path="/admin/users" element={<ManageUser />} />

                {/* 비품 관련 페이지 */}
                {/* <Route path="/items" element={<PrivateRoute><ItemList/></PrivateRoute>}/> */}
                {/* <Route path="/items/new" element={<PrivateRoute minRoleId={2}><ItemAdd/></PrivateRoute>}/> */}
                {/* <Route path="/items/order" element={<PrivateRoute minRoleId={2}><ItemOrderRequest/></PrivateRoute>}/> */}
                {/* <Route path="/items/orders" element={<PrivateRoute minRoleId={3}><ItemOrderRequestList/></PrivateRoute>}/> */}

                {/* 시연용 - PrivateRoute 제거 */}
                <Route path="/items" element={<ItemList />} />
                <Route path="/items/new" element={<ItemAdd />} />
                <Route path="/items/order" element={<ItemOrderRequest />} />
                <Route path="/items/orders" element={<ItemOrderRequestList />} />

                {/* 재고 관련 페이지 */}
                {/* <Route path="/stocks/wh" element={<PrivateRoute><CurrentStockWarehouse/></PrivateRoute>}/> */}
                {/* <Route path="/stocks/log" element={<PrivateRoute><StockInOutList/></PrivateRoute>}/> */}

                {/* 시연용 */}
                <Route path="/stocks/wh" element={<CurrentStockWarehouse />} />
                <Route path="/stocks/log" element={<StockInOutList />} />

                {/* 통계 관련 페이지 */}
                {/* <Route path="/stats/emp" element={<PrivateRoute minRoleId={2}><EmployeeItemStatics/></PrivateRoute>}/> */}
                {/* <Route path="/stats/cost" element={<PrivateRoute minRoleId={2}><CostStatics/></PrivateRoute>}/> */}

                {/* 시연용 */}
                <Route path="/stats/emp" element={<EmployeeItemStatics />} />
                <Route path="/stats/cost" element={<CostStatics />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
