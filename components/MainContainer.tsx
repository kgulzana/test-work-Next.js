import React from "react";
import Head from "next/head";
import A from "./A";
import { FC, ReactNode } from "react";


type mainContainerProps = {
  children: ReactNode;
  keywords: string;
};

const MainContainer: FC<mainContainerProps> = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>Главная страница</title>
      </Head>
      <div className="navbar">
        <A href={"/"} text="Главная" />
        <A href={"/posts"} text="Посты" />
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: blue;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
