import React from 'react'
import { fetcher } from '../lib/api';
import Layout from "../components/Layout";
import Posts from '../components/Posts';

function posts( {posts}) {
  return (
    <Layout>
        <Posts posts={posts}/>
    </Layout>
  )
}

export default posts;

export async function getStaticProps() {
    const postResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`);
    console.log(postResponse)

    return {
      props: {
            posts : postResponse,
      }, // will be passed to the page component as props
    }
}