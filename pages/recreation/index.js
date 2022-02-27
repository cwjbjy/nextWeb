import Head from "next/head";
import Card from "../../components/card";

export default function Recreation({ list }) {
  return (
    <div>
      <Head>
        <title>最新娱乐</title>
        <meta name="description" content="今日头条，时时获取新闻" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article>
        <Card url="'/yule.png'" list={list}>
          最新娱乐
        </Card>
      </article>
    </div>
  );
}

export async function getServerSideProps() {
  const url = `https://v.juhe.cn/toutiao/index?type=yule&key=${process.env.NEXT_PUBLIC_KEY}`;
  const res = await fetch(url);
  const list = await res.json();

  return {
    props: {
      list: list.result.data,
    },
  };
}
