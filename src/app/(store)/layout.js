import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

const StoreLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
};

export default StoreLayout;
