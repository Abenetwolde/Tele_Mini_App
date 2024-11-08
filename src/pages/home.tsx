import Boxes from "@containers/boxes";
import HeroSlider from "@containers/hero-slider";
import ProductNews from "@containers/product-news";
import useTelegram from "@hooks/useTelegram";


import AppHeader from "../layouts/header";
import SearchInput from "src/layouts/SearchInput";
import Ads from "@components/Ad";
import BottomNavBar from "@components/BootomNavBar";
import Categories from "@components/Category";
import { HomeOutlined,AppstoreAddOutlined,SettingOutlined } from "@ant-design/icons";
import LatestProducts from "@components/LatestProducts";

function Home() {
  const tgApp = useTelegram();
  const categoryData1 = [
    { icon: <HomeOutlined />, id: 'home' },
    { icon: <AppstoreAddOutlined />, id: 'appstore' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <SettingOutlined />, id: 'settings' },
    { icon: <HomeOutlined />, id: 'home' },
    
  ];

const sampleProductData:any = [
  {
    image: [
      'https://th.bing.com/th/id/OIP.NiY0gdy6RHB-uovs30FzXQHaHa?rs=1&pid=ImgDetMain',
      'https://static.designboom.com/wp-content/uploads/2020/10/off-white-enzo-mari-triennale-milano-hoodie-designboom-500.jpg',
      'https://th.bing.com/th/id/OIP.NiY0gdy6RHB-uovs30FzXQHaHa?rs=1&pid=ImgDetMain'
    ],
    description: "This is a sample product description. It's detailed and gives an overview of the product's features.",
    unit: '1 kg',
    more_details: {
      Manufacturer: 'Sample Brand',
      Origin: 'Made in Sample Country',
      "Best Before": '2025-12-31'
    }
  },
  {
    image: [
      'https://greendroprecycling.com/wp-content/uploads/2017/04/GreenDrop_Station_Aluminum_Can_Pepsi.jpg',
      'https://via.placeholder.com/300x300.png?text=Another+Product+2',
    ],
    description: "Another product description. This product is high quality and ideal for various uses.",
    unit: '500 g',
    more_details: {
      Manufacturer: 'Another Brand',
      Ingredients: 'Organic, Non-GMO'
    }
  }
];
  // const userId = tgApp.initDataUnsafe.user.id;
  // const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4">
      <AppHeader />
      <SearchInput/>
      <Ads/>
      <Categories title="Top Categories" categories={categoryData1}/>
      <LatestProducts products={sampleProductData}/>
      {/* <HeroSlider />
      <Boxes />
      <ProductNews /> */}
      <BottomNavBar/>
    </div>
  );
}

export default Home;
