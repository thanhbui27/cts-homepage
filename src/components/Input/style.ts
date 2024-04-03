import styled from 'styled-components';
import { InputProps } from '.';

export const Container = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  .label-wrap {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: baseline;

    .main-label {
      color: ${({ theme }) => theme.pallete.black.black.dark};
      font-size: ${({ theme }) => theme.pallete.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightMedium};
      font-family: ${({ theme }) => theme.pallete.typography.fontRoboto};
    }

    .sub-label {
      color: ${({ theme }) => theme.pallete.red.red.label};
      font-size: ${({ theme }) => theme.pallete.typography.fontSize.xs};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
      font-family: ${({ theme }) => theme.pallete.typography.fontNoto};
    }
  }

  input {
    position: relative;
    border: 1px solid #edeeee;
    background-color: ${({ theme }) => theme.pallete.gray.gray.bg_inline};
    border-color: ${(props) => (props.isError ? '#F21D1D' : '#edeeee')};
    padding: 12px;
    border-radius: 5px;

    &:focus {
      border: 1px solid #211f20;
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: row;
  }

  .input-wrapper input {
    flex-grow: 1;
  }
  .input-wrapper input:focus + .required_placeholder {
    display: none;
  }

  .input-wrapper input:focus + .unrequired_placeholder {
    display: none;
  }

  .input-wrapper input:valid + .required_placeholder {
    display: none;
  }

  .unrequired_placeholder,
  .required_placeholder {
    position: absolute;
    top: 30%;
    left: 10px;
    font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
    font-size: ${({ theme }) => theme.pallete.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
    color: ${({ theme }) => theme.pallete.gray.gray.light};
    font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
    line-height: 20px;
  }

  .unrequired_placeholder.hide {
    display: none;
  }

  .unrequired_placeholder.show {
    display: block;
  }

  .required_placeholder span {
    color: ${({ theme }) => theme.pallete.red.red.requiredAsterisk};
  }

  .err-message {
    color: ${({ theme }) => theme.pallete.red.red.error};
    font-size: ${({ theme }) => theme.pallete.typography.xs};
    font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
    font-family: ${({ theme }) => theme.pallete.typography.fontRoboto};
    line-height: 20px;
  }

  .required-hint {
    color: ${({ theme }) => theme.pallete.red.red.error};
    font-size: ${({ theme }) => theme.pallete.typography.xs};
    font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
  }
`;
