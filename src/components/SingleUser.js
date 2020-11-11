import React from "react";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";

const SingleUser = ({ user, loadUser }) => {
  return (
    <div>
      {loadUser ? (
        <Spinner type="grow" color="success" />
      ) : (
        <Card
          style={{
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardBody>
            <CardTitle tag="h5">{user.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {user.phone}
            </CardSubtitle>
            <CardText>{user.email}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default SingleUser;
