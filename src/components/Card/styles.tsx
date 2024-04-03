import styled from 'styled-components';
import bg from '@/assets/icons/Vector.svg';
export const CollectionCardStyled = styled.div`
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: 10%;
  padding: 80px 100px;
  max-width: ${({ theme }) => theme.pallete.size.desktop};
  margin: auto;
  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    padding: 36px 16px;
  }
  .title-section {
    text-align: center;
    h4 {
      margin: 14px;
      color: ${({ theme }) => theme.pallete.text.primary};
      font-size: ${({ theme }) => theme.pallete.typography.fontSize['3xl']};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
      line-height: 44px;
    }
  }
  .collection {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 36px;
  }
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 292px;
  padding: 32px;
  transition: all 0.5s;
  align-self: stretch;
  @media ${({ theme }) => theme.pallete.device.mb} {
    max-width: 343px;
  }
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    line-height: 26px;
    position: relative;
    overflow: hidden;
    gap: 20px;

    h5 {
      margin: 0 0 10px 0;
      color: #333;
      font-size: ${({ theme }) => theme.pallete.typography.fontSize['2xl']};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
      flex-shrink: 1;
    }

    .icon {
      max-width: 80px;
      max-height: 80px;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .description {
      color: #878a8e;
      font-size: ${({ theme }) => theme.pallete.typography.fontSize['xs']};
      line-height: 20px;
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
      position: relative;
      padding-top: 8px;
    }
    .line {
      width: 32px;
      height: 1px;
      background-color: #878a8e;
      margin: 20px 0;
    }
  }
`;
