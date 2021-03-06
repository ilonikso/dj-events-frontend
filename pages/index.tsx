import type { NextPage } from "next";
import Link from "next/link";

import { API_URL } from "@/config/index";
import { EventItem } from "@/components/ui";

import { Layout } from "@/components/layout";
import { IEvent } from "types/event";

const Home: NextPage<{ events: IEvent[] }> = ({ events }) => {
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
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
  };
}
