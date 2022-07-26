import React from "react";
import CatFact from "../components/CatFact";
import ListItem from "../components/ListItem";

const Home = () => {
    return (
        <div>
            <h1>Home Component</h1>
            <p>Today we will be covering:</p>
            <ListItem />
            <CatFact />
        </div>
    )
};

export default Home;