


function Card({imgSrc, description}) {
  return (
    <div className='max-w-[400px] max-h-[400px] bg-slate-300 rounded-lg'>
      <div>
        <img src={imgSrc} alt="supplement" className='rounded-t-lg'/>
      </div>
      <div className='text-center pb-1'>
        <p className='pb-1'>{description}</p>
        <button className='bg-green-400 rounded-full px-7 text-center'>View Details</button>
      </div>
    </div>
  )
}

export default Card
