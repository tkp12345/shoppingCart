import React from "react";
import { Text } from "@/ui/emotion/text";
import styled from "@emotion/styled";

export const ProductNoData = () => {
  return (
    <ProductNoDataLayOut>
      <Text color="primary" typography="text-xl-bold">
        {"등록된 상품이 없습니다."}
      </Text>
    </ProductNoDataLayOut>
  );
};

const ProductNoDataLayOut = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
