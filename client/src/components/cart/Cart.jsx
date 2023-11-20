// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { deleteFromCart, getAllCart, updateCart } from '../redux/action/cartAction';
// import NavbarComp from '../Navbar/Navbar';

// const Cart = () => {
//   const cartProducts = useSelector((state) => state.cartStore.items);
//   const dispatch = useDispatch();
//   console.log("CART",cartProducts);

//   useEffect(() => {
//     dispatch(getAllCart());
//   }, [dispatch]);

//   const handleQuantityChange = (variantId, newQuantity) => {
//     dispatch(updateCart(variantId, newQuantity));
//   };

//   const subtotal = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     if (selectedVariant) {
//       return acc + (selectedVariant.price - selectedVariant.discount) * product.quantity;
//     }
//     return acc;
//   }, 0);

//   const discount = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     if (selectedVariant) {
//       return acc + (selectedVariant.discount * product.quantity);
//     }
//     return acc;
//   }, 0);

//   const total = subtotal - discount + 19.99;

//   return (
//     <>
//       <NavbarComp />
//       <div className="bg-gray-100 h-auto py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="md:w-3/4">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                 {cartProducts.length >= 1 ? (
//                   <table className="w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left font-semibold">Product</th>
//                         <th className="text-left font-semibold">Price</th>
//                         <th className="text-left font-semibold">Quantity</th>
//                         <th className="text-left font-semibold">Remove</th>
//                         <th className="text-left font-semibold">Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartProducts.map((product) => (
//                         <tr key={product._id}>
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <img className="h-16 w-16 mr-4" src={product.image} alt={product.name} />
//                               <span className="font-semibold">{product.name}</span>
//                             </div>
//                           </td>
//                           {product.selectedVariantDetails && (
//                             <td className="py-4">
//                               ₹{product.selectedVariantDetails.price - product.selectedVariantDetails.discount}
//                             </td>
//                           )}
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <button
//                                 className="border rounded-md py-2 px-4 mr-2"
//                                 onClick={
//                                   product.quantity > 2
//                                     ? () => handleQuantityChange(product.variantId, product.quantity - 1)
//                                     : () => handleQuantityChange(product.variantId, 1)
//                                 }
//                               >
//                                 -
//                               </button>
//                               <span className="text-center w-8">{product.quantity}</span>
//                               <button
//                                 className="border rounded-md py-2 px-4 ml-2"
//                                 onClick={() => handleQuantityChange(product.variantId, product.quantity + 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td>
//                             <button
//                               onClick={() => dispatch(deleteFromCart(product.variantId))}
//                               className="border rounded-md py-2 px-4 ml-2"
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                           </td>
//                           {console.log("productVAR",product)}
//                           {/* <td className="py-4">₹{(product.selectedVariantDetails.price * product.quantity).toFixed(2)}</td> */}
//                           <td className="py-4">₹{ (product.selectedVariantDetails.price - product.selectedVariantDetails.discount) * product.quantity.toFixed(2) }</td>


//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 ) : (
//                   <h1 className='text-lg font-bold'>Cart is Empty</h1>
//                 )}
//               </div>
//             </div>
//             <div className="md:w-1/4">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Summary</h2>
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Discount</span>
//                   <span>₹{discount}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery charge</span>
//                   <span>$19.99</span>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">Total</span>
//                   <span className="font-semibold">₹{total}</span>
//                 </div>
//                 <Link to={"/checkout"} className="bg-slate-700 text-white py-2 px-24 rounded-lg mt-4 w-[100%] ">
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;




// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { deleteFromCart, getAllCart, updateCart } from '../redux/action/cartAction';
// import NavbarComp from '../Navbar/Navbar';
// import { Toaster, toast } from 'sonner';
// import Loader from '../loader/Loader';

// const Cart = () => {
//   const cartProducts = useSelector((state) => state.cartStore.items);
//   const dispatch = useDispatch();
//   // console.log("CART", cartProducts);
//   const success=useSelector((state)=>state.cartStore.success);
//   const error=useSelector((state)=>state.cartStore.error);

//   useEffect(() => {
//     if (success) {
//       toast.success(success);
//     }
//     if (error) {
//       toast.error(error);
//     }
//   }, [success, error]);

