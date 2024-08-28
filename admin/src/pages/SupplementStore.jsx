import Card from "../component/Card"
import img1 from '../assets/protein.jpg'
import img2 from '../assets/creatine.jpg'
import img3 from '../assets/multi.jpg'
import img4 from '../assets/fish.jpg'


function SupplementStore() {
    const cardsData = [
        { imgSrc: img1, description: 'Whey Protein' },
        { imgSrc: img1, description: 'Casein Protein' },
        { imgSrc: img1, description: 'Vegan Protein' },
      ];

      const cardsData2 = [
        { imgSrc: img2, description: 'Creatine' },
        { imgSrc: img3, description: 'Multi Vitamin' },
        { imgSrc: img4, description: 'Fish Oil' },
      ];
  return (
    <div className="m-2">
      <div className="w-1/2 m-auto mt-8">
        <h1 className="text-2xl text-center p-4">Supplements</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo excepturi possimus aspernatur.
             Quia commodi vero illo laboriosam alias aperiam quidem beatae, minima nostrum omnis pariatur 
             doloremque, inventore quos est accusantium?
        </p>
      </div>
      <div className="m-8">
      <div className='flex flex-wrap justify-center gap-4'>
          {cardsData.map((card, index) => (
            <Card key={index} imgSrc={card.imgSrc} description={card.description} />
          ))}
        </div>
        <div className='flex flex-wrap justify-center gap-4 mt-3'>
          {cardsData2.map((card, index) => (
            <Card key={index} imgSrc={card.imgSrc} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SupplementStore
