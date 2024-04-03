import { useTranslation } from 'react-i18next';
import { StyledaboutUs, StyledContainer } from './styles';
import ButtonBase from '../Button';
import aboutUs from '@/assets/images/aboutUs.png';
import girdDot from '@/assets/icons/Frame 10.svg';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <StyledContainer>
      <StyledaboutUs>
        <div className='aboutUs'>
          <div className='aboutUs-left'>
            <div className='aboutUs-left-image'>
              <div className='grid-dot'>
                <img src={girdDot} alt='' />
              </div>
              <img src={aboutUs}></img>
            </div>
          </div>
          <div className='aboutUs-right'>
            <div className='aboutUs-text'>
              <ButtonBase type='link'>{t('aboutUsSection.title')}</ButtonBase>
              <div className='aboutUs-title'>
                <h4>
                  Lorem ipsum dolor sit amet consectet. Proin eu sed quam arcu
                  morbi erat lectus in.
                </h4>
              </div>
              <div className='aboutUs-content'>
                <p>
                  Viverra amet sit lacus sapien a nec nunc. Eget aliquam eu
                  morbi at purus. A aenean aliquam diam lectus neque aliquam
                  hendrerit cras. Viverra amet sit lacus sapien a nec nunc. Eget
                  aliquam eu morbi at purus. A aenean aliquam diam lectus neque
                  aliquam hendrerit cras.
                </p>
              </div>
            </div>
          </div>
        </div>
      </StyledaboutUs>
    </StyledContainer>
  );
};

export default AboutUs;
