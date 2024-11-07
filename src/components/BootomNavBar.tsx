import { HomeOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BottomNavBar() {
  const [activeKey, setActiveKey] = useState("home");

  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = (key: string) => {
    setActiveKey(key);
    console.log(`${key} clicked`);
    // Navigate based on the clicked key
    if (key === "home") navigate("/");
    if (key === "apps") navigate("/cart");
    if (key === "settings") navigate("/order");
  }
  return (
    <div className="fixed contentWrapper bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex justify-evenly items-center py-2 relative">
        {/* Home Icon */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeKey === "home" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleClick("home")}
        >
          <HomeOutlined className={`transition-transform ${activeKey === "home" ? "scale-110" : "scale-100"}`} style={{ fontSize: "20px" }} />
        </div>

        {/* Apps Icon */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeKey === "apps" ? "text-blue-500" : "text-gray-500"}`}
          onClick={() => handleClick("apps")}
        >
          <AppstoreOutlined className={`transition-transform ${activeKey === "apps" ? "scale-110" : "scale-100"}`} style={{ fontSize: "20px" }} />
        </div>

        {/* Settings Icon (Center icon) */}
        <div
          className={`flex flex-col items-center cursor-pointer ${activeKey === "settings" ? "text-blue-500" : "text-gray-500"} relative`}
          onClick={() => handleClick("settings")}
          
        >
          <SettingOutlined className={`transition-transform ${activeKey === "settings" ? "scale-110" : "scale-100"}`} style={{ fontSize: "20px" }} />
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
