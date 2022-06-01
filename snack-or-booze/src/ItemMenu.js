import React from "react";
import { Link } from "react-router-dom";
import "./ItemMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function ItemMenu({ items, type }) {
  console.log(items);
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          {type === "snackType" ? (
            <CardTitle className="font-weight-bold text-center">
              Food Menu
            </CardTitle>
          ) : (
            <CardTitle className="font-weight-bold text-center">
              Drink Menu
            </CardTitle>
          )}

          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {type === "snackType"
              ? items.map((item) => (
                  <Link to={`/snacks/${item.id}`} key={item.id}>
                    <ListGroupItem>{item.name}</ListGroupItem>
                  </Link>
                ))
              : items.map((item) => (
                  <Link to={`/drinks/${item.id}`} key={item.id}>
                    <ListGroupItem>{item.name}</ListGroupItem>
                  </Link>
                ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemMenu;
