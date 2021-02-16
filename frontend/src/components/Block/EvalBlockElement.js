import React from 'react';
import styles from './block.module.css';
import { FaPen } from 'react-icons/fa';

const EvalBlockElement = React.memo(function ({ data, modalOpen }) {
  return (
    <div id={data.evalInfo.evalBlockId} className={styles.blockElements}>
      <p className={styles.title}>
        {data.evalInfo.workName}
        <span className={styles.subtitle}>[{data.evalInfo.deptName}]</span>
      </p>
      {data.evalListPerWork.map((evalPerWork, index) => {
        return (
          <p className={styles.p} key={index}>
            <span className={styles.empName}>{evalPerWork.empName}</span>
            <span className={styles.score}>{evalPerWork.score}</span>
            <span className={styles.slash}>/</span>
            <span className={styles.comment}>{evalPerWork.comment}</span>
          </p>
        );
      })}
      <button onClick={modalOpen} className={styles.button}>
        <i>
          <FaPen />
        </i>
      </button>
    </div>
  );
});

export default EvalBlockElement;
