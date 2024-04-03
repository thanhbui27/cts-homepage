import { useTranslation } from 'react-i18next';
import Card from './Card';
import { collectionData } from '@/constants/CardCollection';
import { CollectionCardStyled } from './styles';
import ButtonBase from '../Button';

const CollectionCard = () => {
  const { t } = useTranslation();
  return (
    <CollectionCardStyled>
      <div className='title-section'>
        <ButtonBase type='link'>{t('serviceSection.title')}</ButtonBase>
        <h4>{t('serviceSection.heading')}</h4>
      </div>
      <div className='collection'>
        {collectionData.map((item) => (
          <Card
            key={item.id}
            label={item.title}
            icon={item.icon}
            description={item.desc}
          />
        ))}
      </div>
    </CollectionCardStyled>
  );
};

export default CollectionCard;
