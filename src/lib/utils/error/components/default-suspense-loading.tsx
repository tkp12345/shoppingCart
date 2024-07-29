import { Spinner } from '@/ui/emotion/spinner';
import styled from '@emotion/styled';

export const DefaultSuspenseLoading = () => {
  return (
    <DefaultSuspenseLoadingLayout>
      <Spinner size={'medium'} />
    </DefaultSuspenseLoadingLayout>
  );
};

const DefaultSuspenseLoadingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
