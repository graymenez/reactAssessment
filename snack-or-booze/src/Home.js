import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Home.css";

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <ul className="invetory-list">
              <h2>Inventory</h2>
              <p className="snack-title">Snacks ({snacks.length})</p>
              {snacks.map((snack) => (
                <li className="list-names">{snack.name}</li>
              ))}
              <p className="snack-title">Drinks ({drinks.length})</p>
              {drinks.map((drink) => (
                <li className="list-names">{drink.name}</li>
              ))}
            </ul>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
