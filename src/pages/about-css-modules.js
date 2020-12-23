import React from "react";
import Container from "../components/container";
import styles from "./about-css-modules.module.css"
import {Link} from "gatsby";
import Header from "../components/header";

console.log(styles)

const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt=""/>
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <Link to="/">Home</Link>
            <Header About CSS Modules />
            <p>CSS Modules are cool</p>
            <User
                username="Jane Doe"
                avatar="https://pbs.twimg.com/profile_images/1215070700026855425/7edvU72D_400x400.jpg"
                excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
                username="Bob Smith"
                avatar="https://pbs.twimg.com/profile_images/1025855458978881536/Fen-YR9F_400x400.jpg"
                excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    );
}