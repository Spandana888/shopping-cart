import react from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap'

const products = () => {
  const[productList, setProduct] = react.useState([]);
  const[categoryList, setCategories] = react.useState([]);
  react.useEffect(()=>{
    const fetchData = async () =>{
        const product = await axios.get('http://localhost:8000/products');
        const category = await axios.get('http://localhost:8000/categories');
        setProduct(product.data)
        setCategories(category.data)
    }
    fetchData();
  }, [])

  return (
    <div className='products'>
      <div className='products-left'>
        {categoryList.map((item)=>{
          return(
            <div key={item.id}>
              <p>{item.name}</p>
              <hr />
            </div>
          )
        })}
      </div>
      <div className='products-right'>
      {productList.map((itemProducts)=>{
        return(
          <Card className="product-container" key={itemProducts.id}>
            <Card.Title>{itemProducts.name}</Card.Title>
            <Card.Img variant="top" src={itemProducts.imageURL} alt={itemProducts.name} />
            <Card.Body>
             <Card.Text className="card-description">{itemProducts.description}</Card.Text>
             <div className="product-button">
               <p variant="primary">MRP Rs.{itemProducts.price}</p>
               <Button variant="primary">Buy Now</Button>
             </div>
            </Card.Body>
          </Card>
         )
      })}
      </div>
    </div>
  )};

export default products;