//   useEffect(() => {
//     dispatch(getAllCart());
//   }, [dispatch]);

//   const handleQuantityChange = (variantId, newQuantity) => {
//     dispatch(updateCart(variantId, newQuantity));
//   };

//   const subtotal = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     if (selectedVariant) {
//       return acc + (selectedVariant.price - selectedVariant.discount) * product.quantity;
//     }
//     return acc;
//   }, 0);

//   const discount = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     if (selectedVariant) {
//       return acc + (selectedVariant.discount * product.quantity);
//     }
//     return acc;
//   }, 0);

//   const total = subtotal - discount + 19.99;

//   return (
//     <>
//       <NavbarComp />
//       <Toaster />
//       <div className="bg-gray-100 h-auto py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="md:w-3/4">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                 {cartProducts.length >= 1 ? (
//                   <table className="w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left font-semibold">Product</th>
//                         <th className="text-left font-semibold">Price</th>
//                         <th className="text-left font-semibold">Quantity</th>
//                         <th className="text-left font-semibold">Remove</th>
//                         <th className="text-left font-semibold">Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartProducts.map((product) => (
//                         <tr key={product._id}>
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <img className="h-16 w-16 mr-4" src={product.image[0]} alt={product.name} />
//                               <span className="font-semibold">{product.name}</span>
//                             </div>
//                           </td>
//                           {product.selectedVariantDetails && (
//                             <td className="py-4">
//                               ₹{product.selectedVariantDetails.price - product.selectedVariantDetails.discount}
//                             </td>
//                           )}
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <button
//                                 className="border rounded-md py-2 px-4 mr-2"
//                                 onClick={
//                                   product.quantity > 2
//                                     ? () => handleQuantityChange(product.variantId, product.quantity - 1)
//                                     : () => handleQuantityChange(product.variantId, 1)
//                                 }
//                               >
//                                 -
//                               </button>
//                               <span className="text-center w-8">{product.quantity}</span>
//                               <button
//                                 className="border rounded-md py-2 px-4 ml-2"
//                                 onClick={() => handleQuantityChange(product.variantId, product.quantity + 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td>
//                             <button
//                               onClick={() => dispatch(deleteFromCart(product.variantId))}
//                               className="border rounded-md py-2 px-4 ml-2"
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                           </td>
//                           {console.log("productVAR", product)}
//                           {/* <td className="py-4">₹{((product.selectedVariantDetails?.price || 0) - (product.selectedVariantDetails?.discount || 0)) * product.quantity.toFixed(2)}</td> */}
//                           <td className="py-4">₹{((product.selectedVariantDetails?.price - product.selectedVariantDetails?.discount || 0) * product.quantity).toFixed(2)}</td>

//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 ) : (
                 
//                   <Loader />
//                 )}
//               </div>
//             </div>
//             <div className="md:w-1/4">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Summary</h2>
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Discount</span>
//                   <span>₹{discount}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery charge</span>
//                   <span>$19.99</span>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">Total</span>
//                   <span className="font-semibold">₹{total}</span>
//                 </div>
//                 <Link to={"/checkout"} className="bg-slate-700 text-white py-2 px-24 rounded-lg mt-4 w-[100%] ">
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;





















// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { deleteFromCart, getAllCart, updateCart } from '../redux/action/cartAction';
// import NavbarComp from '../Navbar/Navbar';
// import { Toaster, toast } from 'sonner';
// import Loader from '../loader/Loader';

// const Cart = () => {
//   const cartProducts = useSelector((state) => state.cartStore.items);
//   const isLoading = useSelector((state) => state.cartStore.isLoading);
//   const isAuthenticated = useSelector((state) => state.registeredUser.user);
//   const dispatch = useDispatch();

//   const success = useSelector((state) => state.cartStore.success);
//   const error = useSelector((state) => state.cartStore.error);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       // Show an error toast if the user is not logged in
//       toast.error('Please log in first.');
//     }

//     if (success) {
//       toast.success(success);
//     }

//     if (error) {
//       toast.error(error);
//     }
//   }, [isAuthenticated, success, error]);

//   useEffect(() => {
//     dispatch(getAllCart());
//   }, [dispatch]);

