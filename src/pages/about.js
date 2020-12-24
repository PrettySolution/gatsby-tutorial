import React from "react";
import { useStaticQuery, graphql} from "gatsby";
import Layout from "../components/layout";
import {Link} from "gatsby";

export default function About() {
    const data = useStaticQuery(graphql`query{site{siteMetadata{title}}}`)

    return (
        <Layout>
            <h1>About {data.site.siteMetadata.title}</h1>
            <p>
                We're the only site running on your computer dedicated to showing the
                best photos and videos of pandas eating lots of food.
            </p>
            <Link to={`/my-files/`}>
                see Site's Files
            </Link>
        </Layout>
    )
}

// export const query = graphql`{site{siteMetadata{title}}}`