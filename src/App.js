import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BooksInfo from "./booksInfo";
import MainPage from "./mainPage";



function App() {

  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      <Route path='/book'>
        <main>
            <BooksInfo />
        </main>
      </Route>
    </Switch>
  
  </BrowserRouter>

  )
}


export default App;
