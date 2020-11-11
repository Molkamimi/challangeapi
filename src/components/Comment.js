import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const Comment = ({ comment }) => {
  return (
    <Row>
      <Col sm="6">
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardTitle tag="h5">{comment.name}</CardTitle>
          <CardText>{comment.body}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Comment;
