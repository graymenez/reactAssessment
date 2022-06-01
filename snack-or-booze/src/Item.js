import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

const Item = ({ items, cantFind }) => {
  console.log(items);
  //Will render drinks or snacks depending on whats in the "items" prop
  const { id } = useParams();
  let item = items.find((item) => item.id === id);
  // Renders info of an item by id
  if (!item) return <Redirect to={cantFind} />;
  // If item not found the redirects to "cantFind" prop
  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText>
            <p>
              <b>Recipe: </b>
              {item.recipe}
            </p>
            <p>
              <b>Serve: </b>
              {item.serve}
            </p>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
};
export default Item;
