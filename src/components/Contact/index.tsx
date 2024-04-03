import { contactImageURL, listInput } from '@/constants/ContactUs';
import { useTranslation } from 'react-i18next';
import Input from '@/components/Input';
import ButtonBase from '@/components/Button';
import TextArea from '@/components/TextArea';
import { StyledContact, StyledContainer, StyledFormRow } from './style';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledContact>
        <div className='contact-left'>
          <div className='contact-img'>
            <img src={contactImageURL} />
          </div>
          <div className='contact-text'>
            <div className='title-small'>
              <span>{t('contactUsSection.title')}</span>
            </div>
            <div className='title-big'>
              <span>{t('contactUsSection.heading')}</span>
            </div>
            <div className='line'></div>
            <div className='contact-content'>
              <p>{t('contactUsSection.description')}</p>
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <form className='contact-form'>
            {listInput.map((row) => (
              <StyledFormRow key={row.id}>
                {row.inputs.map((input) => (
                  <Input
                    key={input.id}
                    {...input}
                    placeholder={t(
                      `contactUsSection.input.placeholder.${input.placeholder}`,
                    )}
                  />
                ))}
              </StyledFormRow>
            ))}

            <StyledFormRow>
              <TextArea
                placeholder={t('contactUsSection.textarea.placeholder.message')}
                isError={false}
              />
            </StyledFormRow>
            <div className='btn'>
              <ButtonBase type='primary'>
                {t('contactUsSection.button.sendMessage')}
              </ButtonBase>
            </div>
          </form>
        </div>
      </StyledContact>
    </StyledContainer>
  );
};
