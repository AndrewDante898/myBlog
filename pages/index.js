import {Fragment} from "react";
import Head from "next/head";

import Hero from '../components/home-page/hero'
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-util";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Max' Blog</title>
                <meta name='description' content='I post about programming and web development.'></meta>
            </Head>
            <Hero ></Hero>
            <FeaturedPosts posts={props.posts}></FeaturedPosts>
        </Fragment>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage;