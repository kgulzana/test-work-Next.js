import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import { GetServerSideProps } from "next";
import { postType } from "../../types";

type postInfoProps = {
  post: postType;
};

export default function ({ post }: postInfoProps) {
  const { query } = useRouter();
  return (
    <MainContainer keywords={post.title}>
      {" "}
      <div className="post">
        <h1>Пост с id{query.id}</h1>
        <div>Содержимое поста - {post.title}</div>
      </div>
    </MainContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return {
    props: { post },
  };
};
