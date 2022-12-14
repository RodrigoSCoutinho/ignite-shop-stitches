import { HomeContainer, Product } from '../../styles/pages/home'
import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'
import tshirt1 from '../assets/tshirts/tshirt1.png'
// import tshirt2 from '../assets/tshirts/tshirt2.png'
// import tshirt3 from '../assets/tshirts/tshirt3.png'

import 'keen-slider/keen-slider.min.css';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={tshirt1} alt={''} width={520} height={480}/>

          <footer>
               <strong> T-shirt X</strong>
               <span>  R$: 79,90</span>
               </footer>
        </Product>
      
        <Product className="keen-slider__slide">
          <Image src={tshirt1} alt={''} width={520} height={480}/>

          <footer>
               <strong> T-shirt X</strong>
               <span>  R$: 79,90</span>
          </footer>
        </Product>
      
        <Product className="keen-slider__slide">
          <Image src={tshirt1} alt={''} width={520} height={480}/>

          <footer>
               <strong> T-shirt X</strong>
               <span>  R$: 79,90</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide">
          <Image src={tshirt1} alt={''} width={520} height={480}/>

          <footer>
               <strong> T-shirt X</strong>
               <span>  R$: 79,90</span>
          </footer>
        </Product>

      </HomeContainer>
  )
}
