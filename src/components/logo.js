import React from "react";
import { useStaticQuery, graphql } from "gatsby"

function Logo() {
    const { contentfulAsset } = useStaticQuery(
        graphql`
        query {
            contentfulAsset(title: {eq: "Bachman I/O Logo"}) {
                file {
                    url
                }
            }
        }`
    );

    const logoUrl = contentfulAsset.file.url;

    return (<img src={logoUrl} width="270" height="30" alt="Bachman I/O" />)
}

export default Logo;