import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import {
  listCustomerSay,
  settings,
  settingsNav,
} from '@/constants/CustomerSay';
import { CustomerSayContainer } from './styles';
import ButtonBase from '../Button';
import CsTop from '@/assets/icons/cstop.svg';
import CsBottom from '@/assets/icons/csbottom.svg';

const CustomerSay = () => {
  const { t } = useTranslation();
  const [navLogo, setNavLogo] = useState<Slider | null>(null);
  const [navContent, setNavContent] = useState<Slider | null>(null);

  return (
    <CustomerSayContainer>
      <div className='customer-say'>
        <div className='title'>
          <ButtonBase type='link'>{t('whatClientSaySection.title')}</ButtonBase>
          <h3>{t('whatClientSaySection.heading')}</h3>
        </div>
        <div className='nav-logo'>
          <Slider
            asNavFor={navLogo as Slider}
            ref={(nav) => setNavContent(nav)}
            {...settingsNav}
          >
            {listCustomerSay
              .filter((_, idx) => idx < 5)
              .map((item) => (
                <div key={item.id}>
                  <div className='logo-company'>
                    <img src={item.url} alt='' />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <Slider
          asNavFor={navContent as Slider}
          ref={(nav) => setNavLogo(nav)}
          {...settings}
        >
          {listCustomerSay
            .filter((_, idx) => idx < 5)
            .map((item) => (
              <div key={item.id} className='customer'>
                <div className='info'>
                  <h4>{item.customerName}</h4>
                  <span>{item.companyName}</span>
                </div>
                <div className='content'>
                  <p>{item.say}</p>
                  <div className='icon'>
                    <img className='cstop' src={CsTop} alt='' />
                    <img className='csbottom' src={CsBottom} alt='' />
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </CustomerSayContainer>
  );
};

export default CustomerSay;
