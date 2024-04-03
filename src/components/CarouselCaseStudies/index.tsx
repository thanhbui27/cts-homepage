import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import {
  Slide,
  imagesData,
  settingsSlideCaseStudiesContent,
  settingsSlideCaseStudiesImage,
} from '@/constants/CaseStudies';
import ButtonBase from '../Button';
import { CarouselContainer } from './styles';

const CarouselCaseStudies = () => {
  const { t } = useTranslation();
  const [imageSlider] = useState<Slide[]>(imagesData);
  const [navContent, setNavContent] = useState<Slider | null>(null);
  const [navImage, setNavImage] = useState<Slider | null>(null);

  return (
    <CarouselContainer>
      <div className='slider'>
        <div className='slider-left'>
          <ButtonBase type='link'>{t('caseStudiesSection.title')}</ButtonBase>
          <div className='list'>
            <Slider
              asNavFor={navContent as Slider}
              ref={(nav) => setNavImage(nav)}
              {...settingsSlideCaseStudiesContent}
            >
              {imageSlider.map((content) => (
                <div key={content.name} className='item'>
                  <div className='content'>
                    <h4>{content.name}</h4>
                    <p>{content.desc}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className='thumbnail'>
          <Slider
            asNavFor={navImage as Slider}
            ref={(nav) => setNavContent(nav)}
            {...settingsSlideCaseStudiesImage}
          >
            {imageSlider.map((image) => (
              <div key={image.url} className='item'>
                <img src={image.url} alt='' />
                <span className='content'>{image.name}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </CarouselContainer>
  );
};
export default CarouselCaseStudies;
