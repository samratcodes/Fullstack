import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({prod}) => {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.thumbnail}  style={{ height:'200px'}} />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
         {prod.description}
        </Card.Text>
        <Button variant="primary">View products</Button>
      </Card.Body>
    </Card>
  

    </>
  )
}

export default Cards
