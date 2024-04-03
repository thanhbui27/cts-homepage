import styled from 'styled-components';
import { TextAreaProps } from '.';

export const Container = styled.div<TextAreaProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;

  @media ${({ theme }) => theme.pallete.device.desktop} {
    gap: 24px;
  }

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
  }

  textarea {
    background-color: ${({ theme }) => theme.pallete.gray.gray.bg_inline};
    border-color: ${(props) => (props.isError ? '#F21D1D' : '#edeeee')};
    padding: 10px 12px 10px 12px;
    border-radius: 5px;
    height: 107px;
    overflow-y: hidden;
    resize: none;
    flex-grow: 1;
    &:focus {
      border: 1px solid #211f20;
    }
    &::placeholder {
      line-height: 22px;
      font-size: ${({ theme }) => theme.pallete.typography.fontSize.base};
      font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
      color: ${({ theme }) => theme.pallete.gray.gray.light};
      font-family: ${({ theme }) => theme.pallete.typography.fontFamily};
    }
  }

  .err-message {
    color: ${({ theme }) => theme.pallete.red.red.error};
    font-size: ${({ theme }) => theme.pallete.typography.xs};
    font-weight: ${({ theme }) => theme.pallete.typography.fontWeightRegular};
    font-family: ${({ theme }) => theme.pallete.typography.fontRoboto};
    line-height: 20px;
  }
`;
