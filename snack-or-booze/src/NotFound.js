import React from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const NotFound = () => {
  // Renders a 404 not found page when a user searches for an item that does not exist in api
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            404 Not found
          </CardTitle>
          <CardText>
            <p>Item was not found</p>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
};
export default NotFound;
