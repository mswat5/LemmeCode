
const Mentors = () => {
    const Mentors = [
        {
          "id": 1,
          "title": "Product 1",
          "description": "Awesome Item",
          "image": "https://picsum.photos/200/250?1"
        },
        {
          "id": 2,
          "title": "Product 2",
          "description": "Cool Stuff",
          "image": "https://picsum.photos/200/250?2"
        },
        {
          "id": 3,
          "title": "Product 3",
          "description": "Nice Product",
          "image": "https://picsum.photos/200/250?3"
        },
        {
          "id": 4,
          "title": "Product 4",
          "description": "Great Thing",
          "image": "https://picsum.photos/200/250?4"
        },
        {
          "id": 5,
          "title": "Product 5",
          "description": "Amazing Item",
          "image": "https://picsum.photos/200/250?5"
        }
      ]
  return (
    <div className="overflow-x-auto">
       <div className="flex flex-col items-center mb-5">
       <p className="uppercase">key&nbsp;persons</p>
        <span className="text-3xl">Meet our teachers</span>
       </div>
        <div className="flex flex-row overflow-x-scroll gap-4 items-center  w-[80%] lg:w-[60%] mx-auto ">
            {Mentors.map(({title, description, image,id}) => {
                return (
                    <div key={id} className="card bg-base-100 shadow-2xl ">
  <figure><img src={image} alt="Shoes" className="  rounded-3xl w-[90%] h-[90%] m-auto"/></figure>
  <div className="card-body">
    <span className="card-title absolute top-36 left-8 text-white ">{title}</span>
    {/* title wale ko pic me adustment ka puxna hai */}
    <p className="text-sm">{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary scale-75">Contact</button>
    </div>
  </div>
</div>
                )
            })}
            <span className="rounded-xl bg-blue-700 text-white py-2 px-4 rounded00">Show&nbsp;More</span>
        </div>
    </div>
  )
}
export default Mentors