
const Testimonials = () => {
  return (
    //ye parent div hai iske andr wo map krdunga and jesa usme dot wala corousel hai wesa krna hai with animations nd same mentors me nd accordion bana dena
    <div>
      <h1 className="text-center text-4xl font-bold my-10">Testimonials</h1>
      <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://picsum.photos/200/250?2" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Testimonials