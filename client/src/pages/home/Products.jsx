// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { fetchProducts } from "../../components/redux/action/action";
// import { fetchProducts, getSingleProduct } from "../../components/redux/action/productAction";
// import { addToCart } from "../../components/redux/action/cartAction";
// import { useNavigate } from "react-router-dom";

// const Products = () => {
//   const allProduct=useSelector((state)=>state.productStore.products)
//   const products= allProduct && allProduct.slice(0,9)  
//   console.log("Prodfvdjnj",allProduct[0].variants);  // Only 9 products

//   const dispatch=useDispatch();
//   const navigate=useNavigate();

//   useEffect(()=>{
//     dispatch(fetchProducts());
//   },[dispatch]);
//   return (
//     <div>
//       <div className="px-32 w-[100%] py-20 flex-wrap bg-gray-100 flex gap-10">
//         {products.length>0 ? products.map((product) => (
//           <div
//             key={product._id} // Make sure to provide a unique key for each element in the array
//             className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
//           >
//             <div>
//               <img src={product.image} alt={product.name} className="w-[100%] h-70" />
//             </div>
//             <div className="py-4 px-4 bg-white">
//               <h3 className="text-lg font-semibold text-gray-600">{product.name}</h3>
//               <h3 className="text-sm text-gray-600">{product.description}</h3>
//               <p className="text-lg font-thin">₹{product.price}</p>
//               <div className="flex justify-evenly items-center">
//                 <button onClick={()=>dispatch(getSingleProduct(product._id,navigate))}>View Details</button>
//                 <button onClick={()=>dispatch(addToCart(product._id))} className="border-2 p-2 bg-amber-400 text-lg font-bold">Add To Cart</button>
//               </div>
//             </div>
//           </div>
//         )) : <div>Loading...</div>}
//       </div>

//     </div>

//   )
// }

// export default Products




import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getSingleProduct } from "../../components/redux/action/productAction";
import { addToCart } from "../../components/redux/action/cartAction";
import { Link, useNavigate } from "react-router-dom";
// import { Toaster, toast } from "sonner";
// import { Toaster } from 'react-hot-toast';

const Products = () => {
  const allProduct = useSelector((state) => state.productStore.products);
  const products = allProduct && allProduct.slice(0, 9);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartHandler=(productId,selectedVariant)=>{
    const cartData={
      productId:productId,
      selectedVariantId:selectedVariant
    }
    
    dispatch(addToCart(cartData))
  }

  return (
    <div className="w-[100%] bg-gray-100">
    {/* <Toaster /> */}
      <div className="px-32 w-[100%] py-20 flex-wra flex gap-10">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
              <div>
                <img src={product.image[0]} alt={product.name} className="w-[100%] h-96" />
              </div>
              <div className="py-4 px-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-600">{product.name}</h3>
                {/* <h3 className="text-sm text-gray-600">{product.description}</h3> */}
                {product.variants.length>0 ? 
                  <div className="flex justify-between">
                    <p className="text-md font-bold">₹ {product.variants[0].price-product.variants[0].discount}</p>
                    <p className="text-lg font-thin line-through">₹{product.variants[0].price}</p>
                  </div>
                  :
                  <p>No Variants</p>
                
                }
                <div className="flex justify-evenly items-center">
                  <button className="p-2 rounded bg-amber-400 text-md text-white " onClick={() => dispatch(getSingleProduct(product._id, navigate))}>View Details</button>
                  <button onClick={() => addToCartHandler(product._id,product.variants[0]._id)} className="px-7 py-2 rounded ml-5 bg-amber-400 text-white">Add To Cart</button>
                </div>
              </div>
            </div>
          ))
        ) : (<>

          <div>Loading...</div>
        </>
        )}
      </div>
      <div className="text-center m-5 mb-10">
            <Link to={"/products"}  className="bg-white hover:bg-amber-400 hover:text-white border-2 p-3 text-amber-400 border-amber-400 rounded">View All Products <i className="fa-solid fa-arrow-right"> {">>"}</i></Link>
        </div>
    </div>
  );
};

export default Products;










