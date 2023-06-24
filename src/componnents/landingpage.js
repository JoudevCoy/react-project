import personImg from './../assets/john-doe-image.png';
import food1 from './../assets/about-background-image.png';
import food2 from './../assets/home-banner-image.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="img2"></div>
      <div className="img1"></div>
      <div className="landing-page-content">
        <nav>
          <h1 className="navbar-brand"> LE-SPICY<span>.</span> </h1>
          <span className="fas fa-bars fa-xl btnNav"></span>
          <ul className="navbar">
            <li><a href="./#" className="navbar-link"> Home </a></li>
            <li><a href="./#" className="navbar-link"> Menu </a></li>
            <li><a href="./#" className="navbar-link"> Where Us </a></li>
            <li><a href="./#" className="navbar-link"> Contuct Us </a></li>
          </ul>
        </nav>

        {/* Bagian konten utama */}
        <div className="container">
          <div className="hero">
            <div className='personImg'>
              <img src={personImg} alt='Jhon Doe'></img>
            </div>
            <h1> Jhon Doe </h1>
            <p> Hello! Introduce me Jhon Doe, I come from Canada. I started a new business as a restaurant owner. Be the first to taste the special delicacy of our place </p>
            <div className='place'>
              <h1> Our Place </h1>
              <span>
                <p> Country: <b> The Country </b></p>
                <p> City: <b> The City </b></p>
                <p> Road: <b> City. jn.35 </b></p>
                <p> Place: <b> Restaurant </b></p>
              </span>
            </div>
          </div>
          <div className='food'>
            <h1> Popular Foods </h1>
            <div className='food-img'>
              <div>
                <img src={food1} alt='Food1' className='food1'></img>
              </div>
              <div>
                <img src={food2} alt='Food2' className='food2'></img>
              </div>
            </div>
            <div className='menu'>
              <h1> Menu </h1>
              <div className='menu-list'>
                <ul>
                  <b> Food </b>
                  <li> Menu List 1 </li>
                  <li> Menu List 1 </li>
                  <li> Menu List 1 </li>
                  <li> Menu List 1 </li>
                  <li> Menu List 1 </li>
                </ul>
                <ul>
                  <b> Drink </b>
                  <li> Menu List 2 </li>
                  <li> Menu List 2 </li>
                  <li> Menu List 2 </li>
                  <li> Menu List 2 </li>
                  <li> Menu List 2 </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage