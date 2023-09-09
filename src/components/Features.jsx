const Features = () => {
    const Details = [
      {
        id: 1,
        img: "https://picsum.photos/200/250?1",
        title: "Feature 1",
        description: "lorem2 lorem lore ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        img: "https://picsum.photos/200/250?2",
        title: "Feature 2",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        img: "https://picsum.photos/200/250?3",
        title: "Feature 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      }
    ];
  
    return (
      <div className="flex flex-col gap-2 w-[70%] mx-auto text-center my-[80px]">
        <span className="text-2xl lg:text-3xl uppercase">why choose us</span>
        <span className="text-2xl lg:text-3xl mb-6">Easy to use</span>
        <div className="flex justify-between gap-9">
          {Details.map(({ id, img, title, description }) => (
            <div key={id} className="flex flex-col gap-3 text-center">
              <img src={img} alt="" className="w-[100px] aspect-square mx-auto rounded-3xl hover:object-cover"/>
              <span className="font-semibold">{title}</span>
              <span className="">{description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  //padding wagera sb shi krni pdegi sizing shi krne ko 
  //ditto design pe n maro lekin still ek ddecent proper axi lge ui 
  
  export default Features;