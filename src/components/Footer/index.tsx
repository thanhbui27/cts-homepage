import { useTranslation } from 'react-i18next';
import {
  listFooterContact,
  listFooterService,
  listIconSoci,
} from '@/constants/Footer';
import { Link } from 'react-router-dom';
import { ROUTER, RouterItem } from '@/constants/router';
import { FooterContainer } from './styles';

import logoSrc from '@/assets/icons/header/logo_white.svg';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <div className='footer'>
        <div className='footer-logo '>
          <img src={logoSrc} alt='Logo' />
          <div className='logo-mini'>
            {listIconSoci.map((item) => (
              <img src={item.icon} alt={item.alt} key={item.id} />
            ))}
          </div>
        </div>
        <div className='footer-menu'>
          <p>{t('footer.menu.title')}</p>
          <ul>
            {Object.values(ROUTER).map((item: RouterItem) => (
              <li key={item.id}>
                <Link to={item.path}> {t(`footer.menu.${item.title}`)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-service'>
          <p>{t(listFooterService.title)}</p>
          <ul>
            {listFooterService.data.map((item) => (
              <li key={item.id}>{t(item.title)}</li>
            ))}
          </ul>
        </div>
        <div className='footer-contact'>
          <p>{t(listFooterContact.title)}</p>
          <ul>
            {listFooterContact.data.map((item) => (
              <li key={item.id}>
                <img src={item.icon} alt='' />
                {t(item.title)}
              </li>
            ))}
          </ul>
        </div>
        <p className='footer-copyright'>
          Copyright © 2024 Designed and Developed by Central Tech Solutions.
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
