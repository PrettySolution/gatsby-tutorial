import React from "react";
import Header from "../components/header";
import {Link} from "gatsby";


export default function About() {
    return (
        <div style={{color: 'teal'}}>
            <Header headerText="About Gatsby" />
            <Header headerText="it's pretty cool" />
            <p>such wow, very react.</p>
        </div>
    );
}