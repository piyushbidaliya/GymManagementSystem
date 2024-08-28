import img from '../assets/gym.png';

const About = () => {
  return (
    <div>
      <div className="relative w-full">
        <img src={img} alt="About Us" className="w-full h-[600px] aspect-[2/1] object-cover" loading="lazy" />
      </div>
      
      <div className="my-8 mx-4">
        <h2 className="text-lg font-medium text-justify">
          <span className="font-bold">Vikings Gym</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit debitis magnam cupiditate id dignissimos nostrum odit a sapiente modi sed corporis earum, quisquam placeat consequatur, officia aperiam voluptatem atque?.
        </h2>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 m-4">
            <p className="text-lg font-medium"><span className="font-bold">Welcome to Vikings Gym</span></p>
            <p className="text-lg font-medium">
              At <span className="font-bold">Vikings Gym</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sint hic, eligendi libero cum alias doloremque dolor molestias ea quidem. Quidem officia architecto ex quam aliquam. Ea officiis iusto sequi!
            </p>
          </div>
          <div className="flex-1 m-4">
            <p className="text-lg font-medium"><span className="font-bold">Our Story</span></p>
            <p className="text-lg font-medium">
              <span className="font-bold">Vikings Gym</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque corporis eveniet, recusandae hic cupiditate voluptate in quisquam itaque adipisci assumenda, consequuntur quam iste, tempora sunt aperiam ex ducimus sed nesciunt..
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 mb-0 p-8">
        <h1 className="text-2xl font-semibold border-b-4 border-current mb-5 font-sans">
          <span className="font-bold">Vikings Gym</span><br/> What Sets Us Apart
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="text-center">
            <img src={img} alt="hill station" className="w-full rounded-full" loading="lazy" />
            <h2 className="text-xl font-bold mt-2">Expertise</h2>
            <p className="text-lg font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta deleniti tempore voluptates, nobis,
               dolorum at dolores dignissimos deserunt quasi velit maiores, sequi odio doloribus? Quibusdam adipisci 
               iure totam illo ipsam.
            </p>
          </div>
          <div className="text-center">
            <img src={img} alt="hill station" className="w-full rounded-full" loading="lazy" />
            <h2 className="text-xl font-bold mt-2">Comprehensive Guides</h2>
            <p className="text-lg font-medium mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eveniet qui! Quas pariatur, vero 
              laudantium ipsa aut maxime excepturi doloribus cupiditate perferendis explicabo magnam saepe quo sequi 
              ex vel dicta?
            </p>
          </div>
          <div className="text-center">
            <img src={img} alt="hill station" className="w-full rounded-full" loading="lazy" />
            <h2 className="text-xl font-bold mt-2">Community Focus</h2>
            <p className="text-lg font-medium mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit esse alias natus, illum dolore eveniet
               quod. Rerum laboriosam consequuntur incidunt ab sit laudantium dicta ipsam? Libero veniam aperiam adipisci
                dolor!
            </p>
          </div>
          <div className="text-center">
            <img src={img} alt="hill station" className="w-full rounded-full" loading="lazy" />
            <h2 className="text-xl font-bold mt-2">Health Conscious</h2>
            <p className="text-lg font-medium mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum in distinctio accusamus mollitia 
              asperiores repudiandae est quo autem sunt eos culpa ullam quos harum cumque, nam alias adipisci ipsum
               laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
