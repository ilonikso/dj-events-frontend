import type { NextPage } from "next";
import { API_URL } from "@/config/index";

import { Layout } from "@/components/layout";

const Home: NextPage<{ events: any }> = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming events</h1>
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