//   const handleQuantityChange = (variantId, newQuantity) => {
//     dispatch(updateCart(variantId, newQuantity));
//   };

//   const subtotal = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     return acc + (selectedVariant?.price - selectedVariant?.discount || 0) * product.quantity;
//   }, 0);

//   const discount = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     return acc + (selectedVariant?.discount || 0) * product.quantity;
//   }, 0);

//   const total = subtotal - discount + 30.99;

//   return (
//     <>
//       <NavbarComp />
//       <Toaster />
//       <div className="bg-gray-100 h-auto py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="md:w-3/4">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                 {isLoading && <Loader />}
//                 {cartProducts.length === 0 && !isLoading ? (
//                   <p className="text-center">Your cart is empty.</p>
//                 ) : (
//                   <table className="w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left font-semibold">Product</th>
//                         <th className="text-left font-semibold">Price</th>
//                         <th className="text-left font-semibold">Quantity</th>
//                         <th className="text-left font-semibold">Remove</th>
//                         <th className="text-left font-semibold">Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartProducts.map((product) => (
//                         <tr key={product._id}>
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <img className="h-16 w-16 mr-4" src={product.image[0]} alt={product.name} />
//                               <span className="font-semibold">{product.name}</span>
//                             </div>
//                           </td>
//                           {product.selectedVariantDetails && (
//                             <td className="py-4">
//                               ₹{product.selectedVariantDetails.price - product.selectedVariantDetails.discount}
//                             </td>
//                           )}
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <button
//                                 className="border rounded-md py-2 px-4 mr-2"
//                                 onClick={
//                                   product.quantity > 2
//                                     ? () => handleQuantityChange(product.variantId, product.quantity - 1)
//                                     : () => handleQuantityChange(product.variantId, 1)
//                                 }
//                               >
//                                 -
//                               </button>
//                               <span className="text-center w-8">{product.quantity}</span>
//                               <button
//                                 className="border rounded-md py-2 px-4 ml-2"
//                                 onClick={() => handleQuantityChange(product.variantId, product.quantity + 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td>
//                             <button
//                               onClick={() => dispatch(deleteFromCart(product.variantId))}
//                               className="border rounded-md py-2 px-4 ml-2"
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                           </td>
//                           <td className="py-4">₹{((product.selectedVariantDetails?.price - product.selectedVariantDetails?.discount || 0) * product.quantity).toFixed(2)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}
//               </div>
//             </div>
//             <div className="md:w-1/4">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Summary</h2>
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Discount</span>
//                   <span>₹{discount}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery charge</span>
//                   <span>₹30.99</span>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">Total</span>
//                   <span className="font-semibold">₹{total}</span>
//                 </div>
//                 <Link to={"/checkout"} className="bg-slate-700 text-white py-2 px-24 rounded-lg mt-4 w-[100%]">
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;









// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { deleteFromCart, getAllCart, updateCart } from '../redux/action/cartAction';
// import NavbarComp from '../Navbar/Navbar';
// import { Toaster, toast } from 'sonner';
// import Loader from '../loader/Loader';
// import { applyCoupon } from '../redux/action/orderAction';

// const Cart = () => {
//   const cartProducts = useSelector((state) => state.cartStore.items);
//   const isLoading = useSelector((state) => state.cartStore.isLoading);
//   const isAuthenticated = useSelector((state) => state.registeredUser.user);
//   const appliedCouponTotal=useSelector((state)=>state.adminDetails.totalAfterAppliedCoupon);
//   console.log("cart total",appliedCouponTotal.discountedAmount);

//   const dispatch = useDispatch();

//   const success = useSelector((state) => state.cartStore.success);
//   const error = useSelector((state) => state.cartStore.error);

  

//   useEffect(() => {
//     if (!isAuthenticated) {
//       // Show an error toast if the user is not logged in
//       toast.error('Please log in first.');
//     }

//     if (success) {
//       toast.success(success);
//     }

//     if (error) {
//       toast.error(error);
//     }
//   }, [isAuthenticated, success, error]);

//   useEffect(() => {
//     dispatch(getAllCart());
//   }, [dispatch]);

//   // State to store the applied coupon
//   const [appliedCoupon, setAppliedCoupon] = useState('');

