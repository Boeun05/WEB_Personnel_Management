import React from 'react';
import Table from '../../components/Table/Table';
import NumBox from './NumBox';
import {
  ON,
  OFF,
  ABSENCE,
  LATE,
  VACATION,
  SICK,
  HEADER_ARR,
} from './Constants';
import styled from 'styled-components';
import DuplicateModal from './DuplicateModal';
import Pagination from '@material-ui/lab/Pagination';

const Container = styled.div`
  .numBoxContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
  }
`;

const StyledForm = styled.form`
  button {
    padding: 0.7em;
    width: 120px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
  }

  input {
    height: 42px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin-left: 8px;
  }
  .dateInput {
    width: 120px;
  }

  .textInput {
    width: 600px;
    padding: 0 10px;
    margin-bottom: 55px;
  }
  .searchButton {
    background: #0081cc;
    color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-left: 8px;
  }
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 5em;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
`;

const numBoxNames = [
  { name: 'onCnt', type: ON },
  { name: 'offCnt', type: OFF },
  { name: 'absenceCnt', type: ABSENCE },
  { name: 'lateCnt', type: LATE },
  { name: 'vacationCnt', type: VACATION },
  { name: 'sickCnt', type: SICK },
];

function Attendance({
  date,
  word,
  handleAllDates,
  handleSearch,
  handleInputChange,
  statusArr,
  attendanceArr,
  handleStatus,
  showModal,
  handleModalClose,
  duplicateArr,
  selectedId,
  handleSelectedIdChange,
  handleChoose,
  pageInfo,

  handlePageChange,
  showPagination,
}) {
  return (
    <Container>
      <div className="numBoxContainer">
        {numBoxNames.map((s) => (
          <NumBox
            num={statusArr[s.name]}
            type={s.type}
            handleStatus={handleStatus}
            key={s.type}
          />
        ))}
      </div>
      <StyledForm onSubmit={handleSearch}>
        <button type="button" onClick={handleAllDates}>
          모든날짜
        </button>
        <input
          type="date"
          name="date"
          className="dateInput"
          value={date}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="word"
          className="textInput"
          value={word}
          onChange={handleInputChange}
        />
        <button type="submit" className="searchButton">
          검색하기
        </button>
      </StyledForm>
      <Table page="attendance" headerArr={HEADER_ARR} dataArr={attendanceArr} />
      {showPagination && (
        <PaginationContainer>
          <Pagination
            count={pageInfo.totalPage}
            page={pageInfo.currentPage}
            onChange={handlePageChange}
            hidePrevButton
            hideNextButton
          />
        </PaginationContainer>
      )}
      <DuplicateModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        duplicateArr={duplicateArr}
        selectedId={selectedId}
        handleSelectedIdChange={handleSelectedIdChange}
        handleChoose={handleChoose}
      />
    </Container>
  );
}

export default Attendance;
