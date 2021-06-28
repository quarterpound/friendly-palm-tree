import React from 'react';
import Head from 'next/head';

export default function HeadComponent({title}) {
    return (
        <Head>
            <title>{`Ali Gasimzade — Designer, Front-end Developer`}</title>
            <meta name="title" content={`Ali Gasimzade — Designer, Front-end Developer`}/>
            <meta name="description"
                  content="Welcome to my portfolio"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://gasimzade.az"/>
            <meta property="og:title" content={`Ali Gasimzade — Designer, Front-end Developer`}/>
            <meta property="og:description"
                  content="Welcome to my portfolio"/>
            <meta property="og:image"
                  content="https://gasimzade.az/banner.jpg"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://gasimzade.az/"/>
            <meta property="twitter:title"
                  content={`Ali Gasimzade — Designer, Front-end Developer`}/>
            <meta property="twitter:description"
                  content="Welcome to my portfolio"/>
            <meta property="twitter:image"
                  content="https://gasimzade.az/banner.jpg"/>
        </Head>
    )
}