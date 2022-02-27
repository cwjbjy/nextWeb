import Head from "next/head";
import Card from "../../components/card";

export default function Sports({ list }) {
  return (
    <div>
      <Head>
        <title>最新体育</title>
        <meta name="description" content="今日头条，时时获取新闻" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <Card url="'/tiyu.png'" list={list}>
          最新体育
        </Card>
      </article>
    </div>
  );
}

export async function getServerSideProps() {
  const url = `https://v.juhe.cn/toutiao/index?type=tiyu&key=${process.env.NEXT_PUBLIC_KEY}`;
  const res = await fetch(url);
  const list = await res.json();

  return {
    props: {
      list: list.result.data,
    },
  };
}
