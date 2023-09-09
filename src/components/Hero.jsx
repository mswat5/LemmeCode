
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-2xl mb-10 text-center lg:text-left  ">
  <div className="hero-content flex-col lg:flex-row-reverse mt-[90px] gap-7">
    <img src="/src/assets/Image.png" className="max-w-sm rounded-lg " />
    <div>
      <h1 className="text-5xl font-bold">We Let You Code!</h1>
      <p className="py-6 lg:pr-8">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-secondary">Confused?</button>
    </div>
  </div>
</div>
  )
}

export default Hero