import heroimage from './assets/images/ceo.jpg'

const Hero = () => {
  return (
    <section className="hero-section">

        <div className="hero-containers">
            <div className="hero-details">
                <h2 className="tittles"><span className="hero-discover">Discover Your Style with</span> <br /> <br /><span className="logo-name"> SOFIYAT</span> <span className="design">DESIGN</span></h2>
                <p className="texts"> Elevate your everyday look with our latest collections.
                   From timeless classics to bold trends, we've got what you need to stand out.</p>
              <button className="order">order  now</button>
            </div>
        <div className="hero-image">
          <img src={heroimage} alt="ceo image" />
        </div>
            
           
            
        </div>
    </section>
    
  )
}

export default Hero