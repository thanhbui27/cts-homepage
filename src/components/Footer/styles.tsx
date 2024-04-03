import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.pallete.black.black.base};
  color: ${({ theme }) => theme.pallete.common.white};
  padding: 56px 100px;

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    max-width: 1440px;
    margin: auto;
    p {
      margin-bottom: 12px;
      font-weight: ${({ theme }) =>
        theme.pallete.typography.fontWeightSemiBold};
      line-height: 22px;
    }
    &-logo {
      flex: 1;
      position: relative;
      .logo-mini {
        margin-top: 28px;
        display: flex;
        gap: 8px;
        img {
          width: 24px;
          height: 24px;
        }
      }
      img {
        width: 229px;
        height: 44px;
      }
    }
    &-menu {
      flex: 1;
      text-align: start;
      li {
        margin-bottom: 10px;
        a {
          font-size: ${({ theme }) => theme.pallete.typography.fontSize['lg']};
          line-height: 22px;
          color: ${({ theme }) => theme.pallete.gray.gray.light};
          text-decoration: none;
          white-space: nowrap;
          &:hover {
            color: ${({ theme }) => theme.pallete.blue.blue.main};
          }
        }
      }
    }
    &-service,
    &-contact {
      text-align: start;
      flex: 1;
      li {
        font-size: ${({ theme }) => theme.pallete.typography.fontSize['lg']};
        line-height: 22px;
        color: ${({ theme }) => theme.pallete.gray.gray.light};
        margin-top: 12px;
        white-space: nowrap;
        img {
          margin-right: 10px;
          margin-top: 5px;
        }
      }
    }
    &-copyright {
      flex-basis: 100%;
      text-align: center;
      margin-top: 50px;
      color: ${({ theme }) => theme.pallete.gray.gray.dark};
    }
  }
  @media (max-width: 600px) {
    padding: 36px 16px 16px;
    .footer-content {
      flex-direction: column;
    }
  }
`;
