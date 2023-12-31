// const EmailVerification = () => {
//     return (
//       <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
//         <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
//           <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
//             <div className="flex flex-col items-center justify-center text-center space-y-2">
//               <div className="font-semibold text-3xl">
//                 <p>Email Verification</p>
//               </div>
//               <div className="flex flex-row text-sm font-medium text-gray-400">
//                 <p>We have sent a code to your email ba**@dipainhouse.com</p>
//               </div>
//             </div>
  
//             <div>
//               <form action="" method="post">
//                 <div className="flex flex-col space-y-16">
//                   <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
//                     <div className="w-16 h-16">
//                       <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
//                     </div>
//                     <div className="w-16 h-16">
//                       <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
//                     </div>
//                     <div className="w-16 h-16">
//                       <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
//                     </div>
//                     <div className="w-16 h-16">
//                       <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id="" />
//                     </div>
//                   </div>
//                   <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
//                     <input 
//                       className="w-full h-full flex flex-col items-center justify-center text-center px-5 p-4 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-amber-700" 
//                       type="email" 
//                       placeholder="Enter your email" 
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-5">
//                     <div>
//                       <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
//                         Verify Account
//                       </button>
//                     </div>
  
//                     <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
//                       <p>Didn{"'"}t receive code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
//                     </div>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  
//   export default EmailVerification;
  







import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyOtp } from '../../components/redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import NavbarComp from '../../components/Navbar/Navbar';
// import { Toaster } from 'sonner';
// import { Toaster } from 'react-hot-toast';

const EmailVerification = () => {
  const [formData, setFormData] = useState({
    email: '',
    otp: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const dispatch=useDispatch();
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(verifyOtp(formData,navigate))
    console.log('Email:', formData.email);
    console.log('OTP:', formData.otp);
    // Add your logic for handling the email and OTP here
  }

  return (
    <>
    <NavbarComp />
    {/* <Toaster /> */}
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email</p>
            </div>
          </div>

          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-16">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <input 
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 p-4 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-amber-700" 
                  type="email" 
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange} 
                />
              </div>
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                <input 
                  className="w-full h-full flex flex-col items-center justify-center text-center px-5 p-4 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-amber-700" 
                  type="text" 
                  placeholder="Enter OTP"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  maxLength="4" // This sets the maximum length to 4
                />
              </div>
              <div className="flex flex-col space-y-5">
                <div>
                  <button 
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-amber-500 border-none text-white text-sm shadow-sm"
                    type="submit"
                  >
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn{"'"}t receive code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default EmailVerification;
