import { useState } from "react";
import { Products } from "./components/products";
import { Basket } from "./components/basket";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "https://via.placeholder.com/100",
    },
  ]);

  const [basket, setBasket] = useState([]);
  const moveToCart = product => {
    const found = basket.find(item => item.id === product.id)
    if(found){
      found.count++
      setBasket([...basket])
    }else{
      setBasket([...basket, {...product, count: 1}])
    }
  }
const quantityUp = product => {
  setBasket(basket.map(item =>
    item.id != product.id ? item: {...item, count: item.count+1}
  ))
}
const quantityDown = product => {
  setBasket(basket.map(item => {
    if(item.id === product.id && item.count > 1){
      return {...item, count: item.count-1}
    }else if(item.count == 1){
      return {...item, count: item.count-1}
    }
    return item
  }).filter(item => item.count > 0)
)
}
const deleteItem = product => {
  product.removeable = true
  setBasket(basket.filter(item => !item.removeable))
}
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-purple-400 mb-8">
        Online Shop
      </h1>
      
      {/* Products Section */}
      <Products products={products} moveToCart={moveToCart}/>
      {/* Basket Section */}
      <Basket basket={basket} quantityDown={quantityDown} quantityUp={quantityUp} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;