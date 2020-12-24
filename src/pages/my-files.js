import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";

export default function MyFiles({data}) {
    console.log(data)
    return (
        <Layout>
            <div>
                <h3>My Site's Files</h3>
                <table>
                    <thead>
                        <tr>
                            <th>relativePath</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map(({node}, index) => (
                            <tr key={index}>
                                <td>{node.relativePath}</td>
                                <td>{node.prettySize}</td>
                                <td>{node.extension}</td>
                                <td>{node.birthTime}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export const query = graphql`
    {
      allFile {
        edges {
          node {
            prettySize
            birthTime(fromNow: true)
            relativePath
            extension
          }
        }
      }
    }
`