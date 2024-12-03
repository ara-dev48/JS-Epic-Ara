export const Products = ({ products, moveToCart }) => {
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((item) => (
      <div
        key={item.id}
        className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center hover:bg-gray-700 transition-colors"
      >
        <img
          src={item.photo}
          alt={item.title}
          className="w-24 h-24 rounded-full mb-4 border-4 border-purple-500"
        />
        <h2 className="text-lg font-semibold text-gray-200">
          {item.title}
        </h2>
        <p className="text-sm text-gray-400">{item.category}</p>
        <p className="text-xl font-bold mt-2 text-purple-400">
          ${item.price}
        </p>
        <button onClick = {() => moveToCart(item)} className="mt-4 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded">
          Add to Basket
        </button>
      </div>
    ))}
  </div>
}