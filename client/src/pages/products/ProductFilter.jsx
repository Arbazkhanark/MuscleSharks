// import { Fragment, useEffect, useState } from "react";
// import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
// import { XMarkIcon } from "@heroicons/react/24/outline";
// import {
//   ChevronDownIcon,
//   FunnelIcon,
//   MinusIcon,
//   PlusIcon,
//   Squares2X2Icon,
// } from "@heroicons/react/20/solid";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProducts, fetchSortedProducts, getSingleProduct } from "../../components/redux/action/productAction";
// import Loader from "../../components/loader/Loader"
// import SearchBar from "./SearchBar";
// import { addToCart } from "../../components/redux/action/cartAction";
// import { useNavigate } from "react-router-dom";
// import NavbarComp from "../../components/Navbar/Navbar";

// const sortOptions = [
//   { name: "Most Popular", href: "#" },
//   { name: "newest", href: "#"},
//   { name: "priceHighToLow", href: "#" },
//   { name: "priceLowToHigh", href: "#" },
//   { name: "bestRating", href: "#" },
// ];
// const subCategories = [
//   { name: "Protein", href: "#" },
//   { name: "Fat Burner", href: "#" },
//   { name: "Gym Bags", href: "#" },
//   { name: "Multivitamins", href: "#" },
//   { name: "Drinks", href: "#" },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// function ProductItems() {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
//   const products=useSelector((state)=>state.productStore.products)
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedSortOption, setSelectedSortOption] = useState("mostPopular"); // Add this state
//   const [selectedSubCategories, setSelectedSubCategories] = useState([]);

//     // Filter products based on search query
//   let filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//     const handleSortChange = (option) => {
//       setSelectedSortOption(option);
//     };


//   const dispatch=useDispatch();

//   useEffect(()=>{
//     dispatch(fetchProducts())
//   },[dispatch])



//   const handleSubCategoryChange = (categoryName) => {
//     setSelectedSubCategories((prevSelected) => {
//       if (prevSelected.includes(categoryName)) {
//         return prevSelected.filter((item) => item !== categoryName);
//       } else {
//         return [...prevSelected, categoryName];
//       }
//     });
//   };



//   useEffect(()=>{
//     dispatch(fetchSortedProducts(selectedSortOption));
//   },[selectedSortOption])

//   const navigate=useNavigate();

//   return (
//     <>
//     <NavbarComp />
//       <div className="bg-white">
//         <div>
//           {/* Mobile filter dialog */}
//           <Transition.Root show={mobileFiltersOpen} as={Fragment}>
//             <Dialog
//               as="div"
//               className="relative z-40 lg:hidden"
//               onClose={setMobileFiltersOpen}
//             >
//               <Transition.Child
//                 as={Fragment}
//                 enter="transition-opacity ease-linear duration-300"
//                 enterFrom="opacity-0"
//                 enterTo="opacity-100"
//                 leave="transition-opacity ease-linear duration-300"
//                 leaveFrom="opacity-100"
//                 leaveTo="opacity-0"
//               >
//                 <div className="fixed inset-0 bg-black bg-opacity-25" />
//               </Transition.Child>

//               <div className="fixed inset-0 z-40 flex">
//                 <Transition.Child
//                   as={Fragment}
//                   enter="transition ease-in-out duration-300 transform"
//                   enterFrom="translate-x-full"
//                   enterTo="translate-x-0"
//                   leave="transition ease-in-out duration-300 transform"
//                   leaveFrom="translate-x-0"
//                   leaveTo="translate-x-full"
//                 >
//                   <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
//                     <div className="flex items-center justify-between px-4">
//                       <h2 className="text-lg font-medium text-gray-900">
//                         Filters
//                       </h2>
//                       <button
//                         type="button"
//                         className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
//                         onClick={() => setMobileFiltersOpen(false)}
//                       >
//                         <span className="sr-only">Close menu</span>
//                         <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>
//                     </div>

//                     {/* Filters */}
//                     <form className="mt-4 border-t border-gray-200">
//                       <h3 className="sr-only">Categories</h3>
//                       <ul
//                         role="list"
//                         className="px-2 py-3 font-medium text-gray-900"
//                       >
//                         {subCategories.map((category) => (
//                             <div key={category.name} className="flex items-center">
//                               <input
//                                 id={`sub-category-${category.name}`}
//                                 name={`sub-category-${category.name}`}
//                                 type="checkbox"
//                                 checked={selectedSubCategories.includes(category.name)}
//                                 onChange={() => handleSubCategoryChange(category.name)}
//                                 className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                               />
//                               <label
//                                 htmlFor={`sub-category-${category.name}`}
//                                 className="ml-3 text-sm text-gray-600"
//                               >
//                                 {category.name}
//                               </label>
//                             </div>
//                         ))}

//                       </ul>

