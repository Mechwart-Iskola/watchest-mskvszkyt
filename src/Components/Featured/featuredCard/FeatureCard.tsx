import './featurecard.css'


{/*Hozz létre egy típust ami alklmas a feature.json adatainak tárolására */}
import { FeatureType } from '../Featured'

{/*Egészítsd ki a komponenst a megfelelő props-ok használatával */}

const FeatureCard = (prop:FeatureType) => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src={prop.image} alt="" className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title">{prop.title}</h3>
            <span className="featured__price">${prop.price}</span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard