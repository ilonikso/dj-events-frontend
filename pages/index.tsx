import type { NextPage } from "next";
import Link from "next/link";

import { API_URL } from "@/config/index";
import { EventItem } from "@/components/ui";

import { Layout } from "@/components/layout";

const Home: NextPage<{ events: any }> = ({ events }) => {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt: any) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events: events.events.slice(0, 3) },
  };
}