//                       {filters.map((section) => (
//                         <Disclosure
//                           as="div"
//                           key={section.id}
//                           className="border-t border-gray-200 px-4 py-6"
//                         >
//                           {({ open }) => (
//                             <>
//                               <h3 className="-mx-2 -my-3 flow-root">
//                                 <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
//                                   <span className="font-medium text-gray-900">
//                                     {section.name}
//                                   </span>
//                                   <span className="ml-6 flex items-center">
//                                     {open ? (
//                                       <MinusIcon
//                                         className="h-5 w-5"
//                                         aria-hidden="true"
//                                       />
//                                     ) : (
//                                       <PlusIcon
//                                         className="h-5 w-5"
//                                         aria-hidden="true"
//                                       />
//                                     )}
//                                   </span>
//                                 </Disclosure.Button>
//                               </h3>
//                               <Disclosure.Panel className="pt-6">
//                                 <div className="space-y-6">
//                                   {section.options.map((option, optionIdx) => (
//                                     <div
//                                       key={option.value}
//                                       className="flex items-center"
//                                     >
//                                       <input
//                                         id={`filter-mobile-${section.id}-${optionIdx}`}
//                                         name={`${section.id}[]`}
//                                         defaultValue={option.value}
//                                         type="checkbox"
//                                         defaultChecked={option.checked}
//                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                                       />
//                                       <label
//                                         htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
//                                         className="ml-3 min-w-0 flex-1 text-gray-500"
//                                       >
//                                         {option.label}
//                                       </label>
//                                     </div>
//                                   ))}
//                                 </div>
//                               </Disclosure.Panel>
//                             </>
//                           )}
//                         </Disclosure>
//                       ))}
//                     </form>
//                   </Dialog.Panel>
//                 </Transition.Child>
//               </div>
//             </Dialog>
//           </Transition.Root>

//           <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
//               <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//                 New Arrivals
//               </h1>

//               <div className="flex items-center">
//                 <Menu as="div" className="relative inline-block text-left">
//                   <div>
//                     <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                       Sort
//                       <ChevronDownIcon
//                         className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
//                         aria-hidden="true"
//                       />
//                     </Menu.Button>
//                   </div>

//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <div className="py-1">
//                         {sortOptions.map((option) => (
//                           <Menu.Item key={option.name}>
//                             {({ active }) => (
//                               <a
//                                 href={option.href}
//                                 className={classNames(
//                                   option.current
//                                     ? "font-medium text-gray-900"
//                                     : "text-gray-500",
//                                   active ? "bg-gray-100" : "",
//                                   "block px-4 py-2 text-sm"
//                                 )}
//                                 onClick={() => handleSortChange(option.name)}
//                               >
//                                 {option.name}
//                               </a>
//                             )}
//                           </Menu.Item>
//                         ))}
//                       </div>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>

//                 <button
//                   type="button"
//                   className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
//                 >
//                   <span className="sr-only">View grid</span>
//                   <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
//                 </button>
//                 <button
//                   type="button"
//                   className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
//                   onClick={() => setMobileFiltersOpen(true)}
//                 >
//                   <span className="sr-only">Filters</span>
//                   <FunnelIcon className="h-5 w-5" aria-hidden="true" />
//                 </button>
//               </div>
//             </div>

//             <section aria-labelledby="products-heading" className="pb-24 pt-6">
//               <h2 id="products-heading" className="sr-only">
//                 Products
//               </h2>

//               <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
//                 {/* Filters */}
//                 <form className="hidden lg:block">
//                   <h3 className="sr-only">Categories</h3>
//                   <ul
//                     role="list"
//                     className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
//                   >
//                     {subCategories.map((category) => (
//                       <div key={category.name} className="flex items-center">
//                         <input
//                           id={`sub-category-${category.name}`}
//                           name={`sub-category-${category.name}`}
//                           type="checkbox"
//                           checked={selectedSubCategories.includes(category.name)}
//                           onChange={() => handleSubCategoryChange(category.name)}
//                           className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
//                         />
//                         <label
//                           htmlFor={`sub-category-${category.name}`}
//                           className="ml-3 text-sm text-gray-600"
//                         >
//                           {category.name}
//                         </label>
//                       </div>
//                     ))}

//                   </ul>
//                 </form>

//                 {/* Product grid */}
//                 <div className="lg:col-span-3">
//                   {/* Your content */}
                  
//                   <SearchBar setSearchQuery={setSearchQuery} />

//                   <div className="bg-white">
//                     <div className="mx-auto max-w-2xl  px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                
                    
