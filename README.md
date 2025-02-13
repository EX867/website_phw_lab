Created with React.

## 명령어

### 테스트 방법
`npm start`

### 웹 적용 방법
```
git add .
git commit -m "~~~"
git push
```

## 페이지 구조

```
/ : 홈 화면
/news : 뉴스 전체보기
/publications : 논문 전체보기
```

## 파일 구조

```
├── /public
│   ├── /assets : 이미지 리소스 파일들
│   │   └── **/images**
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
│
├── /src
│   ├── /components
│   │   ├── /(컴포넌트명)
│   │   │   ├── 컴포넌트명.jsx : 컴포넌트 코드
│   │   │   └── style.css : 해당 컴포넌트에 적용되는 css 코드
│   │   ├── **/content** : 뉴스, 멤버, 논문 데이터
│   │   │   ├── news.json
│   │   │   ├── people.json
│   │   │   └── publications.json
│   │   ├── /icons : 임베딩 된 아이콘 리소스들 (몇개없음)
│   │   ├── **/screens**
│   │   │   ├── PageFrame.jsx : 홈페이지의 변하지 않는 테두리 부분
│   │   │   ├── PageHome.jsx : / (홈 화면)의 내부 (배너 이미지와 그 아래)
│   │   │   ├── PageNews.jsx : /news
│   │   │   ├── PagePublications.jsx : /publications
│   │   │   └── **style.css** : 컴포넌트를 제외한 모든 요소 스타일 정의
│   │   ├── index.jsx : 리액트 루트 노드
│   │   ├── **style_base.css** : 태그들의 기본 스타일 정의
│   │   └── styleguide.css : tailwind 적용하다가 미처 못하고 남아있는 커스텀 색깔 파일
├── .gitignore
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```