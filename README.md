# 인사 관리 시스템

## Description

React framework를 이용해 back-end 팀과 협업하여 만든 인사 관리 프로젝트로써 팀원들과 커뮤니케이션 스킬을 기르고 React개발 역량을 키우는 것을 목표로 했습니다.
팀 노션(https://www.notion.so/4eb6f78fd45a4df0b192108a8c970316) 을 통해 api경로를 공유하고 진행하고 있는 부분을 체크하며 함께 프로젝트를 진행했습니다.

## Preview
#### 로그인 & 로그아웃
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108490225-d9acf480-72e5-11eb-9895-3782cb4288b9.gif">
</p>

#### 업무추가 & 업무수정 
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108550109-72b52d00-7331-11eb-8d5d-b5998c79d50a.gif">
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108550520-04bd3580-7332-11eb-9dc6-c317e4469f3b.gif">
</p>

#### 인사현황추가
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108552761-148a4900-7335-11eb-8f5e-20fb0d5dcf67.gif">
</p>

#### 성과수정
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108551142-dab84300-7332-11eb-9a49-e4eec80aed45.gif">
</p>

#### 페이지네이션
<p align="center">
  <img src="https://user-images.githubusercontent.com/71836751/108553069-85316580-7335-11eb-9b4f-5830a7f4a43c.gif">
</p>

## Contributors
- Frontend
  - 송보은
    - 로그인
    - 업무관리
    - 성과관리
    - 인사현황
    
  - 김다윤
    - 근태관리
    - 급여관리
    - 인적사항관리
    - 마이페이지
    
- Backend
  - 하주현
    - 로그인
    - 인사현황
    - 근태관리
    - 인적사항관리
  - 송예은
    - 업무관리
    - 성과관리
    - 급여관리
    - 마이페이지 

## Features

#### 업무관리, 성과관리
- axios로 서버로부터 데이터를 각각의 블록으로 업무 표시
- api로 데이터를 요청했을 때 서버의 응답이 늦을 때를 고려하여 Loading 중 임을 보여주는 화면 처리
- 날짜를 기준으로 현재 진행중인 업무와 그렇지 않은 업무를 ui로 구분 표시
- 업무명/ 직원이름터/ 부서 옵션으로 선택하여 각 옵션에 맞는 검색 결과 보여주기
- 사용자가 검색어를 아무것도 입력하지 않았을 경우 검색어 입력 요청 alert를 띄우고 return처리
- 추가 아이콘 클릭 시 추가 modal을 통해 추가할 업무명/부서/담당자/시작일자/종료일자를 input으로 받아 데이터 추가
- 각 업무 블록의 수정 버튼을 클릭하면 수정modal 수정할 업무명/부서/담당자/시작일자/종료일자를 input으로 받아 데이터 추가

#### 인사현황
- axios로 서버로부터 인사 발령 데이터를 테이블로 표시
- 발령 날짜를 기준으로 발령예정/완료 표시
- 추가 아이콘 클릭 시 추가 modal에서 사용자가 인사발령을 내릴 직원을 검색하고 직원 클릭 시 해당 직원의 데이터를 받아 발령 처리

#### 페이지네이션(공통)
- 서버로 부터 total page정보를 받아 화면에 표시하고, 사용자가 페이지 클릭 시 해당 페이지의 정보를 보여주기
- useEffect로 page정보가 바뀔 때마다 데이터를 불러오는 처리
- 사용자가 검색을 통해 검색 결과를 보여줄 때는 pagination이 안 나타나게 설정
  
#### Login
- JWT token이용해 서버에서 데이터를 불러올 때 마다 header에 token을 담아 인증하고 인증이 완료되면 해당 컴포넌트를 화면에 보여주기
- 사용자가 비로그인 시 url로 다른 페이지에 접근하는 것 방지
- 로그인 후 30분 뒤 자동으로 로그아웃 처리하고 초기화면(로그인화면)으로 이동


## Requirements

### Language
- Javascript
  
### Framework
- React
  
### Library
- Frontend
  - rodal
  - Axios
  - @material-ui/lab
  - react-icons



