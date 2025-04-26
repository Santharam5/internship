import React from "react";
import { Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const app = ({src,sizes}) => {
  return (
    <>
     <Container>
      <Row>
        <Col>
      <Imagetesting //parent into child using properties changes
        user={{
          imageLink:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww",
          height: 400,
          size: 200,
        }}
      />
      <Test 
      src={src}
      height={sizes}
      width={sizes}
      />
      </Col>
      </Row>
    </Container>
    </>
  );
};
export default app;
function Imagetesting({ user }) {
  return (
    <>
      <Image src={user.imageLink} height={user.height} width={user.width} />
      <p>parent to child</p>
    </>
  );
  
}
function Test(){
  return(
    <>
  <Image  
  sizes={250}
  src={"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXJsfGVufDB8fDB8fHww"}
  />
  <>child to parent</>
  </>
  )
}

