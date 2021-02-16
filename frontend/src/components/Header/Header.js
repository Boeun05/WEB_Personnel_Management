import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './header.module.css';
import { withRouter } from 'react-router-dom';
import { BiLogOutCircle } from 'react-icons/bi';

const convertLocation = {
  '/attendance': '근태관리',
  '/payroll': '급여관리',
  '/work': '업무관리',
  '/evaluation': '성과관리',
  '/personnelInformation': '인적사항관리',
  '/personnelStatus': '인사현황',
  '/profile': '프로필',
};

function Header({ history }) {
  const location = useLocation();
  const pathname = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <header className={styles.header}>
      <p className={styles.title}>{convertLocation[pathname]}</p>
      <button className={styles.button} onClick={handleLogout}>
        <BiLogOutCircle></BiLogOutCircle>
      </button>
    </header>
  );
}

export default withRouter(Header);
