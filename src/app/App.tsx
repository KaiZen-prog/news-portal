import React from 'react';
import {useTheme} from 'app/providers/ThemeProvider';
import {classNames} from 'shared/lib';
import {Sidebar} from 'widgets/Sidebar';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import './styles/index.scss';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  );
};

export default App;
