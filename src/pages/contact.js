import React from "react";
import {Link} from "gatsby";
import Header from "../components/header";
import Container from "../components/container";
export default function Contact(){
    return (
        <Container>
            <Link to="/">Home</Link>
            <Header herderText="Contact" />
            <p>Send us a message!</p>
        </Container>
    );
}