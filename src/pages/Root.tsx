import { Outlet } from "react-router-dom";
import  Footer  from "../components/Marginals/Footer";
import Header from "../components/Marginals/Header";

const RootLayout = () => {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
