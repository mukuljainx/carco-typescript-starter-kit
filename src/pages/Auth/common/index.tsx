import styled from '@yourServiceName/styled';

export const AuthPageBackground = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => `${theme.colors.baseBackground}`};
`;

export const FormBox = styled.div`
  background-color: ${({ theme }) => `${theme.colors.light}`};
  width: 420px;
  border-radius: ${({ theme }) => `${theme.constants.borderRadius.md}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px 16px 16px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;