//                     <div className="flex flex-wrap">
//                         {filteredProducts.length >= 1 ? filteredProducts.map((product) => (
//                           <div key={product._id} className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-2xl">
//                             <a href="#">
//                               <img className="h-60 ml-auto mr-auto rounded-t-lg object-cover" src={product.image} alt="product image" />
//                             </a>
//                             <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-amber-400 text-center text-sm text-white">Sale</span>
//                             <div className="mt-4 px-5 pb-5">
//                               <a href="#">
//                                 <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.name}</h5>
//                               </a>
//                               <div className="mt-2.5 mb-2.5 flex items-center">
//                                 {[...Array(5)].map((_, index) => (
//                                   <svg
//                                     key={index}
//                                     aria-hidden="true"
//                                     className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                   >
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                                   </svg>
//                                 ))}
//                                 {/* Additional rating SVGs go here */}
//                                 <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span>
//                               </div>
//                               <div className="flex items-center justify-between">
//                                 <div>
//                                   <p>
//                               {/* {console.log("sdnkkj",product.variants[0].price)} */}
//                                     <span className="text-3xl font-bold text-slate-900">{product.variants[0].price - product.variants[0].discount}</span>
//                                     <span className="text-sm text-slate-900 line-through">{product.variants[0].price}</span>
//                                   </p>
//                                 </div>
//                                 <button onClick={()=>dispatch(getSingleProduct(product._id,navigate))}>View Details</button>
//                                 <button 
//                                   className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
//                                   onClick={() => dispatch(addToCart(product._id))}
//                                 >
//                                   <svg 
//                                     xmlns="http://www.w3.org/2000/svg" 
//                                     className="mr-2 h-6 w-6" 
//                                     fill="none" viewBox="0 0 24 24" 
//                                     stroke="currentColor" strokeWidth="2"
//                                   >
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//                                   </svg>
//                                   Add to cart
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         )) : <Loader className="ml-20" />}
//                     </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductItems;













import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchSortedProducts, getSingleProduct } from "../../components/redux/action/productAction";
import Loader from "../../components/loader/Loader"
import SearchBar from "./SearchBar";
import { addToCart } from "../../components/redux/action/cartAction";
import { useNavigate } from "react-router-dom";
import NavbarComp from "../../components/Navbar/Navbar";

const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "newest", href: "#"},
  { name: "priceHighToLow", href: "#" },
  { name: "priceLowToHigh", href: "#" },
  { name: "bestRating", href: "#" },
];
const subCategories = [
  { name: "Protein", href: "#" },
  { name: "Fat Burner", href: "#" },
  { name: "Gym Bags", href: "#" },
  { name: "Multivitamins", href: "#" },
  { name: "Drinks", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductItems() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const products=useSelector((state)=>state.productStore.products)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSortOption, setSelectedSortOption] = useState("mostPopular"); // Add this state
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);


    // Filter products based on search query
  let filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
    const handleSortChange = (option) => {
      setSelectedSortOption(option);
    };


  const dispatch=useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);



  const handleSubCategoryChange = (categoryName) => {
    setSelectedSubCategories((prevSelected) => {
      if (prevSelected.includes(categoryName)) {
        return prevSelected.filter((item) => item !== categoryName);
      } else {
        return [...prevSelected, categoryName];
      }
    });
  };



  useEffect(() => {
    setLoading(true);
    dispatch(fetchSortedProducts(selectedSortOption))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [selectedSortOption, dispatch]);

  const navigate=useNavigate();

  return (
    <>
    <NavbarComp />
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="mt-4 border-t border-gray-200">
                      <h3 className="sr-only">Categories</h3>
                      <ul
                        role="list"
                        className="px-2 py-3 font-medium text-gray-900"
                      >
                        {subCategories.map((category) => (
                            <div key={category.name} className="flex items-center">
                              <input
                                id={`sub-category-${category.name}`}
                                name={`sub-category-${category.name}`}
                                type="checkbox"
                                checked={selectedSubCategories.includes(category.name)}
                                onChange={() => handleSubCategoryChange(category.name)}
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <label
                                htmlFor={`sub-category-${category.name}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {category.name}
                              </label>
                            </div>
                        ))}

                      </ul>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                New Arrivals
              </h1>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                                onClick={() => handleSortChange(option.name)}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <div key={category.name} className="flex items-center">
                        <input
                          id={`sub-category-${category.name}`}
                          name={`sub-category-${category.name}`}
                          type="checkbox"
                          checked={selectedSubCategories.includes(category.name)}
                          onChange={() => handleSubCategoryChange(category.name)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`sub-category-${category.name}`}
                          className="ml-3 text-sm text-gray-600"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}

                  </ul>
                </form>

                {/* Product grid */}
                <div className="lg:col-span-3">
                  {/* Your content */}
                  
                  <SearchBar setSearchQuery={setSearchQuery} />

              
                  <div className="bg-white">
                    <div className="mx-auto max-w-2xl  px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

                    {loading ? (
  <Loader className="ml-20" />
) : filteredProducts.length >= 1 ? (
  <div className="flex flex-wrap">
    {filteredProducts.map((product) => (
      <div key={product._id} className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-2xl">
        <a href="#">
          <img className="h-60 ml-auto mr-auto rounded-t-lg object-cover" src={product.image[0]} alt="product image" />
        </a>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-amber-400 text-center text-sm text-white">Sale</span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.name}</h5>
          </a>
          <div className="mt-2.5 mb-2.5 flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p>
                <span className="text-3xl font-bold text-slate-900">{product.variants[0].price - product.variants[0].discount}</span>
                <span className="text-sm text-slate-900 line-through">{product.variants[0].price}</span>
              </p>
            </div>
            <button onClick={() => dispatch(getSingleProduct(product._id, navigate))}>View Details</button>
            <button
              className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => dispatch(addToCart(product._id))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
) : (
  <p className="text-xl text-gray-500">
    No Products Yet
  </p>
)}

                    
                 
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default ProductItems;







