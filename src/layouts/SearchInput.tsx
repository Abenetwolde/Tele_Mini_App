import { ShoppingCartOutlined, BellOutlined, FileDoneOutlined, SlidersOutlined } from "@ant-design/icons"; // Updated to use notification icon
import { Link } from "react-router-dom";
import { Avatar, Button, Drawer, Input, Select, Tree } from "antd";
import useTelegramUser from "@hooks/useTelegramUser";
import { useThemeParams } from "@vkruglikov/react-telegram-web-app";
import { useState } from "react";

function SearchInput() {
  const user = useTelegramUser();
  const [Order, setOrder] = useState<"desc" | "asc">("desc");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [colorScheme, themeParams] = useThemeParams();
  return (
    // <div className="flex flex-col  p-2 gap-2">
      <div className="flex w-full items-center gap-2 bg-[var(--tg-theme-secondary-bg-color)]">
        {/* Search field with 60% width */}
        <Input.Search
          allowClear
          placeholder="Search..."
          style={{ flex: 1 }} // Takes 60% of the width
          onSearch={(e) => {
            setSearch(e);
          }}
        />

       
        {/* <Select
          onChange={(e: any) => {
            setOrder(e);
          }}
          value={Order}
          defaultValue="desc"
          style={{ flex: "0 0 20%" }} // Adjust to 20% width
          options={[
            { value: "asc", label: "asc" },
            { value: "desc", label: "desc" }
          ]}
        />

 
        <Button onClick={() => setOpen(true)} icon={<SlidersOutlined />} style={{ flex: "0 0 20%" }}>

        </Button> */}
      </div>

      
  

  );
}

export default SearchInput;
