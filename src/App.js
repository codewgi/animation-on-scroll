import logo from './logo.svg';
import "./css/style.css";
import { useEffect } from 'react';

// aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({duration:1200})
  })

  return (
    <div className='w-[100%] min-h-screen grid place-items-center bg-neutral-950 gap-y-52 overflow-hidden p-28'>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
      <div className='w-80 h-96 border rounded-lg grid place-content-center' data-aos="fade-up">
        <span className='text-white'>
          box
        </span>
      </div>
    </div>
  );
}

export default App;
