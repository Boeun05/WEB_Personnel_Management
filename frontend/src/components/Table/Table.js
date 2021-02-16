import React from 'react';
import AttendanceRow from './AttendanceRow';
import EmployeeRow from './EmployeeRow';
import PayrollRow from './PayrollRow';
import PersonnelStatusRow from './PersonnelStatusRow';
import styled from 'styled-components';

const StyledTable = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px 10px 0 0;

  th {
    background: #ebf0f5;
    color: #0c243c;
    font-weight: normal;
    padding: 0.8em;
    font-size: 17px;
  }
  td {
    border-bottom: 1px solid #efefef;
    padding: 0.8em;
  }
`;

const rowComponents = {
  attendance: AttendanceRow,
  personnelInformation: EmployeeRow,
  payroll: PayrollRow,
  personnelStatus: PersonnelStatusRow,
};

function Table({ page, headerArr, dataArr, ...rest }) {
  const RowComponent = rowComponents[page];

  if (!dataArr) {
    return <p>로딩 중...</p>;
  }

  if (dataArr.length === 0) {
    return <p>해당하는 정보가 없습니다.</p>;
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          {headerArr.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataArr.map((data, i) => {
          return <RowComponent data={data} key={i} rest={rest} />;
        })}
      </tbody>
    </StyledTable>
  );
}

export default Table;
