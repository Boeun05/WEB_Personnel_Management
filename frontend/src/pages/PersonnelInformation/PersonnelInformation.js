import React from 'react';
import Table from '../../components/Table/Table';
import { HEADER_ARR } from './Constants';
import styled from 'styled-components';
import AddEmployeeModal from './AddEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';
import Pagination from '@material-ui/lab/Pagination';
import { FaPlus } from 'react-icons/fa';

const StyledForm = styled.form`
  input {
    height: 42px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #ccc;
    margin-left: 8px;
  }
  select {
    outline: none;
    width: 100px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #aaa;
    padding: 0 10px;
  }

  .textInput {
    width: 600px;
    padding: 0 10px;
  }

  button {
    padding: 0.7em;
    width: 120px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    background: #2d93f0;
    color: #fff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin-left: 8px;
  }
`;

const AddButtonWrap = styled.div`
  width: 100%;
  height: 40px;
  margin: 15px 0;
`;

const AddButton = styled.button`
  border-radius: 50%;
  color: #fff;
  font-size: 19px;
  background: #2d93f0;
  height: 40px;
  width: 40px;
  float: right;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 5em;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
`;

function PersonnelInformation({
  type,
  word,
  handleSearch,
  handleAdd,
  handleInputChange,
  employeeArr,
  showModal,
  handleModalClose,
  handleChoose,
  addInput,
  handleAddInputChange,
  departmentList,
  editEmployeeModal,
  showEditModal,
  employeeData,
  handleEdit,
  setShowEditModal,
  pageInfo,
  handlePageChange,
  showPagination,
}) {
  return (
    <div>
      <StyledForm onSubmit={handleSearch}>
        <select
          name="type"
          value={type}
          onChange={handleInputChange}
          className="typeInput"
        >
          <option value="name">이름</option>
          <option value="deptName">부서</option>
        </select>
        <input
          type="text"
          name="word"
          value={word}
          onChange={handleInputChange}
          className="textInput"
        />
        <button type="submit">검색</button>
      </StyledForm>
      <AddButtonWrap>
        <AddButton type="button" onClick={handleAdd}>
          <FaPlus />
        </AddButton>
      </AddButtonWrap>
      <Table
        page="personnelInformation"
        headerArr={HEADER_ARR}
        dataArr={employeeArr}
        editEmployeeModal={editEmployeeModal}
      />
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
      <AddEmployeeModal
        showModal={showModal}
        handleModalClose={handleModalClose}
        handleChoose={handleChoose}
        addInput={addInput}
        handleAddInputChange={handleAddInputChange}
        departmentList={departmentList}
      />
      <EditEmployeeModal
        showModal={showEditModal}
        employeeData={employeeData}
        handleEdit={handleEdit}
        setShowEditModal={setShowEditModal}
      />
    </div>
  );
}

export default PersonnelInformation;
