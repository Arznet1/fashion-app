import aboutpic from './assets/images/about.jpg'
const About = () => {
  return (
    <section className="section-content" id="about">
        <div className="about-container">
            <div className="about-detail">
                <h2 className='section-tittle aboutme'>about</h2>
                <p className="about-text">
                    Welcome to sofiyat design Where Fashion Meets Innovation

                    sofiyat design is your ultimate fashion companion — designed to bring you closer to the trends you love and the styles 
                    that define you. Whether you're discovering fresh looks, shopping your favorite brands, 
                    or creating your own outfit collections, 
                    sofiyat design puts the power of fashion at your fingertips.
                     With a clean interface, smooth navigation, 
                     and a curated selection of clothing, shoes, and accessories, our app helps you express your personality through fashion — anytime, anywhere.
                </p>
            </div>
            <div className="about-image">
                <img src={aboutpic} alt="about page picture" />
            </div>
        </div>
    </section>
  )
}

export default About

