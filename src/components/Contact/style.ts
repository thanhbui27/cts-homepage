import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 160px 181px 80px 181px;
  max-width: 1440px;
  margin: 0 auto 229px auto;

  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    padding: 56px 20px 36px 20px;
    gap: 24px;
  }
`;

export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex: 1 1;

  @media ${({ theme }) => theme.pallete.device.tablet} {
    display: block;
  }
`;
export const StyledContact = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 56px;
  flex: 1 1;

  @keyframes moveFromLeft {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes moveFromRight {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .contact {
    &-content p {
      color: ${({ theme }) => theme.pallete.text.tertiary};
      font-size: ${({ theme }) => theme.pallete.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
      font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
      line-height: 24px;
    }
    &-right {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      transform: translateX(30px);
      animation: moveFromRight 3s forwards;
      position: relative;
    }
    &-img {
      img {
        max-width: 355px;
        max-height: 298px;
        position: relative;
        left: -113px;
      }
    }
    &-form {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 16px;
    }
    &-text {
      position: absolute;
      left: 214px;
      top: 230px;
      max-width: 368px;
      max-height: 154px;
      gap: 16px;
      opacity: 0;
      transform: translateX(-30px);
      animation: moveFromLeft 3s forwards;
    }
    &-left {
      flex: 1 1 30%;
      display: flex;
      flex-direction: column;
      margin-top: -80px;
      gap: 14px;
    }
  }
  .title {
    &-small {
      span {
        color: ${({ theme }) => theme.pallete.blue.blue.main};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize.base};
        font-weight: ${({ theme }) =>
          theme.pallete.typography.fontWeightSemiBold};
        font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
        line-height: 24px;
      }
    }
    &-big {
      span {
        color: ${({ theme }) => theme.pallete.text.primary};
        font-size: ${({ theme }) => theme.pallete.typography.fontSize.xl};
        font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
        font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
        line-height: 44px;
      }
    }
  }

  .line {
    width: 80px;
    height: 1px;
    background-color: ${({ theme }) => theme.pallete.black.black.line};
    position: absolute;
    top: 93px;
  }

  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    gap: 24px;
    min-width: 357px;
    width: 100%;
    flex-direction: column;
    flex-wrap: unset;
    .contact {
      &-left {
        margin-top: -47px;
      }
      &-right {
        padding: 20px 20px 20px 20px;
      }
      &-text {
        left: 38px;
        top: 54px;
        gap: 0px;
      }
      &-img {
        img {
          position: relative;
          left: 0px;
        }
      }
      &-form {
        gap: 0;
      }
    }
    .title {
      &-big {
        span {
          font-size: 24px;
        }
      }
    }

    .line {
      top: 58px;
    }
  }
  @media ${({ theme }) => theme.pallete.device.tablet} {
    max-width: 100%;
    .contact-img img {
      max-width: 171px;
      max-height: 171px;
      position: relative;
    }
  }
  .btn {
    margin-top: 20px;
  }
`;
