import styled from 'styled-components';
import bg from '@/assets/images/Group 3.png';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 36px 100px 56px 100px;
  max-width: ${({ theme }) => theme.pallete.size.desktop};
  margin: auto;
  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    padding: 36px 16px 36px 16px;
    .banner-rignt {
      gap: 20px 10px;
    }
  }
`;

export const StyledBanner = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 52px;
  background-image: url('${bg}');
  background-repeat: no-repeat;
  background-position: 90%;
  .banner {
    &-left {
      flex: 1 1 0px;
      display: flex;
      flex-direction: column;
    }
    &-text {
      flex-grow: 1;
      gap: 16px;
      h1 {
        padding-top: 50px;
        color: ${({ theme }) => theme.pallete.text.primary};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['4xl']};
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightExtraBold};
        line-height: 60px;
        opacity: 0;
        transform: translateX(-30px);
        animation: moveleft 1s forwards;
      }
      p {
        color: ${({ theme }) => theme.pallete.text.tertiary};
        font-size: ${({ theme }) =>
          theme.pallete.typography.fontSize.htmlFontSize};
        margin-bottom: 16px;
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightRegular};
        line-height: 22px;
        opacity: 0;
        transform: translateX(-30px);
        animation: moveleft 3s forwards;
      }
    }
    &-content {
      flex-grow: 1;
    }
    &-right {
      flex: 1 1 0px;
      gap: 40px 20px;
      display: flex;
      flex-direction: column;
    }
    &-imgTop {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-height: 249px;
        max-width: 328px;
        opacity: 0;
        margin-top: 10px;
        margin-bottom: 20px;
      }
    }
    &-imgBottom {
      display: flex;
      flex: 1 1;
      gap: 40px;
      &-imgRight img {
        max-height: 249px;
        max-width: 328px;
        opacity: 0;
        margin-bottom: 20px;
      }
      &-imgLeft img {
        max-height: 249px;
        max-width: 328px;
        opacity: 0;
        margin-top: 40px;
      }
    }
  }
  .primary-button {
    transform: translateX(-30px);
    animation: moveleft 3s forwards;
  }

  img {
    object-fit: cover;
    border-radius: 38px 0px 38px 0px;
    transform: translateX(30px);
    animation: moveright 3s forwards;
  }
  @keyframes moveleft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes moveright {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @media ${({ theme }) => theme.pallete.device.smallDesktop} {
    display: unset;
    .banner {
      &-right {
        gap: 0;
      }
      &-imgBottom {
        justify-content: center;
        gap: 18px;
      }
      &-text h1 {
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['3xl']};
        font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
        line-height: 44px;
        padding-top: 0px;
      }
    }
  }
  @media ${({ theme }) => theme.pallete.device.tablet} {
    display: unset;
    img {
      max-width: 168px;
      height: 128px;
    }
  }
`;

export default StyledBanner;