//   // Function to handle quantity change
//   const handleQuantityChange = (variantId, newQuantity) => {
//     dispatch(updateCart(variantId, newQuantity));
//   };

//   // Calculate subtotal, discount, and total
//   const subtotal = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     return acc + (selectedVariant?.price - selectedVariant?.discount || 0) * product.quantity;
//   }, 0);

//   const discount = cartProducts.reduce((acc, product) => {
//     const selectedVariant = product.selectedVariantDetails;
//     return acc + (selectedVariant?.discount || 0) * product.quantity;
//   }, 0);

//   const total = subtotal - discount + 30.99;

//   return (
//     <>
//       <NavbarComp />
//       <Toaster />
//       <div className="bg-gray-100 h-auto py-8">
//         <div className="container mx-auto px-4">
//           <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="md:w-3/4">
//               <div className="bg-white rounded-lg shadow-md p-6 mb-4">
//                 {isLoading && <Loader />}
//                 {cartProducts.length === 0 && !isLoading ? (
//                   <p className="text-center">Your cart is empty.</p>
//                 ) : (
//                   <table className="w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left font-semibold">Product</th>
//                         <th className="text-left font-semibold">Price</th>
//                         <th className="text-left font-semibold">Quantity</th>
//                         <th className="text-left font-semibold">Remove</th>
//                         <th className="text-left font-semibold">Total</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartProducts.map((product) => (
//                         <tr key={product._id}>
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <img className="h-16 w-16 mr-4" src={product.image[0]} alt={product.name} />
//                               <span className="font-semibold">{product.name}</span>
//                             </div>
//                           </td>
//                           {product.selectedVariantDetails && (
//                             <td className="py-4">
//                               ₹{product.selectedVariantDetails.price - product.selectedVariantDetails.discount}
//                             </td>
//                           )}
//                           <td className="py-4">
//                             <div className="flex items-center">
//                               <button
//                                 className="border rounded-md py-2 px-4 mr-2"
//                                 onClick={
//                                   product.quantity > 2
//                                     ? () => handleQuantityChange(product.variantId, product.quantity - 1)
//                                     : () => handleQuantityChange(product.variantId, 1)
//                                 }
//                               >
//                                 -
//                               </button>
//                               <span className="text-center w-8">{product.quantity}</span>
//                               <button
//                                 className="border rounded-md py-2 px-4 ml-2"
//                                 onClick={() => handleQuantityChange(product.variantId, product.quantity + 1)}
//                               >
//                                 +
//                               </button>
//                             </div>
//                           </td>
//                           <td>
//                             <button
//                               onClick={() => dispatch(deleteFromCart(product.variantId))}
//                               className="border rounded-md py-2 px-4 ml-2"
//                             >
//                               <i className="fa-solid fa-trash"></i>
//                             </button>
//                           </td>
//                           <td className="py-4">₹{((product.selectedVariantDetails?.price - product.selectedVariantDetails?.discount || 0) * product.quantity).toFixed(2)}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}
//               </div>
//             </div>
//             <div className="md:w-1/4">
//               <div className="bg-white rounded-lg shadow-md p-6">
//                 <h2 className="text-lg font-semibold mb-4">Summary</h2>
//                 <div className="flex justify-between mb-2">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Discount</span>
//                   <span>₹{discount}</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span>Delivery charge</span>
//                   <span>₹30.99</span>
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">Applied Coupon</span>
//                   <span>{appliedCoupon}</span>
//                 </div>
//                 <hr className="my-2" />
//                 <div className="flex justify-between mb-2">
//                   <span className="font-semibold">Total</span>
//                   {appliedCouponTotal===undefined ?
//                   <span className="font-semibold">₹{appliedCouponTotal.discountedAmount}</span>:
//                   <span className="font-semibold">₹{total}</span>
//                   }
//                 </div>
//                 <div className="flex justify-between mb-2">
//                   <input
//                     type="text"
//                     placeholder="Enter coupon code"
//                     value={appliedCoupon}
//                     onChange={(e) => setAppliedCoupon(e.target.value)}
//                     className="border rounded-md py-2 px-4 w-full"
//                   />
//                   <button onClick={()=>dispatch(applyCoupon(appliedCoupon,total))} className="bg-slate-700 text-white py-2 px-4 rounded-md ml-2">
//                     Apply Coupon
//                   </button>
//                 </div>
//                 <Link to={'/checkout'} className="bg-slate-700 text-white py-2 px-24 rounded-lg mt-4 w-[100%]">
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;





