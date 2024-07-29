
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultNotFound } from '../lib/utils/error/components/default-not-found.tsx';
import {ShoppingPage} from "../page/shopping-page.tsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingPage />} />
        <Route path="*" element={<DefaultNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
