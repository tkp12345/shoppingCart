import { ChangeEvent } from 'react';

export type SelectBoxTypes<T> = {
  options: T[];
  value: T;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};
