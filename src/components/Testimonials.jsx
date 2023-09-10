
const Testimonials = () => {
  return (
    //ye parent div hai iske andr wo map krdunga and jesa usme dot wala corousel hai wesa krna hai with animations 
    <div>
      <h1 className="text-center text-4xl font-bold my-10 ">Testimonials</h1>
      <div className="testicntr">
      <div className="card card-side bg-base-100 shadow-sm w-[80%] mx-auto">
  <figure><img src="https://picsum.photos/200/250?2" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Banda 1</h2>
    <p>Bande ka Review 1</p>
    <div className="card-actions justify-start ">
      <button className="btn btn-primary">change</button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Testimonials