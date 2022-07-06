import react from 'react';
import axios from 'axios';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Card, Button } from 'react-bootstrap';


const products = () => {
    const [id, setCategory] = react.useState(null);
    const [productData, setproductData] = react.useState([]);
    const [category, setCategoryData] = react.useState([]);
    
  react.useEffect(() => {
        const fetchData = async () => {
            const categories = await axios.get('http://localhost:8000/categories');
            setCategoryData(categories.data);
            const products = await axios.get('http://localhost:8000/products');
            filterProducts(products.data);
        };
        fetchData();
    }, [id]);

    // set category id based on menu
    const setCategoryId = (e) => {
        if (id !== e.target.id) {
            setCategory(e.target.id);
        } else {
            setCategory(null);
        }
    }

    // filter products based on menu select
    const filterProducts = (data) => {
        if (id !== null) {
            let filteredValue = data.filter((item) => item.category === id);
            setproductData(filteredValue);
        } else {
            setproductData(data);
        }
    };
    
    // mobile dropdown
  const handleProduct = () =>{
    const dropDown = document.getElementById("myDropdown");
      dropDown.classList.toggle("show");
    }
   
  // adding items to cart
  
  const buyProduct = (e) => {
     
  }

  return (
    <div className='products'> 
      <div className='products-left'>
        {category.map((item)=>{
          return(
            <div key={item.id}>
                <button
                  name={item.name}
                  tabIndex={id && id !== item.id ? -1 : 0}
                  key={item.id}  
                  id={item.id}
                  className={id === item.id ? 'focusButton' + ' product-button' : "product-button"}
                  onClick = {(e) => setCategoryId(e)} >{item.name}</button>
              <hr />
            </div>
          )
        })}
      </div>
      <div className="mobile-product">
      <div className="dropdown">
      <button onClick={handleProduct} className="dropbtn">Fruits &amp; Vegetable<IoMdArrowDropdown></IoMdArrowDropdown> </button>
       {category.map((item)=>{
          return(
               <div id="myDropdown" className="dropdown-content" key={item.name}>
                 <p key={item.id}>{item.name}</p>
               </div>
          )
        })}
      </div>
      </div>
      <div className='products-right'>
      {productData.map((itemProducts)=>{
        return(
          <Card className="product-container" key={itemProducts.id} product={itemProducts}>
            <Card.Title><p>{itemProducts.name}</p></Card.Title>
            <Card.Img variant="top" src={itemProducts.imageURL} alt={itemProducts.name} />
            <Card.Body>
             <Card.Text className="card-description">{itemProducts.description}</Card.Text>
             <div className="price-button">
               <p variant="primary">MRP Rs.{itemProducts.price}</p>
               <Button variant="primary" onClick={buyProduct}>Buy Now</Button>
             </div>
            </Card.Body>
          </Card>
         )
      })}
      </div>
    </div>
  )};

export default products;