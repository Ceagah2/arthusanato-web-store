import styled from 'styled-components'
import { ProductsList } from '../constants/products'
import {theme} from '../theme'
import { Card } from './Card'
export const Products = () => {
  console.log(ProductsList)
  return(
    <ProductsContainer id='Products'>
      <ProductsTitle>Nossos Produtos</ProductsTitle>
      <ProductsDescriptionContainer>
        <ProductsDescription>
          Lindos produtos feitos com muito amor e carinho. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, harum. Iste, odit deserunt doloremque ullam fuga inventore! Temporibus cupiditate itaque quae, assumenda iste nemo est cumque dolores? Dicta, corrupti doloribus.
          Commodi asperiores explicabo accusamus tempora deleniti quisquam dolore? Culpa sapiente cupiditate delectus, veniam voluptates velit rerum odio est iste nulla debitis, explicabo error dignissimos amet, quam unde eligendi libero autem?
        </ProductsDescription>
      </ProductsDescriptionContainer>
      <ProductsContent>
        {ProductsList.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.name}
            description={product.description} 
            id={product.id}
          />
        ))}
      </ProductsContent>
    </ProductsContainer>
  ) 
}


const ProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`
const ProductsTitle = styled.h1`
  font-size: ${theme.fontSizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.brown};
  margin-bottom: 20px;
`
const ProductsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
`

const ProductsDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 20px;
`
const ProductsDescription = styled.p`
  font-size: ${theme.fontSizes.subHeading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.brown};
  text-align: center;
`