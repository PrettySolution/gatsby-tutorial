import React from "react"
import Header from "../components/header";
import {Link} from "gatsby";
import Container from "../components/container";
export default function Home() {
  return (
      <Container>
          <Link to="/contact/">Contact</Link><br/>
          <Link to="/about-css-modules/">about-css-modules</Link>
          <Header headerText="Hello Gatsby!!!" />
          <p>What a world.</p>
          <img src="https://source.unsplash.com/random/400x200" alt=""/>
      </Container>
  );
}
