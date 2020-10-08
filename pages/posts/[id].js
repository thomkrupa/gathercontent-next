import Layout from "../../components/Layout";
import { get } from "../../lib/api";

const Page = ({ data }) => {
  let components = [];

  for (const [key, value] of Object.entries(data.content)) {
    components.push({ key, value });
  }

  return (
    <Layout>
      <h1>{data.name}</h1>
      {components.map((item) => {
        if (typeof item.value === "string") {
          return (
            <div
              key={item.key}
              dangerouslySetInnerHTML={{ __html: item.value }}
            />
          );
        }
      })}
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const data = await get(`/items/${params.id}`);

  return {
    props: { data },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const items = await get(`/projects/264335/items`);

  return {
    paths: items.map((item) => ({ params: { id: String(item.id) } })),
    fallback: false,
  };
}
