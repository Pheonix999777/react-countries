import { Route, Routes } from "react-router-dom";
import { CountryCard } from "../modules/Main/CountryCard/CountryCard";
import { MainLayout } from "../Layout/MainLayouts/MainLayout";
import { CountryDetail } from "../modules/CountryDetail";

export const Routers = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<CountryCard />} />
        <Route path="/detail/:name" element={<CountryDetail />} />
      </Route>
    </Routes>
  );
};
