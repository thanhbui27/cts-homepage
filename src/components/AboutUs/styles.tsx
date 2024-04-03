import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.pallete.blue.blue.lighter};
`;

const StyledaboutUs = styled.div`
  max-width: ${({ theme }) => theme.pallete.size.desktop};
  padding: 90px 100px 90px 100px;
  margin: auto;
  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    padding: 66px 16px 66px 16px;
    .grid-dot {
      display: none;
    }
  }
  .aboutUs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 56px;

    @media ${({ theme }) => theme.pallete.device.desktop} {
      justify-content: center;
    }
    @media ${({ theme }) => theme.pallete.device.tablet} {
      flex-direction: column;
    }
    &-right {
      flex: 1 1 0px;
      display: flex;
      flex-direction: column;
    }
    &-text {
      flex-grow: 1;
      max-width: 667px;
      gap: 16px;
    }
    &-content {
      flex-grow: 1;
    }
    &-left {
      display: flex;
      flex-direction: column;
      &-image {
        max-width: 397px;
        max-height: 378px;
        width: 100%;
        height: 100%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          z-index: 1;
        }
        .grid-dot {
          position: absolute;
          top: -10%;
          right: -10%;
          z-index: 0;
        }
      }
    }
    &-text {
      h4 {
        margin: 14px 0;
        color: ${({ theme }) => theme.pallete.text.primary};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['3xl']};
        font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
        line-height: 44px;
        opacity: 0;
        transform: translateX(-30px);
        animation: moveleft 1s forwards;
      }
      p {
        color: ${({ theme }) => theme.pallete.text.tertiary};
        font-size: ${({ theme }) => theme.pallete.typography.htmlFontSize};
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightRegular};
        line-height: 22px;
        opacity: 0;
        transform: translateX(-30px);
        animation: moveleft 3s forwards;
      }
    }
    img {
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
  }
`;

export { StyledContainer, StyledaboutUs };
