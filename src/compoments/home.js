import react from 'react';
import { Container, Col, Carousel } from 'react-bootstrap';
import axios from 'axios';

const home = () => {
  const[bannerList, setBanners] = react.useState([]);
  const[categoryList, setCategories] = react.useState([]);
  react.useEffect(()=>{
    const fetchData = async () =>{
        const banner = await axios.get('http://localhost:8000/banners');
        const category = await axios.get('http://localhost:8000/categories');
        setBanners(banner.data)
        setCategories(category.data)
    }
    fetchData();
  }, [])

  return (
    <div>
       <div className="banner-container">
        <Carousel>
            {
                bannerList.map((item) =>{
                    return(
                     <Carousel.Item key={item.order} className="carousel">
                        <img className="d-block w-100" src={item.bannerImageUrl} alt={item.bannerImageAlt} />
                     </Carousel.Item>
                    )
                })
            }
        </Carousel>
      </div>
      <div className='body-container'>
      {categoryList.map((item, index)=>{
        if(index % 2 === 0){
          return(
             <Container className='container-category' key={item.id}>
               <Col className='col-container-left'>
                 <img src={item.imageUrl} alt={item.key} />
               </Col>
               <Col className='col-container-right'>
                 <h2>{item.name}</h2>
                 <p>{item.description}</p>
                 <button>Explore {item.key}</button>
               </Col>
              </Container>
           )
        }else{
         return(
            <Container className='container-category' key={item.id}>
              <Col className='reverse-container-left'>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <button>Explore {item.key}</button>
              </Col>
              <Col className='reverse-container-right'>
                <img src={item.imageUrl} alt={item.key} />
              </Col>
            </Container>
         )
        }
      })}
      </div>   
    </div>
)}
export default home;