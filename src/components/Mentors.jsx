
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
    <div className="overflow-x-hidden">
        <p className="uppercase">key persons</p>
        <div className="heading flex justify-between">
            <span className="text-3xl">Meet our teachers</span>
            <div className="btns">
                <button>
                    <svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.1108 21L22.8898 28.2211L30.1108 35.4421" stroke="#E8E8F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="-0.5" y="0.5" width="55" height="55" rx="27.5" transform="matrix(-1 0 0 1 55 0)" stroke="#E8E8F6"/></svg>
</button>
                <button className="ml-4"><svg width="46" height="46" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="28" fill="#524FD5"/>
<path d="M25.8892 21L33.1102 28.2211L25.8892 35.4421" stroke="#EFF0F6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button>
            </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-4  ">
            {Mentors.map(({title, description, image,id}) => {
                return (
                    <div key={id} className="card w-[1100px] bg-base-100 shadow-xl ">
  <figure><img src={image} alt="Shoes" className="rounded-3xl object-fill"/></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className="text-sm">{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Contact</button>
    </div>
  </div>
</div>
                )
            })}
        </div>
    </div>
  )
}
export default Mentors