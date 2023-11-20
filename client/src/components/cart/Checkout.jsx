// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { getAllCart } from '../redux/action/cartAction';
// import NavbarComp from '../Navbar/Navbar';


const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];




// const CheckoutPage = () => {
//   const items=useSelector((state)=>state.cartStore.items);
//   // console.log("Itemssss",items);
//   const address=useSelector((state)=>state.registeredUser.user.address);


//   const dispatch=useDispatch();

//   useEffect(()=>{
//     dispatch(getAllCart());
//   },[])

//   const [order,setOrder]=useState({});

//   return (
//     <>
//     <NavbarComp />
//       <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
//         <Link href="#" style={{fontFamily:"Cinzel"}} className=" text-2xl font-bold text-gray-800">Muscle Shark</Link>
//         <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
//           <div className="relative">
//             <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
//               <li className="flex items-center space-x-3 text-left sm:space-x-4">
//                 <a className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </a>
//                 <span className="font-semibold text-gray-900">Shop</span>
//               </li>
//               {/* Add other list items */}
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
//         <div className="px-4 pt-8">
//           <p className="text-xl font-medium">Order Summary</p>
//           <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
//           <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
//             <div className="flex flex-col rounded-lg bg-white sm:flex-row">
//               <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="/muscleshark/ms products_page-0009.jpg" alt="" />
//               <div className="flex w-full flex-col px-4 py-4">
//                 <span className="font-semibold">Pre Workout Max Pro 8888 - Super Tasty</span>
//                 <span className="float-right text-gray-400">42EU - 8.5US</span>
//                 <p className="text-lg font-bold">$138.99</p>
//               </div>
//             </div>

//             {items.map((item)=>{
//               return(
//                 <>
//                 <div className="flex flex-col rounded-lg bg-white sm:flex-row">
//               <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
//               <div className="flex w-full flex-col px-4 py-4">
//                 <span className="font-semibold">{item.name}</span>
//                 <span className="float-right text-gray-400">{item.description}</span>
//                 <p className="text-lg font-bold">{item.price}</p>
//               </div>
//             </div>
//                 </>
//               )
//             })}
//             {/* Add more product details */}
//           </div>

//           <p className="mt-8 text-lg font-medium">Select Address</p>
//           <form className="mt-5 grid gap-6">


//             <div className="relative">
//               <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
//               <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
//               <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
//                 <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
//                 <div className="ml-5">
//                   <span className="mt-2 font-semibold">{address}</span>
//                   <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
//                 </div>
//               </label>
//             </div>


//           </form>
//         </div>
//         <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
//           <p className="text-xl font-medium">Payment Details</p>
//           <p className="text-gray-400">Complete your order by providing your payment details.</p>
//           <div className="">
//             <label htmlFor="email" className="mt-4 mb-2 block text-sm font-medium">Email</label>
//             <div className="relative">
//               <input type="text" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
//               <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                 </svg>
//               </div>
//             </div>
//             <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
//             <div className="relative">
//               <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
//               <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
//                 </svg>
//               </div>
//             </div>
//             <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Card Details</label>
//             <div className="flex">
//               <div className="relative w-7/12 flex-shrink-0">
//                 <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
//                 <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
//                   <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path d="M11 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </div>
//               <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
//               <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
//             </div>

//             <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
//             <div className="flex flex-col sm:flex-row">
//               <div className="relative flex-shrink-0 sm:w-7/12">
//                 <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
//                 <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
//                   <img className="h-4 w-4 object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWDb8CsS1eka6jJZ3FVfdexwDd3XmkdHozw&usqp=CAU" alt="" />
//                 </div>
//               </div>
//               {/* <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
//                 <option value="State">State</option>
//               </select> */}
//               <select
//   type="text"
//   name="billing-state"
//   className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
// >
//   <option value="">Select State</option>
//   {indianStates.map((state, index) => (
//     <option key={index} value={state}>
//       {state}
//     </option>
//   ))}
// </select>

//               <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
//             </div>

//             {/* Total */}
//             <div className="mt-6 border-t border-b py-2">
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-medium text-gray-900">Subtotal</p>
//                 <p className="font-semibold text-gray-900">$399.00</p>
//               </div>
//               <div className="flex items-center justify-between">
//                 <p className="text-sm font-medium text-gray-900">Shipping</p>
//                 <p className="font-semibold text-gray-900">$8.00</p>
//               </div>
//             </div>
//             <div className="mt-6 flex items-center justify-between">
//               <p className="text-sm font-medium text-gray-900">Total</p>
//               <p className="text-2xl font-semibold text-gray-900">$408.00</p>
//             </div>
//           </div>
//           <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CheckoutPage;













// Import necessary libraries and components
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCart } from '../redux/action/cartAction';
import NavbarComp from '../Navbar/Navbar';
import { placeOrder } from '../redux/action/orderAction';



// CheckoutPage component
const CheckoutPage = () => {
  // Redux state and dispatch
  const items = useSelector((state) => state.cartStore.items);
  const address = useSelector((state) => state.registeredUser.user.address);
  const dispatch = useDispatch();

  // Fetch cart items on component mount
  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);

  // State for storing order data
  const [order, setOrder] = useState({});

  // Handle placing the order
  const handlePlaceOrder = () => {
    // Prepare order data
    const orderData = {
      shippingAddress: address,
      products: items.map((item) => ({
        productId: item.productId,
        variantId: item.variantId,
        quantity: item.quantity,
      })),
    };

    // Dispatch the placeOrder action
    dispatch(placeOrder(orderData));
  };

  return (
    // JSX structure for the CheckoutPage component
    <>
      {/* Navbar */}
      <NavbarComp />

      {/* Main content */}
      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <Link href="#" style={{ fontFamily: "Cinzel" }} className=" text-2xl font-bold text-gray-800">
          Muscle Sharks
        </Link>
        {/* Add your navigation links or components here */}
      </div>

      {/* Grid layout for the main content */}
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        {/* Left Side - Order Summary */}
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>

          {/* Display cart items */}
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {items.map((item) => (
              <div key={item.variantId} className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image[0]} alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">{item.name}</span>
                  <span className="float-right text-gray-400">{item.description}</span>
                  <p className="text-lg font-bold">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Display selected address */}
          <p className="mt-8 text-lg font-medium">Select Address</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              {/* Radio button for selecting the address */}
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor="radio_1"
              >
                <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">{address}</span>
                  <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                </div>
              </label>
            </div>
          </form>
        </div>

        {/* Right Side - Payment Details */}
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">Complete your order by providing your payment details.</p>


          {/* Total */}
          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Subtotal</p>
              <p className="font-semibold text-gray-900">₹399.00</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Shipping</p>
              <p className="font-semibold text-gray-900">₹10.00</p>
            </div>
            {/* Add your discount or additional charges here */}
            <div className="flex items-center justify-between mt-2">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="font-semibold text-gray-900">₹409.00</p>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring focus:border-blue-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

// Export the CheckoutPage component
export default CheckoutPage;
