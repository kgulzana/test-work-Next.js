import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import { postType } from "../types";

type postsInfoProps = {
  posts: [postType];
};

export default function ({ posts }: postsInfoProps) {
  return (
    <MainContainer keywords={"posts"}>
      <h1>Список постов</h1>
      {posts.map((post) => (
        <li className="post-list" key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </MainContainer>
  );
}

 

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
};
