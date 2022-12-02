# Heuron 웹 프론트엔드 과제

## Overview

원격 데이터 가공 및 이미지 갤러리 Canvas API로 구현

## 개발 환경

- create-react-app
- react-router-dom : url 관리
- styled-component : css-in-js
- react-query: data fetching

## 실행

```
npm run start
```

or

```
yarn start
```

## 필수 요구사항

- [ ] 페이지 구성의 요구사항은 최대한 만족해야 합니다.

<details>
<summary>공통</summary>
<div markdown="1">
  <input type="checkbox"/> 모든 페이지 이동은 새 탭이나 새 창이 아닌 페이지 전환입니다.<br />
  <input type="checkbox" /> 모든 페이지는 별도로 URL 이 부여되어야 하며, 브라우저 입력창에 URL 을 직접 입력해도 페이지에 접근이 가능해야 합니다.<br />
  <input type="checkbox" /> API 호출 시 로딩 표시가 나타나야 하며,응답이 완료되었을 때 로딩표시가 사라져야 합니다.<br />
  <input type="checkbox" /> API 호출 실패 등 API 관련 모든 에러는 발생시 예외 처리되며, 사용자의 액션을 방해하지 않아야 합니다.
</div>
</details>

<details>
<summary>목록화면</summary>
<div markdown="1">
  <input type="checkbox" /> Lorem Picsum - API (https://picsum.photos/v2/list)를 활용해서 목록 화면을 구성합니다.<br />
  <input type="checkbox" /> 응답 받은 데이터 목록으로 테이블 화면을 작성하며, 그 중 썸네일 이미지를 테이블에 표시합니다.
</div>
</details>

<details>
<summary>상세화면</summary>
<div markdown="1">
  <input type="checkbox" /> Lorem Picsum - API (https://picsum.photos/v2/list)를 활용해서 상세 화면 – 이미지 갤러리를 구성합니다.
  <input type="checkbox" /> 동일한 API 로 목록 화면과 상세 화면을 구현하기 때문에 적절한 JSON 데이터의 가공이 필요합니다.
  <input type="checkbox" /> 불러온 이미지 목록 중에 Canvas API 를 통해 1 개의 이미지만 표시되게끔 처리합니다.
  <input type="checkbox" /> 마우스 휠 이벤트에 따라 Canvas 에 이미지가 순차적으로 표시되어야 합니다.
  <input type="checkbox" /> 마우스 (왼쪽 클릭 + 드래그) 이벤트 발생 시 이미지 확대/축소가 되어야 합니다.
  <input type="checkbox" /> 마우스 (오른쪽 클릭 + 드래그) 이벤트 발생 시 이미지 회전이 되어야 합니다.
</div>
</details>

- [ ] TypeScript 를 사용해서 구현합니다.
- [ ] React 기반으로 프로젝트를 구성합니다. create-react-app 을 사용해도 관계없습니다.
- [ ] ES6 이상의 JavaScript 를 사용해서 구현해야 합니다.
- [ ] yarn start 또는 npm run start 명령어로 로컬 환경에서 실행이 가능해야 합니다.
- [ ] 프로젝트 구조, 실행 방법 등의 설명이 README.md 에 명시되어야 합니다.
- [ ] 특정 라이브러리를 사용했다면, 그 라이브러리 사용에 대한 이유도 명시가 같이 되어야 합니다.

## 선택사항

- [ ] Eslint, gitignore 등 협업을 위한 최소한의 설정들을 적용합니다.
- [ ] 테스트 환경을 작성합니다.
