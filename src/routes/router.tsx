import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultNotFound } from "../lib/utils/error/components/default-not-found.tsx";
import { ShoppingPage } from "../page/shopping-page.tsx";
import { NavLayout } from "@/components/layout/nav-layout.tsx";
import { MainLayout } from "@/components/layout/main-layout.tsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavLayout />
      <MainLayout>
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="*" element={<DefaultNotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
