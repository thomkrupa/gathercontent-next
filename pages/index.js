import Link from "next/link";
import Layout from "../components/Layout";
import { get } from "../lib/api";

const Home = (props) => {
  const { data } = props;

  return (
    <Layout>
      <h1>posts:</h1>

      <ol>
        {data.map((item) => (
          <li key={item.id}>
            <Link href="/posts/[id]" as={`/posts/${item.id}`}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ol>

      <style jsx>{`
        ol {
          margin: 0;
          color: #999;
          font-size: 1.25rem;
        }

        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const data = await get(`/projects/264335/items`);

  return {
    props: { data },
    revalidate: 60,
  };
}
