import styled from "@emotion/styled";

export const MainLayout = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  width: 100%;
  // padding: ${({ theme }) => theme.spacing.margin};
  text-align: center;

  /* 1920px 이상일 때 */
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.desktop};
    margin-left: auto;
    margin-right: auto;
  }

  /* 1400px 이상일 때 */
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (max-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  /* 1024px 이상일 때 */
  @media (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    max-width: ${({ theme }) => theme.breakpoints.tablet};
  }

  /* 1023px 이하일 때 */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    max-width: ${({ theme }) => theme.breakpoints.mobile};
    gap: 1rem;

    .floating-filter {
      display: block;
      position: fixed;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
