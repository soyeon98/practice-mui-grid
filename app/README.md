
리액트 실무용 기본 구조

src/
 ├── assets/        # 이미지, 아이콘, 폰트 등 정적 리소스
 ├── components/    # 재사용 가능한 UI 컴포넌트 (버튼, 카드, 모달 등)
 ├── layouts/       # 페이지 레이아웃 (헤더/사이드바/푸터를 포함한 큰 틀)
 ├── pages/         # 실제 라우트 단위 페이지들 (Home, Login, Dashboard 등)
 ├── routes/        # 라우팅 설정 (React Router 설정 파일)
 ├── sections/      # 특정 페이지 안에서만 쓰이는 컴포넌트 묶음
 ├── services/      # API 호출, axios/fetch 등
 ├── store/         # 전역 상태 관리 (Redux, Zustand, Context API 등)
 ├── theme/         # 색상, 폰트, 라이트/다크모드 같은 스타일 설정
 ├── utils/         # 유틸 함수들
 ├── App.js
 └── main.js (또는 index.js)

1. 레이아웃 설계
	layouts/DefaultLayout.js 같은 전체 페이지 틀을 먼저 잡기
    Header, Sidebar, Footer 등 공통 UI를 배치
    Outlet을 넣어서 각 페이지 내용이 들어갈 자리 표시

2. 페이지 생성
    pages/ 폴더에 각 URL에 해당하는 페이지 컴포넌트를 만들기
    페이지 내부는 **sections/ components/**를 조합해서 내용 구성
    URL 단위 화면 관리
    말 그대로 페이지 단위 필요한 컴포넌트나 섹션을 페이지마다 넣어줌

3. 섹션/컴포넌트 구성
    sections/ 폴더: 페이지 안에서만 쓰이는 UI 블록
    예: DashboardSection, UserStatsSection
    화면 안의 작은 블록

4. 라우트 연결
    routes/index.js에서 path와 레이아웃을 지정

보통 하나의 레이아웃에 하나의 outlet 존재
페이지에서 해당 페이지에 들어갈 섹션이나 컴포넌트를 배치하고 라우트에 연결

1. Grid의 구조
    1. Container
        Grid의 부모 역할
        내부 Grid Item들을 정렬하고 간격(spacing) 관리
        <Grid container spacing={2}>
        ...
        </Grid>

    2. Item
        Container안에서 실제 칸을 차지하는 단위
        너비(xs, sm, md, lg, xl)로 화면 크기에 따라 크키 조절
        <Grid item xs={12} sm={6}>
            <Card>내용</Card>
        </Grid>

2. 반응형 사이즈 속성
    xs, sm, md, lg, xl → 12등분 그리드 기준

    화면이 작으면(xs) : 12칸 → 한 줄 전체
    화면이 작은 이상(sm) : 6칸 → 한 줄에 2개
    화면이 중간 이상(md) : 4칸 → 한 줄에 3개
    <Grid item xs={12} sm={6} md={4}>
        <Card>Box</Card>
    </Grid>

3. spacing, align, justify
    spacing: 칸 사이 간격
    justifyContent: 가로 정렬 (flex-start, center, space-between)
    alignItems: 세로 정렬 (flex-start, center, stretch)

    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
        <Grid item xs={4}><Card>1</Card></Grid>
        <Grid item xs={4}><Card>2</Card></Grid>
    </Grid>

    <Box p={2}> p는 패딩
    숫자는 MUI spacing 단위를 의미
    MUI 기본 spacing: 1 = 8px
    p={2} → 2 * 8px = 16px padding 적용