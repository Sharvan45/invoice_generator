import React from "react";

import "./routes.scss";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Create } from "../Pages/Create";
import { Edit } from "../Pages/Edit";
import { List } from "../Pages/List";
import Header from "../shared/header";

export const Routers = () => {
    return (
        <div className="container app">
            <div className="row text-center border-bottom print_hide"> <h3>Invoice Generator</h3></div>
            <Router>
                <div>
                    <Header />
                </div>
                {/* <Header auth={auth} /> */}
                <Routes>
                    <Route path='/lists' element={<List />} />
                    <Route path='/Edit' element={<Edit />} />
                    <Route path='*' element={<Create />} />
                </Routes>
            </Router >
        </div>
    );
}