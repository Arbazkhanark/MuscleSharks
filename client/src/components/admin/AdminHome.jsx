import { useSelector } from "react-redux";
import AdminNav from "./AdminNav"
import NotAcc from "./PageNotAcc";

const Home = () => {
  const isAdmin=useSelector((state)=>state.adminDetails.admin);
  console.log("admin",isAdmin);

  const state = useSelector((state) => state);
  console.log("Redux State:", state);
    return (
      <>
      {isAdmin ?      
        <div>
          <AdminNav />
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto h-96 max-w-7xl py-6 sm:px-6 lg:px-8">
  
              <figure className="max-w-screen-md mx-auto text-center">
                  <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                      <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
         
                  <h2>MuscleSharks</h2>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <cite className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
                          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">CEO at MuscleShark</cite>
                      </div>
                  </figcaption>
              </figure>
            </div>
          </main>
      </div>:<NotAcc /> }

      </>
    )
  }
  
  export default Home;