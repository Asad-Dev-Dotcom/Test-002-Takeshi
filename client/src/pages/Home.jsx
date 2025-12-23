import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import BestSellersFromTopBrands from "../components/BestSellersFromTopBrands";
import GenInfo, { Brands } from "../components/GenInfo";

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      {/* added best sellers from top brands task 1 */}
      <BestSellersFromTopBrands title="Best Sellers" />
      <ShopBy title="Top Rated" />
    </div>
  );
};

export default Home;
