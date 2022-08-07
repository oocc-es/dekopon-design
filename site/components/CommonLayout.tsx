import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import useMenu from './useMenu';
import Moon from './Moon';
import Sun from './Sun';
import styles from './layout.module.scss';
import { Layout } from '@dekopon/design';
import React from 'react';

const CommonLayout = () => {
  const list = useMenu();
  const [theme, setTheme] = useState('light');
  function setThemeAction(theme: string) {
    document.body.setAttribute('arco-theme', theme);
    document.querySelector('html')?.setAttribute('data-color-mode', theme);
    setTheme(theme);
  }
  return (
    <Layout className={styles.container}>
      <Layout.Header>
        <header className={styles.webHeader}>
          组件库文档
          {theme === 'dark' && <Moon className={'icon'} onClick={() => setThemeAction('light')} />}
          {theme === 'light' && <Sun className={'icon'} onClick={() => setThemeAction('dark')} />}
        </header>
      </Layout.Header>
      <Layout.Content className={styles.webContent}>
        <Layout.Left className={styles.aside}>
          <ul>
            {list.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : '')}
                  key={item.path}
                  to={item.path}
                >
                  {item.path}
                </NavLink>
              </li>
            ))}
          </ul>
        </Layout.Left>
        <Layout.Center className={styles.center}>
          <Outlet />
        </Layout.Center>
      </Layout.Content>
      <Layout.Footer className='container'>power by cc</Layout.Footer>
    </Layout>
  );
};
export default CommonLayout;