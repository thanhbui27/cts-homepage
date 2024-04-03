import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTER, RouterItem } from '@/constants/router';

import { listOptionLanguage } from '@/constants/Header';
import ButtonBase from '../Button';

import { NavBar, NavLink, NewNavBarContainer } from './styles';

import buttonNavLinkRes from '@/assets/icons/header/menu.svg';
import buttonCloseNavLinkRes from '@/assets/icons/header/x-mark.svg';
import logoSrc from '@/assets/icons/header/logo_default.svg';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [showNavBar, setShowNavBar] = useState<boolean>(true);

  const handleToggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const changeLanguageHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      {showNavBar && (
        <NavBar>
          <div className='logo-container'>
            <img src={logoSrc} alt='Logo' />
          </div>
          <div className='middle-section'>
            <ul className='nav-list'>
              {Object.values(ROUTER).map((item: RouterItem) => (
                <li className='nav-item' key={item.id}>
                  <NavLink to={item.path}>
                    {t(`footer.menu.${item.title}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <select
              className='select-language'
              onChange={(e) => changeLanguageHandler(e)}
            >
              {Object.entries(listOptionLanguage).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
            <ButtonBase type='primary'>{t('button.callNow')}</ButtonBase>
            <div className='button-nav-responsive' onClick={handleToggleNavBar}>
              <img src={buttonNavLinkRes} alt='button menu responsive' />
            </div>
          </div>
        </NavBar>
      )}
      {!showNavBar && (
        <NewNavBarContainer>
          <div className='new-nav-bar'>
            <div className='logo-container'>
              <img src={logoSrc} alt='Logo' />
              <img
                className='close-button'
                src={buttonCloseNavLinkRes}
                onClick={handleToggleNavBar}
              />
            </div>
            <ul className='nav-list-responsive'>
              {Object.values(ROUTER).map((item: RouterItem) => (
                <li className='nav-item' key={item.id}>
                  <NavLink to={item.path}>
                    {t(`footer.menu.${item.title}`)}
                  </NavLink>
                </li>
              ))}
              <li>
                <ButtonBase type='primary'>{t('button.callNow')}</ButtonBase>
              </li>
            </ul>
          </div>
        </NewNavBarContainer>
      )}
    </>
  );
};

export default Header;
