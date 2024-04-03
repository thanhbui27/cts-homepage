import { useTranslation } from 'react-i18next';
import { StyledContainer, StyledBanner } from './styles';
import ButtonBase from '../Button';
import banner1 from '@/assets/images/banner 1.png';
import banner2 from '@/assets/images/banner 2.png';
import banner3 from '@/assets/images/banner 3.png';

export const Banner = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledBanner>
        <div className='banner-left'>
          <div className='banner-text'>
            <div className='banner-title'>
              <h1>
                Lorem ipsum dolor sit amet consectet. Proin eu sed quam arcu
                morbi erat lectus in.
              </h1>
            </div>
            <div className='banner-content'>
              <p>
                Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu morbi
                at purus. A aenean aliquam diam lectus neque aliquam hendrerit
                cras. Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu
                morbi at purus. A aenean aliquam diam lectus neque aliquam
                hendrerit cras.
              </p>
            </div>
            <ButtonBase type='primary'>{t('button.contact')}</ButtonBase>
          </div>
        </div>
        <div className='banner-right'>
          <div className='banner-imgTop'>
            <img src={banner3}></img>
          </div>
          <div className='banner-imgBottom'>
            <div className='banner-imgBottom-imgLeft'>
              <img src={banner2}></img>
            </div>
            <div className='banner-imgBottom-imgRight'>
              <img src={banner1}></img>
            </div>
          </div>
        </div>
      </StyledBanner>
    </StyledContainer>
  );
};
