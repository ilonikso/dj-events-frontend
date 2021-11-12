import { FC } from "react";
import { Layout } from "@/components/layout";
import { API_URL } from "@/config/index";
import { IEvent } from "types/event";

const EventPage: FC<{ evt: IEvent }> = ({ evt }) => {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
};

export default EventPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
  };
}
