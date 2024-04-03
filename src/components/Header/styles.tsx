import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.pallete.common.white};
  padding: 24px 100px;
  font-family: 'Open-Sans';
  max-width: ${({ theme }) => theme.pallete.size.desktop};
  margin: auto;
  .logo-container {
    max-width: 187px;
    max-height: 36px;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .middle-section {
    display: flex;
    align-items: center;
  }
  .nav-list {
    list-style: none;
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.pallete.black.black.base};
    margin-right: 10px;
  }
  .nav-item {
    flex-grow: 1;
  }
  .select-language {
    border: none;
    cursor: pointer;
    margin-left: 25px;
    margin-right: 25px;
  }
  .button-nav-responsive {
    display: none;
    width: 24px;
    height: 24px;
  }
  @media ${({ theme }) => theme.pallete.device.smallDesktop} {
    justify-content: space-between;
    .nav-list {
      display: none;
    }
    .middle-section button {
      display: none;
    }
    .button-nav-responsive {
      display: block;
    }
    .nav-list-responsive {
      display: block;
    }
  }
  @media ${({ theme }) => theme.pallete.device.lagreTablet} {
    padding: 36px 16px 16px;
  }
`;

export const NavListResponsive = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.pallete.black.black.base};
`;
export const NewNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.pallete.common.white};
  padding: 24px 100px;
  .logo-container {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    img {
      max-width: 100%;
      max-height: 100%;
      margin-right: 40px;
    }
  }
  .nav-list-responsive {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    color: ${({ theme }) => theme.pallete.black.black.base};
    padding: 0;
    align-items: center;
  }
  .nav-item {
    flex-grow: 1;
  }
  button {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.pallete.common.white};
    cursor: pointer;
    font-size: 14px;
  }
  button:hover {
    color: ${({ theme }) => theme.pallete.blue.blue.main};
  }
`;
export const NavLink = styled(Link)<{
  isActive?: boolean;
  isDisabled?: boolean;
}>`
  text-decoration: none;
  font-size: ${({ theme }) => theme.pallete.typography.fontSize['lg']};
  line-height: 24px;
  transition: color 0.3s ease;
  white-space: nowrap;
  color: #20262e;
  &:hover {
    color: ${({ theme }) => theme.pallete.blue.blue.main};
    font-weight: 600;
    cursor: pointer;
  }
`;
