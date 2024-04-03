import { listPartnerLogo } from '@/constants/PartnertLogo';
import { PartnerContainer } from './styles';

const PartnerLogo = () => {
  return (
    <PartnerContainer>
      <div className='list-logo'>
        {listPartnerLogo.map((item) => (
          <div key={item.id} className='logo-partner'>
            <img src={item.url} />
          </div>
        ))}
      </div>
    </PartnerContainer>
  );
};

export default PartnerLogo;
