import React from "react";
// import favicon from "./favicon.png";

let inlinedStyles = "";
if (process.env.NODE_ENV === "production") {
  try {
    inlinedStyles = require("!raw-loader!../public/styles.css");
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: inlinedStyles }}
        />
      );
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          
          <meta name="application-name" content="Application Name"/>
          <meta name="theme-color" content="#4285f4"/>
          <meta name="description" content="A description of the page"/>
          <meta name="robots" content="index,follow"/>
          <meta name="googlebot" content="index,follow"/>

          <meta name="google-site-verification" content="verification_token"/>
          <meta name="yandex-verification" content="verification_token"/>
          <meta name="msvalidate.01" content="verification_token"/>
          <meta name="alexaVerifyID" content="verification_token"/>
          <meta name="p:domain_verify" content="code_from_pinterest"/>

          <meta name="generator" content="program"/>
          <meta name="subject" content="your document's subject"/>
          <meta name="rating" content="General"/>

          <meta name="ICBM" content="latitude, longitude"/>
          <meta name="geo.position" content="latitude;longitude"/>
          <meta name="geo.region" content="country[-state]"/>
          <meta name="geo.placename" content="city/town"/>

          <link rel="manifest" href="manifest.json"/>

          <link rel="me" href="https://google.com/profiles/thenextweb" type="text/html"/>
          <link rel="me" href="mailto:name@example.com"/>
          <link rel="me" href="sms:+15035550125"/>

          <link rel="icon" sizes="192x192" href="/path/to/icon.png"/>
          <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png"/>
          <link rel="mask-icon" href="/path/to/icon.svg" color="blue"/>

          <meta property="fb:app_id" content="123456789"/>
          <meta property="og:url" content="http://example.com/page.html"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="Content Title"/>
          <meta property="og:image" content="http://example.com/image.jpg"/>
          <meta property="og:description" content="Description Here"/>
          <meta property="og:site_name" content="Site Name"/>
          <meta property="og:locale" content="en_US"/>
          <meta property="article:author" content=""/>

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@site_account"/>
          <meta name="twitter:creator" content="@individual_account"/>
          <meta name="twitter:url" content="http://example.com/page.html"/>
          <meta name="twitter:title" content="Content Title"/>
          <meta name="twitter:description" content="Content description less than 200 characters"/>
          <meta name="twitter:image" content="http://example.com/image.jpg"/>

          { this.props.headComponents }
          {/* <link rel="shortcut icon" href={favicon} /> */}
          { css }
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}