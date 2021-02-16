import React from 'react';
import styled, { css } from 'styled-components';

const StyledTr = styled.tr`
  .transferDept {
    color: #76ba1b;
  }
  .transferPos {
    color: #0081cc;
  }
  .transferStatus {
    color: #b53737;
  }
`;

function PersonnelStatusRow({ data }) {
  return (
    <StyledTr>
      <td>{data.employeeName}</td>
      <td>{data.curDepartmentName}</td>
      <td className="transferDept">{data.transferDepartmentName}</td>
      <td>{data.curPosition}</td>
      <td className="transferPos">{data.transferPosition}</td>
      <td>{data.approveDate}</td>
      <td>{data.appointDate}</td>
      <td className="transferStatus">{data.isEnd ? '발령완료' : '발령예정'}</td>
    </StyledTr>
  );
}

export default PersonnelStatusRow;
