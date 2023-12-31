// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Toaster } from "sonner";
// import { addProduct } from "../../redux/action/adminAction";
// import Variant from "./Variant";

// const AddProduct = () => {
//   const cloudinaryRef = useRef();
//   const [imageLink, setImageLink] = useState("");
//   const [product, setProduct] = useState({
//     name: "",
//     description: "",
//     category: "",
//     variants: [],
//   });
//   const [variants, setVariants] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     setProduct({ ...product, variants: [...variants] });
//   }, [variants]);

//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//   }, []);

//   const uploadImage = (e) => {
//     e.preventDefault();

//     const widgetRef = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "dgiw5xfpq",
//         uploadPreset: "gwjd8x4l",
//       },
//       function (error, result) {
//         if (result.event === "success") {
//           setProduct((prevProduct) => ({
//             ...prevProduct,
//             image: result.info.secure_url,
//           }));
//           setImageLink(result.info.secure_url);
//         }
//       }
//     );

//     widgetRef.open();
//   };

//   return (
//     <div className="mt-20 mr-auto ml-auto w-[70%]">
//       <div className="flex flex-wrap -mx-3 mb-6">
//         <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//           <label
//             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//             htmlFor="name"
//           >
//             Product Name
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//             id="name"
//             type="text"
//             placeholder="Jane"
//             onChange={(e) =>
//               setProduct({ ...product, name: e.target.value })
//             }
//           />
//           <p className="text-amber-600 text-xs italic">
//             Please fill out this field.
//           </p>
//         </div>
//         <div className="w-full md:w-1/2 px-3">
//           <label
//             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//             htmlFor="description"
//           >
//             Description
//           </label>
//           <input
//             className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//             id="description"
//             type="text"
//             placeholder="Description of the Product"
//             onChange={(e) =>
//               setProduct({ ...product, description: e.target.value })
//             }
//           />
//           <p className="text-gray-600 text-xs italic">
//             Make it as long and as crazy as you{"'"}d like
//           </p>
//         </div>
//       </div>
//       <div className="flex flex-wrap -mx-3 mb-2">
//         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//           <img src={imageLink} alt="/image" />
//           <button
//             type="button"
//             className="bg-slate-700 hover:bg-slate-800 p-2 text-white rounded"
//             onClick={uploadImage}
//           >
//             Upload Image
//           </button>
//         </div>
//         <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//           <label
//             className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//             htmlFor="category"
//           >
//             Category
//           </label>
//           <div className="relative">
//             <select
//               className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//               id="category"
//               onChange={(e) =>
//                 setProduct({ ...product, category: e.target.value })
//               }
//             >
//               <option>Protein Supplements</option>
//               <option>Amino Acids and BCAAs</option>
//               <option>Pre-Workout Supplements</option>
//               <option>Post-Workout Recovery Supplements</option>
//               <option>Fat Burners and Weight Loss Supplements</option>
//               <option>Vitamins and Minerals</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <svg
//                 className="fill-current h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Variant variants={variants} setVariants={setVariants} />

//       <div className=" text-center mt-8">
//         <button
//           type="button"
//           className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
//           onClick={() => dispatch(addProduct(product))}
//         >
//           Add Product
//         </button>
//       </div>

//       <Toaster />
//     </div>
//   );
// };

// export default AddProduct;









import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
// import { Toaster } from "sonner";
// import { Toaster } from 'react-hot-toast';
import { addProduct } from "../../redux/action/adminAction";
import Variant from "./Variant";

const AddProduct = () => {
  const cloudinaryRef = useRef();
  const [imageLinks, setImageLinks] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    image: [],
    variants: [],
  });
  // console.log("IMG",product.images);
  const [variants, setVariants] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setProduct({ ...product, variants: [...variants] });
  }, [variants]);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();

    if (!cloudinaryRef.current) {
      console.error("Cloudinary not initialized");
      return;
    }

    const widgetRef = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dgiw5xfpq",
        uploadPreset: "gwjd8x4l",
      },
      function (error, result) {
        if (result.event === "success") {
          setImageLinks((prevLinks) => [...prevLinks, result.info.secure_url]);
          setProduct((prevProduct) => ({
            ...prevProduct,
            image: [...prevProduct.image, result.info.secure_url],
          }));
        }
      }
    );

    widgetRef.open();
  };

  return (
    <>
    {/* <Toaster /> */}
      <div className="mt-20 mr-auto ml-auto w-[70%]">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              type="text"
              placeholder="Jane"
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
            />
            <p className="text-amber-600 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="description"
              type="text"
              placeholder="Description of the Product"
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
            <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you{"'"}d like
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            {imageLinks.map((link, index) => (
              <img key={index} src={link} alt={`Product Image ${index + 1}`} />
            ))}
            <button
              type="button"
              className="bg-slate-700 hover:bg-slate-800 p-2 text-white rounded"
              onClick={uploadImage}
            >
              Upload Image
            </button>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="category"
                onChange={(e) =>
                  setProduct({ ...product, category: e.target.value })
                }
              >
                <option>Protein Supplements</option>
                <option>Amino Acids and BCAAs</option>
                <option>Pre-Workout Supplements</option>
                <option>Post-Workout Recovery Supplements</option>
                <option>Fat Burners and Weight Loss Supplements</option>
                <option>Vitamins and Minerals</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <Variant variants={variants} setVariants={setVariants} />

        <div className=" text-center mt-8">
          <button
            type="button"
            className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
            onClick={() => dispatch(addProduct(product))}
          >
            Add Product
          </button>
        </div>

        {/* <Toaster /> */}
      </div>
    </>
  );
};

export default AddProduct;
