import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import React,{useState} from 'react';
import Footer from './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price: 1799,
      name:"Sakura Gellyroll Moonlight",
      quantity:0,
    },
    {
      price: 10000,
      name:"Authentic Bone Folder",
      quantity:0,
    },
    {
      price: 18999,
      name:"Schmincke Watercolor Set",
      quantity:0,
    },
    {
      price: 399,
      name:"Velvet Yarn 400gm",
      quantity:0,
    },
    {
      price: 20,
      name: "Crochet Hook 6mm",
      quantity: 0,
    },
    {
      price: 750,
      name: "Brush Pens",
      quantity: 0,
    },

  ]

  let [productList , setProductList] = useState(products)
  let [totalAmount , setTotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount+=newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if(newProductList[index].quantity === 0){
      newProductList[index].quantity = 0;
    }
    else{
        newProductList[index].quantity--;
        newtotalAmount-=newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setProductList(newProductList);
  };


  return (
    <>
     <Navbar/>
     <main className='container mt-5'>
     <AddItem addItem={addItem} />
     <ProductList productList={productList} 
     incrementQuantity={incrementQuantity} 
     decrementQuantity = {decrementQuantity}
     removeItem = {removeItem}
     />
     </main>
     <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );

  }

export default App;
