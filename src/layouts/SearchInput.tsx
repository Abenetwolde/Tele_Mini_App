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
    <div className=" flex  flex-col  justify-center mt-3 gap-2 ">
    <Input.Search
    value={search} 
    //   loading={isLoading || isFetching}
      allowClear
      onSearch={(e) => {
        setSearch(e);
        // refetch();
      }}
    />
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-end justify-end">
        <Select
          onChange={(e:any) => {
            setOrder(e);
            // refetch();
          }}
          value={Order}
          defaultValue="desc"
          style={{ width: "fit-content" }}
          options={[
            { value: "asc", label: "low to high" },
            { value: "desc", label: "high to low" }
          ]}
        />
      </div>
      <Button onClick={() => setOpen(true)} icon={<SlidersOutlined />}>
      Filter
      </Button>
    </div>
    <Drawer
      extra={
        <div className="flex gap-3">
          <Button
            className="w-full"
            onClick={() => {
            //   refetch();
              setOpen(false);
            }}
            danger
            size="large">
            Remove filters
          </Button>
          <Button
            className="w-full"
            onClick={() => {
            //   refetch();
              setOpen(false);
            }}
            size="large"
            icon={<FileDoneOutlined />}>
            Apply filter
          </Button>
        </div>
      }
      title="filters"
      placement="bottom"
      onClose={() => setOpen(false)}
      width="100%"
      height="90%"
      className="rounded-t-3xl"
      open={open}>
      <div className="flex h-full w-full flex-col items-center justify-start gap-5">
        <div className="w-full">
          <Tree
            // loading={isCatLoading || isCatFetching}
            // disabled={isCatLoading || isCatFetching}
            // style={{ width: "100%" }}
            // treeData={catData}
            loading={false}
            disabled={false}
            style={{ width: "100%" }}
            treeData={[]} // 
            showLine
            defaultExpandAll
            checkable
            // onCheck={(e) => {
            //   setCategoryFilterId(e);
            // }}
            fieldNames={{
              title: "category_Name",
              key: "category_Id",
              children: "children"
            }}
            dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
            allowClear
            multiple
            selectable={false}
          />
        </div>
      </div>
    </Drawer>
  </div>
  );
}

export default SearchInput;
