const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Drone Everest",
      price: 69,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/drone-1-48a0f287f2496f2797a23ad4e2011e29.png",
      pictureAlt: "Black drone and accessories",
      color: "Black",
    },
    {
      id: 2,
      name: "Drone Kilimanjaro",
      price: 55,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/drone-2-24ccf30292d123ee42a256eb0fc2af34.png",
      pictureAlt: "Blue drone and accessories",
      color: "Blue",
    },
    {
      id: 2,
      name: "Drone Kilimanjaro",
      price: 55,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/drone-2-24ccf30292d123ee42a256eb0fc2af34.png",
      pictureAlt: "Blue drone and accessories",
      color: "Blue",
    },
    {
      id: 2,
      name: "Drone Kilimanjaro",
      price: 55,
      href: "#link",
      picture:
        "https://fancytailwind.com/static/drone-2-24ccf30292d123ee42a256eb0fc2af34.png",
      pictureAlt: "Blue drone and accessories",
      color: "Blue",
    },
  ];

  return (
    <div className="col-span-12 md:col-span-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* :CATEGORY TITLE */}
        <h2 className="text-2xl text-gray-700 font-bold">Products List</h2>

        {/* :PRODUCT LIST */}
        <div className="mt-6">
          <ul className="grid grid-cols-12 gap-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="col-span-full bg-white md:col-span-6 lg:col-span-4 group shadow-sm rounded border border-gray-50 hover:shadow-md"
              >
                <div className="p-2 flex flex-col">
                  {/* ::Picture */}
                  <div className="aspect-w-1 aspect-h-1 w-full h-full overflow-hidden filter group-hover:brightness-110">
                    <img
                      src={product.picture}
                      alt={product.pictureAlt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {/* ::Product Details */}
                  <div className="mt-5 pt-4 pb-2 border-t-2 border-gray-100 flex flex-col items-center">
                    {/* :::title */}
                    <h3 className="text-base text-gray-500 font-medium">
                      {product.name}
                    </h3>
                    {/* :::color */}
                    <p className="text-sm text-sky-500">{product.color}</p>
                    {/* :::price */}
                    <p className="text-lg text-gray-700 font-semibold">
                      {product.price}$
                    </p>
                  </div>
                  <button
                    type="button"
                    className="bg-blue-600 text-white hover:bg-blue-400 transition-all duration-300 px-8 py-3 font-semibold rounded "
                  >
                    Show Details
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
