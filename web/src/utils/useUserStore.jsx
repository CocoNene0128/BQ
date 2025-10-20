// import {create} from "zustand/react";
//
// const useUserStore = create((set) => ({
//     user: null,
//     setUser: (userData) => set({user: userData}),
//     clearUser: () => set({user: null}),
// }))
//
// export default useUserStore;



// -----------------------------
// 🧩 시연용: 로그인 없이도 가짜 유저 데이터로 초기화
// -----------------------------
import { create } from "zustand/react";

const useUserStore = create((set) => ({
  user: {
    id: 0,
    empCode: "A001",
    empName: "Demo Admin",
    roleId: "3",
    roleName: "ADMIN",
    dept: "IT팀",
    position: "Manager",
  },
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
