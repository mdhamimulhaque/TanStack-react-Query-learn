const ProductDetails = () => {
  return (
    <section className="col-span-12 md:col-span-4">
      <div className="flex flex-col max-w-3xl space-y-4">
        <h2 className="text-2xl text-gray-700 font-bold">Product Details</h2>
        <section>
          <img
            className="flex-shrink-0 object-cover w-full h-full rounded outline-none "
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
            alt="Polaroid camera"
          />

          <h2 className="mt-6">Title</h2>
          <div className="flex justify-between">
            <div>
              <small>Brand</small>
              <p>rating</p>
            </div>
            Price
          </div>
          <p>Description</p>
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
