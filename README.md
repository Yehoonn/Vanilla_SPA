# 바닐라 자바스크립트 SPA

바닐라 자바스크립트로 간단한 SPA(Single Page Application)를 구현한 프로젝트입니다. `history.pushState`와 `popstate` 이벤트를 활용하여 클라이언트 사이드 라우팅을 처리합니다.

## 📌 프로젝트 개요

- **기술 스택**: HTML, CSS, JavaScript (Vanilla JS)
- **기능**:
  - 네비게이션을 통한 페이지 이동
  - 브라우저 뒤로 가기 및 앞으로 가기 지원
  - 간단한 상태 관리 (숫자 증가, 감소, 초기화 기능 포함)

## 📂 파일 구조

```
📂 프로젝트 루트
├── index.html  # 메인 HTML 파일
├── spa.js      # SPA 라우팅 및 렌더링 로직
└── README.md   # 프로젝트 설명
```

## 🚀 실행 방법

1. 프로젝트를 클론합니다.
   ```sh
   git clone https://github.com/Yehoonn/Vanilla_SPA.git
   ```
2. 프로젝트 폴더로 이동합니다.
   ```sh
   cd Vanilla_SPA
   ```
3. 브라우저에서 `index.html` 파일을 실행합니다.
   - Live Server를 사용하면 편리합니다.
   ```sh
   npx live-server
   ```

## 🔥 주요 기능 설명

### 1. 클라이언트 사이드 라우팅

- `history.pushState`를 이용하여 URL을 변경하고, `popstate` 이벤트를 활용하여 뒤로 가기 및 앞으로 가기 기능을 구현합니다.
- 네비게이션 링크 클릭 시 `event.preventDefault()`로 기본 동작을 막고 `goToPath()`를 호출하여 페이지를 변경합니다.

### 2. 동적 렌더링

- `pageRender(path)` 함수가 현재 경로에 맞는 컴포넌트를 `#app` 요소에 삽입합니다.
- `home`, `about`, `contact` 함수는 각 페이지의 HTML을 반환합니다.

### 3. 간단한 상태 관리 (숫자 증가/감소/초기화)

- `useNumberState()`를 사용하여 숫자 상태를 관리합니다.
- `getNumber()`, `setNumber(newState)`, `updateView()`를 통해 상태를 업데이트하고 화면에 반영합니다.
