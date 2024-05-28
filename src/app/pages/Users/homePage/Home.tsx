import About from "@/app/components/homePage/about/About";
import Banner from "@/app/components/homePage/banner/Banner";
import Billboard from "@/app/components/homePage/billboard/Billboard";
import UpdateList from "@/app/components/homePage/updatesList/UpdateList";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner />
      <About />
      <div className="bg-mainGreen">
        <div className="round-top"></div>
        <Billboard />
        <div className="round-bottom"></div>
      </div>
      <div className="bg-mainSkin">
        <UpdateList />
      </div>
    </div>
  );
};

export default Home;
