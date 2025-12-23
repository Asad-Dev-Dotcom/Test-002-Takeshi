import PropTypes from "prop-types";
import { arr } from "../assets/imageExport";

const ShopBy = ({ title }) => {
  const products = [
    {
      _id: "static-1",
      img: arr[0],
      title: "Premium Running Shoes",
      sellPrice: 2999,
      mrp: "₹3999",
      discount: 25,
      brand: "Nike",
      category: "men",
      rating: 4.5,
    },
    {
      _id: "static-2",
      img: arr[1],
      title: "Casual Sneakers",
      sellPrice: 1999,
      mrp: "₹2999",
      discount: 33,
      brand: "Adidas",
      category: "women",
      rating: 4.2,
    },
    {
      _id: "static-3",
      img: arr[2],
      title: "Sport Shoes",
      sellPrice: 2499,
      mrp: "₹3499",
      discount: 29,
      brand: "Puma",
      category: "men",
      rating: 4.3,
    },
    {
      _id: "static-4",
      img: arr[3],
      title: "Comfort Walking Shoes",
      sellPrice: 1799,
      mrp: "₹2599",
      discount: 31,
      brand: "Skechers",
      category: "women",
      rating: 4.1,
    },
    {
      _id: "static-5",
      img: arr[4],
      title: "Kids Sports Shoes",
      sellPrice: 1499,
      mrp: "₹1999",
      discount: 25,
      brand: "Nike",
      category: "child",
      rating: 4.4,
    },
  ];

  const getCategoryText = (category) => {
    switch (category) {
      case "child":
        return "Kids";
      case "men":
        return "Men's";
      case "women":
        return "Women's";
      default:
        return "Unisex";
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <div className="w-full max-w-screen-xl">
        <p className="prose prose-2xl font-bold mb-8 text-center mx-auto">{title}</p>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-200 p-4 relative group"
            >
              {/* Wishlist button */}
              <button className="absolute top-2 left-2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm hover:shadow-md transition-shadow">
                🤍
              </button>

              {/* Product image */}
              <div className="aspect-square mb-3 overflow-hidden rounded-md">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              {/* Product title */}
              <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Product category and brand */}
              <div className="flex items-center justify-between text-gray-500 text-xs mb-2">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {getCategoryText(product.category)} Shoes
                </span>
                <span className="font-medium">{product.brand}</span>
              </div>

              {/* Product price, MRP, and discount */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-gray-900">
                  ₹{new Intl.NumberFormat("en-IN").format(product.sellPrice)}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  {product.mrp}
                </span>
                <span className="text-sm text-red-600 font-medium">
                  {product.discount}% off
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ShopBy.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ShopBy;
