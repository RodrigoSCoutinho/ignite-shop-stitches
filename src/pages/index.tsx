import { HomeContainer, Product } from '../../styles/pages/home'
import Image from 'next/future/image'
import tshirt1 from '../assets/tshirts/tshirt1.png'
import tshirt2 from '../assets/tshirts/tshirt2.png'
import tshirt3 from '../assets/tshirts/tshirt3.png'

export default function Home() {
  return (
      <HomeContainer>
        <Product>
          <Image src={tshirt1} alt={''} width={520} height={480}/>

          <footer>
            <strong> T-shirt X</strong>
            <span>  R$: 79,90</span>
          </footer>
        </Product>
        <Product>
          <Image src={tshirt2} alt={''} width={520} height={480}/>

          <footer>
            <strong> T-shirt X</strong>
            <span>  R$: 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
  )
}
