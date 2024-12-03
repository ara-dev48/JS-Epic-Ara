export const Basket = ({basket, quantityUp, quantityDown, deleteItem}) => {
    return <div className="mt-10">
    <h2 className="text-2xl font-bold mb-4 text-purple-400">Basket</h2>
    <table className="table-auto w-full text-left bg-gray-800 rounded-lg">
      <thead>
        <tr className="bg-gray-700 text-purple-300">
          <th className="p-2 border-b border-gray-700">Title</th>
          <th className="p-2 border-b border-gray-700">Price</th>
          <th className="p-2 border-b border-gray-700">Count</th>
          <th className="p-2 border-b border-gray-700">Subtotal</th>
          <th className="p-2 border-b border-gray-700">Actions</th>
        </tr>
      </thead>
      <tbody>
        {basket.map(item => (
          <tr
            key={item.id}
            className="hover:bg-gray-700 text-gray-300 transition-colors"
          >
            <td className="p-2">{item.title}</td>
            <td className="p-2">${item.price}</td>
            <td className="p-2">{item.count}</td>
            <td className="p-2">${item.price * item.count}</td>
            <td className="p-2">
              <button onClick={() => quantityUp(item)} className="bg-transparent-500 hover:bg-purple-500 text-white font-bold py-1 px-3 rounded">
                +
              </button>
              <button onClick={() => quantityDown(item)} className="bg-transparent-500 hover:bg-purple-500 text-white font-bold py-1 px-3 rounded">
                -
              </button>
              <button onClick={() => deleteItem(item)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}