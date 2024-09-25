import Boxes from "@containers/boxes";
import HeroSlider from "@containers/hero-slider";
import ProductNews from "@containers/product-news";
import useTelegram from "@hooks/useTelegram";

import AppHeader from "../layouts/header";
import SearchInput from "src/layouts/SearchInput";

function Home() {
  const tgApp = useTelegram();

  // const userId = tgApp.initDataUnsafe.user.id;
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <AppHeader />
      <SearchInput/>
      {/* <HeroSlider />
      <Boxes />
      <ProductNews /> */}
    </div>
  );
}

export default Home;
