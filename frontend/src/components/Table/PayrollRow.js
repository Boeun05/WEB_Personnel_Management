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

const StyledTr = styled.tr`
  .salary {
    ${({ theme }) => {
      return css`
        color: ${theme.palette['green']};
      `;
    }}
  }

  .incentive {
    ${({ theme }) => {
      return css`
        color: ${theme.palette['blue']};
      `;
    }}
  }
`;
function PayrollRow({ data, rest }) {
  const { editModal } = rest;
  const handleEditButton = () => {
    editModal(data);
  };

  return (
    <StyledTr>
      <td>{data.empName}</td>
      <td>{data.deptName}</td>
      <td>{data.empPosition}</td>
      <td className="salary">{data.salary}</td>
      <td className="incentive">{data.incentive}</td>
      <td>
        <Button onClick={handleEditButton}>
          <FaPen />
        </Button>
      </td>
    </StyledTr>
  );
}

export default PayrollRow;
