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
    name: "Demo User",
    roleId: 3,       // 관리자 권한 (화면 전부 접근 가능)
    dept: "IT팀",
    position: "Manager",
  },
  setUser: (userData) => set({ user: userData }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
