import styled from 'styled-components';

const CustomerSayContainer = styled.div`
  background-color: ${({ theme }) => theme.pallete.blue.blue.lighter};
  padding: 80px 100px;
  .customer-say {
    max-width: ${({ theme }) => theme.pallete.size.desktop};
    margin: auto;
    .title {
      text-align: center;
      h3 {
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['3xl']};
        font-weight: ${({ theme }) => theme.pallete.typography.fontWeightBold};
        line-height: 44px;
      }
    }
    .customer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      display: none !important;

      .info {
        text-align: center;
        margin-top: 40px;
        h4 {
          margin: 4px 0;
          font-size: ${({ theme }) => theme.pallete.typography.fontSize['2xl']};
          font-weight: ${({ theme }) =>
            theme.pallete.typography.fontWeightBold};
          line-height: 26px;
        }
        span {
          font-size: ${({ theme }) => theme.pallete.typography.fontSize['lg']};
          font-weight: ${({ theme }) =>
            theme.pallete.typography.fontWeightRegular};
          line-height: 24px;
          text-align: left;
          color: ${({ theme }) => theme.pallete.gray.gray.dark};
        }
      }
      .content {
        padding: 47px 135px;
        max-width: 890px;
        position: relative;
        p {
          font-size: ${({ theme }) => theme.pallete.typography.fontSize['2xl']};
          font-weight: ${({ theme }) =>
            theme.pallete.typography.fontWeightRegular};
          font-style: italic;
          color: ${({ theme }) => theme.pallete.blue.blue.dark};
          line-height: 24.51px;
          text-align: center;
        }
        .icon {
          img {
            position: absolute;
            max-width: 80px;
            max-height: 60px;
            width: 100%;
            height: 100%;
            &.cstop {
              top: 0;
              left: 0;
            }
            &.csbottom {
              bottom: 25px;
              right: 0;
            }
          }
        }
      }
    }
  }
  .slick-current {
    .customer {
      display: flex !important;
    }
  }
  .slick-dots {
    top: 25px;
    height: fit-content;
  }

  .slick-dots li {
    width: 36px;
    height: 36px;
    opacity: 0.8;
    margin: 0 25px;
    transition: 1s;
    background-color: transparent;
  }

  .slick-dots li.slick-active {
    opacity: 1;
    scale: 2;
    img {
      border-color: ${({ theme }) => theme.pallete.blue.blue.main};
    }
  }

  .slick-dots li img {
    border: 1px solid ${({ theme }) => theme.pallete.gray.gray.light};
    border-radius: 50%;
    display: block;
    width: 100% !important;
    height: 100% !important;
    padding: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }
  .nav-logo {
    max-width: 360px;
    height: 84px;
    margin: auto;
    .slick-slide {
      transition: all 0.5s ease;
      transform: scale(1);
      padding: 10px;
    }
    .slick-slide:not(.slick-center) {
      transition: all 0.5s ease;
      transform: scale(1);
    }
    .logo-company {
      transition: 1s;
      padding: 25px 0;
      box-sizing: border-box;
      margin: 0 10px;
      img {
        width: 36px;
        height: 36px;
        padding: 3px;
        object-fit: cover;
        border: 1px solid ${({ theme }) => theme.pallete.gray.gray.light};
        border-radius: 50%;
      }
    }
    .slick-current {
      .logo-company {
        margin: 0 10px;
        opacity: 1;
        scale: 2;
        img {
          border-color: ${({ theme }) => theme.pallete.blue.blue.main};
        }
      }
    }
  }
  @media ${({ theme }) => theme.pallete.device.largeTablet} {
    padding: 36px 16px 36px 16px;
    .customer-say {
      .customer {
        .content {
          p {
            font-size: ${({ theme }) =>
              theme.pallete.typography.fontSize['base']};
          }
          .icon {
            img {
              max-width: 40px;
              max-height: 30px;
            }
          }
        }
      }
    }
  }

  @media ${({ theme }) => theme.pallete.device.tablet} {
    .customer-say {
      .nav-logo {
        .logo-company {
          margin: 0 15px;
        }
        .slick-slide:not(.slick-center) {
          margin: 0;
          padding: 0;
        }
        .slick-slide {
          padding: 5px;
        }
      }
      .customer {
        .content {
          padding: 16px 40px;
          .icon {
            img {
              width: 36px;
              height: 36px;
            }
          }
        }
      }
    }
    .slick-dots li {
      margin: 0 15px;
    }
    .slick-dots li.slick-active {
      opacity: 1;
      scale: 1.5;
      img {
        border-color: ${({ theme }) => theme.pallete.blue.blue.main};
      }
    }
  }
`;

export { CustomerSayContainer };
