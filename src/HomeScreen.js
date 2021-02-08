import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Impuestos from "./Impuestos";
import Sueldos from "./Sueldos";
import Monotributo from "./Monotributo";
import Tramites from "./Tramites";
import Novedades from "./Novedades";
import Vencimientos from "./Vencimientos";
import Quienes from "./Quienes";
import Contactos from "./Contactos";





const HomeScreen = () => {
  return (
    <div>
      <Route path="/" exact={true}>
        <Home />
      </Route>
      <Route path="/impuestos">
        <Impuestos />
      </Route>
      <Route path="/sueldos">
        <Sueldos />
      </Route>
      <Route path="/monotributo">
        <Monotributo />
      </Route>
      <Route path="/tramites">
        <Tramites />
      </Route>
      <Route path="/novedades">
        <Novedades />
      </Route>
      <Route path="/vencimientos">
        <Vencimientos />
      </Route>
      <Route path="/quienes">
        <Quienes />
      </Route>
      <Route path="/contactos">
        <Contactos />
      </Route>
    </div>
  );
};

export default HomeScreen;
