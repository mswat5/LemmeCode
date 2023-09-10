
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-2xl mb-10 text-center lg:text-left  ">
  <div className="hero-content flex-col lg:flex-row-reverse mt-[10px] gap-7">
    <img src="https://i.ytimg.com/vi/x8wjNXGv8Bw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaBmbTKH_UlAgUH-vXpE-dI8BlYw" className="max-w-sm w-full rounded-lg shadow-2xl hover:scale-105  " />
    <div>
      <h1 className="text-5xl font-bold">We Let You Code!</h1>
      <p className="py-4  lg:pr-9">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-secondary">Confused?</button>
    </div>
  </div>
</div>
  )
}

export default Hero