import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteFromCart, getAllCart, updateCart } from '../redux/action/cartAction';
import NavbarComp from '../Navbar/Navbar';
// import { Toaster } from 'sonner';
// import { Toaster } from 'react-hot-toast';
import Loader from '../loader/Loader';
import { applyCoupon } from '../redux/action/orderAction';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartStore.items);
  const isLoading = useSelector((state) => state.cartStore.isLoading);
  const appliedCouponTotal = useSelector((state) => state.adminDetails.discountCoupon);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  // State to store the applied coupon
  const [appliedCoupon, setAppliedCoupon] = useState('');

  // Function to handle quantity change
  const handleQuantityChange = (variantId, newQuantity) => {
    dispatch(updateCart(variantId, newQuantity));
  };

  // Function to apply the coupon
  const applyCouponHandler = () => {
    dispatch(applyCoupon(appliedCoupon, total));
  };

  // Calculate subtotal, discount, and total
  // const subtotal = cartProducts.reduce((acc, product) => {
  //   const selectedVariant = product.selectedVariantDetails;
  //   return acc + (selectedVariant?.price - selectedVariant?.discount || 0) * product.quantity;
  // }, 0);
  const subtotal = cartProducts.reduce((acc, product) => {
    const selectedVariant = product.selectedVariantDetails;
    return acc + (selectedVariant?.price || 0) * product.quantity;
  }, 0);
  


  const discount = cartProducts.reduce((acc, product) => {
    const selectedVariant = product.selectedVariantDetails;
    return acc + (selectedVariant?.discount || 0) * product.quantity;
  }, 0);

  const total = subtotal - discount + 30.99;

  return (
    <>
      <NavbarComp />
      {/* <Toaster /> */}
      <div className="bg-gray-100 h-auto py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                {isLoading && <Loader />}
                {cartProducts.length === 0 && !isLoading ? (
                  <p className="text-center">Your cart is empty.</p>
                ) : (
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Remove</th>
                        <th className="text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((product) => (
                        <tr key={product._id}>
                          <td className="py-4">
                            <div className="flex items-center">
                              <img className="h-16 w-16 mr-4" src={product.image[0]} alt={product.name} />
                              <span className="font-semibold">{product.name}</span>
                            </div>
                          </td>
                          {product.selectedVariantDetails && (
                            <td className="py-4">
                              ₹{product.selectedVariantDetails.price - product.selectedVariantDetails.discount}
                            </td>
                          )}
                          <td className="py-4">
                            <div className="flex items-center">
                              <button
                                className="border rounded-md py-2 px-4 mr-2"
                                onClick={
                                  product.quantity > 2
                                    ? () => handleQuantityChange(product.variantId, product.quantity - 1)
                                    : () => handleQuantityChange(product.variantId, 1)
                                }
                              >
                                -
                              </button>
                              <span className="text-center w-8">{product.quantity}</span>
                              <button
                                className="border rounded-md py-2 px-4 ml-2"
                                onClick={() => handleQuantityChange(product.variantId, product.quantity + 1)}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <button
                              onClick={() => dispatch(deleteFromCart(product.variantId))}
                              className="border rounded-md py-2 px-4 ml-2"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                          <td className="py-4">₹{((product.selectedVariantDetails?.price - product.selectedVariantDetails?.discount || 0) * product.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Discount</span>
                  <span>₹{discount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Delivery charge</span>
                  <span>₹30.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Applied Coupon</span>
                  <span>{appliedCoupon}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                    <span className="font-semibold">₹{total-parseInt(appliedCouponTotal)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={appliedCoupon}
                    onChange={(e) => setAppliedCoupon(e.target.value)}
                    className="border rounded-md py-2 px-4 w-full"
                  />
                  <button onClick={applyCouponHandler} className="bg-slate-700 text-white py-2 px-4 rounded-md ml-2">
                    Apply Coupon
                  </button>
                </div>
                <Link to={'/checkout'} className="bg-slate-700 text-white py-2 px-24 rounded-lg mt-4 w-[100%]">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
