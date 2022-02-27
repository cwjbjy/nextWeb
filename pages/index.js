import Head from "next/head";
import Card from "../components/card";

export default function Home({ list }) {
  return (
    <div>
      <Head>
        <title>今日头条</title>
        <meta name="description" content="今日头条，时时获取新闻" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <Card url="'/toutiao.png'" list={list}>
          今日头条
        </Card>
      </article>
    </div>
  );
}

export async function getServerSideProps() {
  const url = `https://v.juhe.cn/toutiao/index?type=guonei&key=${process.env.NEXT_PUBLIC_KEY}`;
  const res = await fetch(url);
  const list = await res.json();

  return {
    props: {
      list: list.result.data,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:3001/api/home");
//   const list = await res.json();
//   console.log("list", list);
//   return {
//     props: {
//       list: list,
//     },
//   };
// }
