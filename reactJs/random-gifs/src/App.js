
import './App.css';
import Random from './component/Random'
import Tag from './component/Tag';

function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden">
        <h1 className='bg-white  rounded-lg uppercase text-center w-11/12  mt-[40px] px-10 py-2 text-4xl font-bold '>
          random gifs
        </h1>
        <div className='w-full flex flex-col items-center gap-y-10 mt-[30px]'>
              <Random/>
              <Tag/>
        </div>
    </div>
  );
}

export default App;
