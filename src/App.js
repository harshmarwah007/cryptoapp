import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar,Exchanges,Cryptocurrencies,News,CryptoDetails,Homepage } from "./Components";
import "./App.css"
const App = () =>
{
    return (
        
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <Switch>
                        <Route exact path="/cryptocurrencies" >
                        <Cryptocurrencies/>
                        </Route>
                        <Route exact path="/exchanges" >
                        <Exchanges/>
                        </Route>
                        <Route exact path="/crypto/:coinId" >
                            <CryptoDetails/>
                        </Route>
                        <Route exact path="/news" >
                            <News/>
                        </Route>
                        <Route exact path="/" >
                            <Homepage/>
                        </Route>
                    </Switch>
                </Layout>

                <div className ="footer">
                <Typography.Title level={5} style={{color:"white" , textAlign:"center"}}>
                    Cryptom <br />
                    All rights are reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>

            </div>
            

    </div>);
}

export default App;
