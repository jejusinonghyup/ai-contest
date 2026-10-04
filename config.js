// ============================================================
//  제1회 제주시농협 AI 공모전 채점 시스템 — 공통 설정 (order.html, score.html 공용)
//  1) Firebase 콘솔 > 프로젝트 설정 > 웹 앱 의 값을 붙여 넣으세요.
//  2) SUPER_ADMINS 에 운영 총괄 구글 계정을 넣으세요.
//     (firestore.rules 의 YOUR_ADMIN@gmail.com 도 같은 주소로 바꿔야 합니다)
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyBPdDDUVCPdof_hd69HW20TgwlYMb7U-6o",
  authDomain: "ai-contest-bee1b.firebaseapp.com",
  projectId: "ai-contest-bee1b",
  storageBucket: "ai-contest-bee1b.firebasestorage.app",
  messagingSenderId: "626749343983",
  appId: "1:626749343983:web:df5aa8d25b3c115400331a"
};

// 항상 관리자 권한을 갖는 계정 (소문자로)
export const SUPER_ADMINS = [
  "nh901018-1@nonghyup.com"
];

// 부문 정의 (id는 영문 소문자 유지)
export const CATEGORIES = [
  { id: "idea", name: "아이디어" },
  { id: "gen",  name: "텍스트/이미지/음원/영상 생성" },
  { id: "prog", name: "AI 프로그램" }
];
