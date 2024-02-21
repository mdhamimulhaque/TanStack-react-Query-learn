import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <main className=" bg-gray-100">
      <h2 className="text-3xl mb-5 pt-10 bg-blue-600 text-white py-12  font-bold text-center">
        Handle Api With TanStack Query and Axios
      </h2>
      <section className="grid grid-cols-12 gap-3 mx-2 md:mx-12 ">
        <ProductList />
        <ProductDetails />
      </section>
    </main>
  );
};

export default App;
