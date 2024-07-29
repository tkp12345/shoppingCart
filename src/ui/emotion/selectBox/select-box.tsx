import React from 'react';
import { SelectBoxTypes } from '@/ui/emotion/selectBox/select-box.types.ts';
import styled from '@emotion/styled';

export const SelectBox = <T extends string | number>({
  options,
  value,
  onChange,
}: SelectBoxTypes<T>) => {
  return (
    <Select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option === 0 ? '선택' : option}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;
