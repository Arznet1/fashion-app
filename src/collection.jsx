import gallarypic1 from './assets/images/style1.jpg'
import gallarypic2 from './assets/images/style2.jpg'
import gallarypic3 from './assets/images/style3.jpg'
import gallarypic4 from './assets/images/style4.jpg'
import gallarypic5 from './assets/images/style5.jpg'
import gallarypic6 from './assets/images/style6.jpg'
import gallarypic7 from './assets/images/style7.jpg'
import gallarypic8 from './assets/images/style8.jpg'
import gallarypic9 from './assets/images/style9.jpg'

const Collection = () => {
  return (
    <section className="section-content" id='collection'>
          <h2 className='section-tittle' >collection</h2>
        <div className="collection">
    
            <div className="collection-image">
                <img src={gallarypic1} alt="image gallary" className='img-gallary'/>
                <div className='image-tittle'>
                    <h2>little looms</h2>
                    <p>price: $20</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic2} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>baby looms</h2>
                    <p>price: $40</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic3} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>season wear</h2>
                    <p>price: $15</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic4} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>hosting bloom</h2>
                    <p>price: $42</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic5} alt="image gallary" className='img-gallary'/>
                <div className='image-tittle'>
                    <h2>classic light</h2>
                    <p>price: $38</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic6} alt="image gallary" className='img-gallary'/>
                <div className='image-tittle'>
                    <h2>princess hot</h2>
                    <p>price: $99</p>
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic7} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>unisex len</h2>
                    <p>price: $48</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic8} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>grosmery time</h2>
                    <p>price: $50</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
            <div className="collection-image">
                <img src={gallarypic9} alt="image gallary" className='img-gallary' />
                <div className='image-tittle'>
                    <h2>queen day</h2>
                    <p>price: $400</p>
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                    <img src="star.svg" alt="like" className='img-like' />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Collection
