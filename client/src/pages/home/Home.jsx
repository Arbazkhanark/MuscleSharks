import OurProducts from "./OurProducts"
import OverviewProducts from "./OverviewProducts"
import Testimonial from "./TestReview"
import Navbar from "../../components/Navbar/Navbar"
import { Link } from "react-router-dom"
import TestReview from "../../components/testimonial/Testimonial"
// import { useSelector } from "react-redux"


const Home = () => {
    // const cartProducts=useSelector((state)=>state.cartStore.items);
  return (
    <div className="">
    <Navbar  />
       
        <div className="relative h-[550px]">
            <div className="absolute inset-0">
                <div className="w-full h-full bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat box-shadow:inset 0 0 10px 10px rgba(0, 0, 0, 0.2) after:bg-black/60 after:w-full after:h-48 after:z-00 after:blur-lg after:bottom-0 after:absolute relative">
                    <div className="text-white flex justify-between p-6 pt-20 z-100">
                        <div>
                            <button className=" bg-red-600 pl-2 pr-2 z-100">CYBER MONDAY SALE</button>
                            <h1 className="mt-5 mb-2 text-6xl font-extrabold">Boost your <br /> immune system today</h1>
                            <p className="mt-6 mb-6">24g of pure protein for enhanced lean muscle.</p>
                            <Link to={"/products"} className=" bg-amber-600 p-2 pr-4 pl-4">SHOP NOW</Link>
                        </div>
                        <div>
                            <img src="/muscleshark/heroproduct.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="absolute inset-0 bg-slate-500 opacity-50"></div> */}
            </div>
        </div>


        <OverviewProducts />
        <OurProducts />
        <Testimonial />
        <TestReview />
    </div>
  )
}

export default Home


