import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Drink from "./Item";
import Snack from "./Item";
import ItemMenu from "./ItemMenu";
import NotFound from "./NotFound";
import ItemForm from "./ItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }

    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getSnacks();
    getDrinks();
  }, []);
  let newDrink = {
    id: "asdfasdf",
    name: "Marsdfasdfstiasdfasdfni",
    description: "An icasdfase-cold, refreshdfsding classic.",
    recipe: "Mix 3 paasdfasdf part dry vermouth.",
    serve: "Serve vedsfasdfasdfht up.",
  };
  const createDrink = (drinkObj) => {
    setDrinks((data) => [...data, drinkObj]);
  };
  const createSnack = (snackObj) => {
    setSnacks((data) => [...data, snackObj]);
  };
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <ItemMenu items={snacks} type="snackType" />
            </Route>
            <Route exact path="/drinks">
              <ItemMenu items={drinks} type="drinkType" />
            </Route>
            <Route exact path="/drinks/:id" cantFind="/drinks">
              <Drink items={drinks} cantFind="/not-found" />
            </Route>
            <Route exact path="/snacks/:id">
              <Snack items={snacks} cantFind="/not-found" />
            </Route>
            <Route exact path="/drinks/new/drink">
              <ItemForm addFunction={createDrink} type="drink" />
            </Route>
            <Route exact path="/snacks/new/snack">
              <ItemForm addFunction={createSnack} type="snack" />
            </Route>
            <Route exact path="/not-found">
              <NotFound />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
