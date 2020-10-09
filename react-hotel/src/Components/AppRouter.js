import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Rent from './Rent';
import Return from './Return';
import Home from './Home';

export default function AppRouter() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                    <Home />
                    </Route>
                    <Route exact path='/rent'>
                    <Rent />
                    </Route>
                    <Route exact path='/return'>
                    <Return />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}