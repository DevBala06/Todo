import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <>
      <div className='w-[97%] m-auto flex items-center justify-center tracking-wide py-2 '>
        <Navbar/>
       </div>
       <div className="w-[100%]  flex items-center justify-center tracking-wide py-2  text-center leading-relaxed mt-16">
        <Hero/>

       </div>
    </>
  )
}