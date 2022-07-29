import logo from '../assets/images/logo.jpg'
import main from '../assets/images/main.svg'
const Landing = () => {
  return (
  <main>
    <nav>
      <img src={logo} alt='joblane' className='logo' />
    </nav>
    <div className="container page">
        <div className="info">
          <h1>
            Job <span> tracking </span> App
          </h1>
          <p>
            Take control of your job search with JobLane. JobLane will help you organize your prospects, so that you can pass interviews. With JobLane you'll be ready to negotiate offers in no time.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main> 
  )
}

export default Landing