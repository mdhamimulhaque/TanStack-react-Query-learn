/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const getProducts = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:8000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return response?.data;
};

const ProductList = ({ onProductId }) => {
  const [page, setPage] = useState(1);
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Fetching Product Details...</div>;
  if (error) return <div>An Error Occured: {error.message}</div>;
  console.log(products);
  return (
    <div className="col-span-12 md:col-span-6">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* :CATEGORY TITLE */}
        <h2 className="text-2xl text-gray-700 font-bold">Products List</h2>

        {/* :PRODUCT LIST */}
        <div className="mt-6">
          <ul className="grid grid-cols-12 gap-3">
            {products?.data &&
              products?.data?.map((product) => (
                <li
                  key={product?.id}
                  className="col-span-full bg-white md:col-span-6 lg:col-span-4 group shadow-sm rounded border border-gray-50 hover:shadow-md"
                >
                  <div className="p-2 flex flex-col">
                    {/* ::Picture */}
                    <div className="aspect-w-1 aspect-h-1 w-full h-full overflow-hidden filter group-hover:brightness-110">
                      <img
                        src={product?.thumbnail}
                        alt={product?.title}
                        className="w-full max-h-36 object-cover object-center"
                      />
                    </div>
                    {/* ::Product Details */}
                    <div className="mt-5 pt-4 pb-2 border-t-2 border-gray-100 flex flex-col items-center">
                      {/* :::title */}
                      <h3 className="text-base text-gray-500 font-medium">
                        {product?.title}
                      </h3>

                      {/* :::price */}
                      <p className="text-lg text-gray-700 font-semibold">
                        {product?.price}$
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bg-blue-600 text-white hover:bg-blue-400 transition-all duration-300 px-8 py-3 font-semibold rounded "
                      onClick={() => onProductId(product?.id)}
                    >
                      Show Details
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        {products.prev && (
          <button
            className="px-2 py-1 text-white mx-1 bg-blue-500 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.prev)}
          >
            {" "}
            Prev{" "}
          </button>
        )}
        {products.next && (
          <button
            className="px-2 py-1 text-white mx-1 bg-blue-500 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.next)}
          >
            {" "}
            Next{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
