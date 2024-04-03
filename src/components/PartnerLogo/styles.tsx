import styled from 'styled-components';

const PartnerContainer = styled.div`
  padding: 80px 100px;
  @media ${({ theme }) => theme.pallete.device.largeTablet} {
    padding: 36px 16px 36px 16px;
  }
  .list-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 63px;
    position: relative;
    overflow: auto;
    max-width: ${({ theme }) => theme.pallete.size.desktop};
    margin: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
    .logo-partner {
      max-width: 130px;
      max-height: 130px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  @media ${({ theme }) => theme.pallete.device.tablet} {
    .list-logo {
      gap: 16px;
      .logo-partner {
        width: 90px;
        height: 85px;
      }
    }
  }
`;

export { PartnerContainer };
