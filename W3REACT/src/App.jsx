import { useState } from 'react'

import './App.css'
import { Container, Row ,Col ,Button ,Card } from 'react-bootstrap'
import Header from './Compenent/Header'
import Footer from './Compenent/Footer'
import { blog } from './Data/blog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMailForward, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'

function App() {


  let headerInfo={
    name:"sudir",
    phone:"64567"
  }

  return (
    <>
      <div className='main'>
     <Header headerInfo={headerInfo} cname="sudhir.com" >
        <h1>welcome to header</h1>
        <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
        <FontAwesomeIcon icon={faPhone} className='text-danger'/>
        <FontAwesomeIcon icon={faMailForward} className='text-danger'/>
        <FontAwesomeIcon icon={faMobile} className='text-danger'/>
     </Header>

      <Container  fluid/>
      {/* <Container >
        <Row>
          <Col className='col-12 text-center py-4'>
          <h1>Our courses</h1></Col>
        </Row>
        <Row className='justify-content-center'>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col lg="3" md="6">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          {blog.map((v,i)=>{
            return(
          <ProductItem  pitems={v} key={i} />

            )
          })}
          
        </Row>
      </Container>


      <Footer />
       
      </div>
    </>
  )
}

export default App


function ProductItem({pitems}){
  return(
    <>
     <div className="col-lg-3 mb-4">
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{pitems.title}</Card.Title>
        <Card.Text>
         {pitems.body}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    </>
  )
}