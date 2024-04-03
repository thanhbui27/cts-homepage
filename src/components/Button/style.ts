import styled from 'styled-components';

export const ButtonContent = styled.button<{
  type?: string;
  isDisable?: boolean;
  href?: string;
}>`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.pallete.blue.blue.gradientBgButton};
  color: ${({ theme }) => theme.pallete.common.white};
  font-size: ${({ theme }) => theme.pallete.typography.fontSize['base']};
  line-height: 24px;
  &:hover {
    background: ${({ theme }) => theme.pallete.blue.blue.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.pallete.blue.blue.main};
  }

  ${(props) =>
    props.type === 'secondary' &&
    `
    background: ${props.theme.pallete.common.white};
    color: ${props.theme.pallete.blue.blue.main};

    &:hover {
      background:${props.theme.pallete.blue.blue.gradientBgButton};
      color: ${props.theme.pallete.common.white};
    }

    &:active {
      background: ${props.theme.pallete.blue.blue.dark};
    }
  `}

  ${(props) =>
    props.type === 'link' &&
    `
    padding-left : 0;
    padding-right : 0;
    background: none;
    border: none;
    color: ${props.theme.pallete.blue.blue.main};

    &:hover {
      color:  ${props.theme.pallete.blue.blue.dark};
      background: transparent;
    }
    &:active {
      color:  ${props.theme.pallete.blue.blue.light};
    }
  `}

  ${(props) =>
    props.isDisable &&
    `
    background: ${props.theme.pallete.gray.gray.light};
    color :  ${props.theme.pallete.common.white};
    pointer-events: none;
  `}

  ${(props) =>
    props.isDisable &&
    props.type === 'link' &&
    `
    background : none;
    color : ${props.theme.pallete.gray.gray.light};
    pointer-events: none;
  `}
`;
