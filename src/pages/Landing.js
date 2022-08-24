import logo from '../assets/images/logo.jpg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
const Landing = () => {
  return ( 
  <Wrapper>
    <nav>
      <img src={logo} alt="joblane" className='logo' />
    </nav>
    <div className="container page">
      {/* info */}
      <div className="info">
        <h1> job <span> tracking</span> app
        </h1>
        <p>
        Take control of your job search with JobLane. JobLane will help you organize your prospects, so that you can pass interviews. With JobLane you'll be ready to negotiate offers in no time.
        </p>
        <button className="btn btn-hero"> Login/Register</button>
      </div>
      <img src={main} alt="job hunt" className="img main" />
    </div>
  </Wrapper>
  )
}

export default Landing
