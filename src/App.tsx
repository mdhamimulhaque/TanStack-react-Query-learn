import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <main className="pt-10 bg-gray-100">
      <h2 className="text-3xl text-blue-500 py-5 font-bold text-center">
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
