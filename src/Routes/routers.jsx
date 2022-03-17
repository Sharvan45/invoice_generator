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
         
            <Router>
                <div className="print_hide">
                    <Header />
                </div>
                {/* <Header auth={auth} /> */}
                <Routes>
                    <Route exact path='/lists' element={<List />} />
                    <Route exact path='/edit' element={<Edit />} />
                    <Route path='*' element={<Create />} />
                </Routes>
            </Router >
        </div>
    );
}