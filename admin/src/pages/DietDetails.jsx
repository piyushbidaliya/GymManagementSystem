import img from '../assets/healthy.jpg';
import img2 from '../assets/healthy2.jpg';
import img3 from '../assets/healthy3.jpg';
import img4 from '../assets/healthy4.jpg';

function DietDetails() {
  return (
    <div className='my-9 '>
        <div className="absolute top-[42%] left-0 right-0 h-24 bg-gray-500 z-0"></div>

      <div className='relative grid grid-cols-3 gap-2 max-w-[80%] m-auto'>
        <div className='flex justify-center items-center relative z-10'>
          <img src={img} alt="" className='h-[400px]' />
        </div>
        <div className=' flex justify-center items-center relative z-10'>
          <img src={img2} alt="" className='h-[300px] w-[250px]' />
        </div>
        <div className=' flex items-center relative z-10'>
          <img src={img3} alt="" className='h-[200px] w-[200px]' />
        </div>
        <div className=''>
            <h1 className='text-3xl font-bold py-2'>Diet Plan</h1>
            <p className='text-justify pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui alias culpa.
                 Quod quae corrupti adipisci facere recusandae velit deserunt. Iste quisquam perferendis nihil 
                 laborum, eveniet adipisci perspiciatis eum quasi.
            </p>
            <button className='bg-green-400 p-1 font-semibold'>Read More</button>
        </div>
        <div className='col-span-2 flex relative bottom-8 left-12'>
            <img src={img4} alt="" className='h-[250px]'/>
        </div>
      </div>
    </div>
  );
}

export default DietDetails;



