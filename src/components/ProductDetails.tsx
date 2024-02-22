import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const getSingleProduct = async ({ queryKey }) => {
  if (queryKey[1] !== null) {
    const response = await axios.get(
      `http://localhost:8000/${queryKey[0]}/${queryKey[1]}`
    );
    return response.data;
  }
};

const ProductDetails = ({ productId }) => {
  const queryClient = useQueryClient();

  const { data: product, isLoading } = useQuery({
    queryKey: ["products", productId],
    queryFn: getSingleProduct,
  });

  // ===> delete product
  const mutation = useMutation({
    mutationFn: (productId) => {
      if (confirm("Are you sure you want to delete Product?")) {
        return axios.delete(`http://localhost:8000/products/${productId}`);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products", productId]);
    },
  });

  function handleDeleteProduct(id) {
    mutation.mutate(id);
  }

  if (isLoading) return <div>Fetching Product Details...</div>;

  return (
    <section className="col-span-12 md:col-span-3">
      <div className="flex flex-col max-w-3xl space-y-4">
        <h2 className="text-2xl text-gray-700 font-bold">Product Details</h2>
        {product?.id && (
          <section>
            <img
              className="flex-shrink-0 object-cover w-full h-full rounded outline-none "
              src={product?.thumbnail}
              alt={product?.title}
            />

            <h2 className=" font-semibold my-2 text-2xl">{product?.title}</h2>
            <div className="font-semibold text-red-500 font-xl">
              $ {product?.price}
            </div>
            <p>{product?.description}</p>
            <button
              onClick={() => handleDeleteProduct(product?.id)}
              type="button"
              className="bg-red-600 text-white hover:bg-red-400 transition-all duration-300 px-8 py-3 font-semibold rounded mt-8 w-full"
            >
              Delete Product
            </button>
          </section>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
