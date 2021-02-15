import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import styled from 'styled-components';
import { HEADER_ARR } from './Constants';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import EditModal from './EditModal';

const Container = styled.div`
  .numBoxContainer {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3em;
  }
`;

const StyledForm = styled.form`
  input {
    width: 600px;
    padding: 0 10px;
    margin-bottom: 70px;
    height: 42px;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #ccc;
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

const PaginationContainer = styled.div`
  text-align: center;
  margin-top: 5em;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
`;

function Payroll() {
  const [userUpdate, setUserUpdate] = useState(false);
  const [word, setWord] = useState('');
  const [salaryData, setSalaryData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    totalPage: 1,
  });
  const [showPagination, setShowPagination] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [employeeData, setEmployeeData] = useState({
    empId: 0,
    empName: '',
    empPosition: '',
    incentive: 0,
    salary: 0,
  });

  const fetchAllSalary = () => {
    axios.get('/salary').then((res) => {
      const { list, pageResultDTO } = res.data;
      setShowPagination(true);
      setSalaryData(list);
      setPageInfo({
        ...pageInfo,
        currentPage: 1,
        totalPage: pageResultDTO.totalPage,
      });
    });
  };

  const fetchSalary = (route) => {
    axios
      .get(route)
      .then((res) => {
        setSalaryData(res.data.list);
      })
      .catch(() => {
        setSalaryData([]);
      });
  };

  const editModal = (data) => {
    setShowEditModal(true);
    setEmployeeData({ ...data });
  };

  const handleEditModalClose = () => {
    setShowEditModal(false);
  };

  useEffect(() => {
    fetchAllSalary();
  }, []);

  useEffect(() => {
    if (userUpdate) {
      fetchAllSalary();
    }
    setUserUpdate(false);
  }, [userUpdate]);

  const handleWordChange = (e) => {
    setWord(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (word === '') {
      fetchAllSalary();
    } else {
      setShowPagination(false);
      fetchSalary(`/salary?name=${word}`);
    }
  };

  const handlePageChange = (e) => {
    const pageNum = parseInt(e.target.firstChild.nodeValue);
    fetchSalary(`/salary?page=${pageNum}`);
    setPageInfo({ ...pageInfo, currentPage: pageNum });
  };

  return (
    <Container>
      <StyledForm>
        <input
          type="text"
          name="word"
          className="textInput"
          placeholder="직원 이름을 입력하세요."
          value={word}
          onChange={handleWordChange}
        />
        <button type="submit" onClick={handleSearch}>
          검색
        </button>
      </StyledForm>
      <Table
        page="payroll"
        headerArr={HEADER_ARR}
        dataArr={salaryData}
        editModal={editModal}
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
      <EditModal
        showEditModal={showEditModal}
        employeeData={employeeData}
        handleEditModalClose={handleEditModalClose}
        setUserUpdate={setUserUpdate}
      />
    </Container>
  );
}

export default Payroll;
