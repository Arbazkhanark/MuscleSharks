import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userRegistrationAction } from "../../components/redux/action/userAction";
import NavbarComp from "../../components/Navbar/Navbar";
// import { Toaster,toast } from 'sonner';
// import toast,{ Toaster } from 'react-hot-toast';

const Signup = () => {
const navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",gender:"",contact:"",address:"",email:"",password:"",confirmPassword:""
    });

    // const userResigter=useSelector((state)=>state.registeredUser.user)
    // console.log("Register user",userResigter);
    const dispatch=useDispatch();
    // console.log(user);

    // const success=useSelector((state)=>state.registeredUser.success);
    // const error=useSelector((state)=>state.registeredUser.error)
    // useEffect(() => {
    //   if (success) {
    //     toast.success(success);
    //   }
    //   if (error) {
    //     toast.error(error);
    //   }
    // }, [success, error]);

  return (
    <>
    <NavbarComp />
    {/* <Toaster /> */}
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-10 mb-20">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Register With Us
          </p>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={user.name}
              onChange={(e)=>setUser({...user,name:e.target.value})}
            />
          </div>
          <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="gender"
              >
                Gender
              </label>
              <div className="flex  justify-around">
                  <div className="flex items-center mt-2">
                    <input
                      id="male"
                      type="radio"
                      className="mr-2"
                      value="male"
                      checked={user.gender === 'male'}
                      onChange={(e) => setUser({ ...user, gender: e.target.value })}
                    />
                    <label htmlFor="male" className="text-gray-700 dark:text-gray-300">Male</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      id="female"
                      type="radio"
                      className="mr-2"
                      value="female"
                      checked={user.gender === 'female'}
                      onChange={(e) => setUser({ ...user, gender: e.target.value })}
                    />
                    <label htmlFor="female" className="text-gray-700 dark:text-gray-300">Female</label>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      id="others"
                      type="radio"
                      className="mr-2"
                      value="others"
                      checked={user.gender === 'others'}
                      onChange={(e) => setUser({ ...user, gender: e.target.value })}
                    />
                    <label htmlFor="others" className="text-gray-700 dark:text-gray-300">Others</label>
                  </div>

              </div>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="contact"
            >
              Contact No.
            </label>
            <input
              id="contact"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="tel" // Changed type to "tel" for phone numbers
              pattern="[0-9]*"
              inputMode="numeric"
              minLength="13"
              maxLength="13"
              value={user.contact}
              onChange={(e) => setUser({ ...user, contact: e.target.value })}
            />
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="address"
            >
              Address
            </label>
            <input
              id="address"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={user.address}
              onChange={(e)=>setUser({...user,address:e.target.value})}
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={user.email}
              onChange={(e)=>setUser({...user,email:e.target.value})}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={user.password}
              onChange={(e)=>setUser({...user,password:e.target.value})}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
            </div>
            <input
              id="confirmPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={user.confirmPassword}
              onChange={(e)=>setUser({...user,confirmPassword:e.target.value})}
            />
          </div>
          <div className="mt-6">
            <button onClick={()=>dispatch(userRegistrationAction(user,navigate))} className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-400 rounded-lg hover:bg-amber-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/signin"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              Already have an account
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
        <div
          className="hidden bg-cover lg:block lg:w-1/2 "
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/5327559/pexels-photo-5327559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        />
      </div>
    </>
  );
};

export default Signup;
