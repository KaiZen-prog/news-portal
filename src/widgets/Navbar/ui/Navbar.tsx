import React from 'react';
import {classNames} from 'shared/lib';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
        <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
      </div>
    </nav>
  );
};
