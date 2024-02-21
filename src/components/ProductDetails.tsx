import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getSingleProduct = async ({ queryKey }) => {
  const response = await axios.get(
    `https://dummyjson.com/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductDetails = ({ productId }) => {
  const { data: product } = useQuery({
    queryKey: ["products", productId],
    queryFn: getSingleProduct,
  });

  return (
    <section className="col-span-12 md:col-span-4">
      <div className="flex flex-col max-w-3xl space-y-4">
        <h2 className="text-2xl text-gray-700 font-bold">Product Details</h2>
        <section>
          <img
            className="flex-shrink-0 object-cover w-full h-full rounded outline-none "
            src={product?.thumbnail}
            alt={product?.title}
          />
          <div className="flex gap-2 mt-6 mb-2">
            <small className="bg-blue-300 px-2 py-1 rounded-sm">
              {product?.brand}
            </small>
            <small className="bg-red-300 px-2 py-1 rounded-sm">
              {product?.category}
            </small>
          </div>
          <h2 className=" font-semibold my-2 text-2xl">{product?.title}</h2>
          <div className="font-semibold text-red-500 font-xl">
            $ {product?.price}
          </div>
          <p>{product?.description}</p>
          <button
            type="button"
            className="bg-red-600 text-white hover:bg-red-400 transition-all duration-300 px-8 py-3 font-semibold rounded mt-8 w-full"
          >
            Delete Product
          </button>
        </section>
      </div>
    </section>
  );
};

export default ProductDetails;
