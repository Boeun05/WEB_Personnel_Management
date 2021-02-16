import React from 'react';
import styled, { css } from 'styled-components';
import { FaPen } from 'react-icons/fa';

const Button = styled.button`
  cursor: pointer;
  background-color: white;
  font-size: 14px;
  ${({ theme }) => {
    return css`
      color: ${theme.palette['darkgrey']};
    `;
  }}
`;

function EmployeeRow({ data, rest }) {
  const { editEmployeeModal } = rest;

  const handleEditButton = () => {
    editEmployeeModal(data);
  };

  return (
    <tr>
      <td>{data.empName}</td>
      <td>{data.deptName}</td>
      <td>{data.empPosition}</td>
      <td>{data.empJoinDate}</td>
      <td>{data.empPhoneNum}</td>
      <td>
        <Button onClick={handleEditButton}>
          <FaPen />
        </Button>
      </td>
    </tr>
  );
}

export default EmployeeRow;
