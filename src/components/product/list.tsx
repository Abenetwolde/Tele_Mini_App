/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable object-curly-newline */
/* eslint-disable no-nested-ternary */
import {
  FileDoneOutlined,
  ReloadOutlined,
  SlidersOutlined
} from "@ant-design/icons";
import ProductsSkeleton from "@components/skeleton/products";
import { useGetCategories } from "@framework/api/categories/get";
import { useGetProducts } from "@framework/api/product/get";
import {
  Button,
  Divider,
  Drawer,
  Empty,
  Input,
  Pagination,
  Select,
  Tree
} from "antd";
import { useState } from "react";

import ProductItem from "./item";

interface Props {
  pageType: "admin" | "user";
  // data: TypeListProducts | undefined;
}
function ProductList({ pageType }: Props) {
  const [open, setOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categoryFilterId, setCategoryFilterId] = useState<number | undefined>(
    undefined
  );
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [Order, setOrder] = useState<"desc" | "asc">("desc");

  // const { data, error, refetch, isLoading, isFetching } = useGetProducts({
  //   limit: 10,
  //   page: currentPage,
  //   categoryId: categoryFilterId,
  //   name: search,
  //   order: Order
  // });
  const sampleData = {
    products: [
      {
        product_Id: "1",
        product_Name: "Product 1",
        price: 100,
        discountedPrice: 90,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 50,
        category_Id: 1
      },
      {
        product_Id: "2",
        product_Name: "Product 2",
        price: 200,
        discountedPrice: 180,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 30,
        category_Id: 2
      },
      {
        product_Id: "3",
        product_Name: "Product 3",
        price: 300,
        discountedPrice: 270,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 20,
        category_Id: 3
      },
      {
        product_Id: "4",
        product_Name: "Product 4",
        price: 400,
        discountedPrice: 360,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 10,
        category_Id: "4"
      },
      {
        product_Id: "5",
        product_Name: "Product 5",
        price: 500,
        discountedPrice: 450,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 5,
        category_Id: 5
      },
      {
        product_Id: "3",
        product_Name: "Product 3",
        price: 300,
        discountedPrice: 270,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 20,
        category_Id: 3
      },
      {
        product_Id: "4",
        product_Name: "Product 4",
        price: 400,
        discountedPrice: 360,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 10,
        category_Id: "4"
      },
      {
        product_Id: "5",
        product_Name: "Product 5",
        price: 500,
        discountedPrice: 450,
        photo_path: "https://th.bing.com/th?id=OSK.HEROvenA_m0JKiSeic_T1XD0FgIJIt67VXjNM0g_erO4Drg&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
        quantity: 5,
        category_Id: 5
      }
    
    ],
    totalRows: 5
  };
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(sampleData);
  const [error, setError] = useState(null);

  // Refetch function to simulate data fetching
  const refetch = () => {
    setIsFetching(true);
    // Simulate data fetching
    setTimeout(() => {
      setIsFetching(false);
      setData(sampleData);
    }, 1000);
  };

  // const {
  //   data: catData,
  //   isLoading: isCatLoading,
  //   isFetching: isCatFetching
  // } = useGetCategories({});
  // useEffect(() => {
  //   refetch();
  // }, [refetch, currentPage]);
  return (
    <div className="flex flex-col">
      <div className=" flex flex-col items-end justify-center gap-2 ">
        <Input.Search
          loading={isLoading || isFetching}
          allowClear
          onSearch={(e) => {
            setSearch(e);
            refetch();
          }}
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-end justify-end">
            <Select
              onChange={(e) => {
                setOrder(e);
                refetch();
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
                  refetch();
                  setOpen(false);
                }}
                danger
                size="large">
                Remove filters
              </Button>
              <Button
                className="w-full"
                onClick={() => {
                  refetch();
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
                onCheck={(e) => {
                  setCategoryFilterId(e);
                }}
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
      <Divider />
      {/* <Suspense fallback={<ProductsSkeleton />}> */}
      {/* <ProductsSkeleton /> */}
      <div className="mb-10 flex flex-wrap gap-3">
        {isLoading || isFetching ? (
          <ProductsSkeleton />
        ) : error ? (
          <div className="flex w-full flex-col items-center justify-center gap-5">
            somthing went wrong
            <Button onClick={() => refetch()} icon={<ReloadOutlined />}>
              Try again
            </Button>
          </div>
        ) : data?.products.length === 0 ? (
          <div className="flex w-full items-center justify-center">
            <Empty description="No data"/>
          </div>
        ) : (
          <>
            {data?.products.map((item) => (
              <ProductItem
                title={item.product_Name}
                price={item.price}
                imageURL={item.photo_path}
                quantity={item.quantity}
                product_Id={item.product_Id}
                discountedPrice={item.discountedPrice}
                pageType={pageType}
                url={
                  pageType === "admin"
                    ? `/admin/products/${item?.product_Id}`
                    : `/products/${item?.product_Id}`
                }
                key={item?.product_Id}
              />
            ))}
          </>
        )}
      </div>
      <Pagination
        defaultCurrent={currentPage}
        onChange={(e) => {
          setCurrentPage(e);
          refetch();
        }}
        pageSize={10}
        total={data?.totalRows}
      />
      {/* </Suspense> */}
    </div>
  );
}

export default ProductList;
