import { useNavigate } from "react-router-dom";

const BestSellersFromTopBrands = ({ title }) => {
  const navigate = useNavigate();

  // Static product data - no API call needed
  const products = [
    {
      id: 1,
      img: "/GenInfo/adidas.jpg",
      brand: "Adidas",
      title: "Adidas Ultraboost 22",
      sellPrice: 12999,
      category: "men"
    },
    {
      id: 2,
      img: "/GenInfo/nike.png",
      brand: "Nike",
      title: "Nike Air Max 270",
      sellPrice: 11999,
      category: "men"
    },
    {
      id: 3,
      img: "/GenInfo/skechers.jpg",
      brand: "Skechers",
      title: "Skechers Go Walk",
      sellPrice: 6999,
      category: "women"
    },
    {
      id: 4,
      img: "/GenInfo/puma.jpg",
      brand: "Puma",
      title: "Puma RS-X³",
      sellPrice: 9999,
      category: "men"
    }
  ];

  return (
    <div className="my-20">
      <p className="text-center mx-auto prose prose-2xl font-bold mb-8">{title}</p>
      <div className="flex justify-center items-center">
        <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg">
          {products.map((elem) => (
            <li className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" key={elem.id}>
              <div className="flex-shrink-0 mb-3">
                <img
                  src={elem.img}
                  alt={elem.brand}
                  className="h-32 w-32 rounded-full bg-slate-200 object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">{elem.brand}</p>
                <p className="text-sm text-gray-600 mb-1">{elem.title}</p>
                <p className="text-xl font-bold text-green-600">₹{elem.sellPrice}</p>
                <p className="text-xs text-gray-500 capitalize">{elem.category}</p>
              </div>
              <button
                onClick={() => navigate(`/product-details/${elem.id}`)}
                className="mt-3 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors duration-200"
              >
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BestSellersFromTopBrands;
