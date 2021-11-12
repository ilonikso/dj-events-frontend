import { FC } from "react";

import { Layout } from "@/components/layout";
import { EventItem } from "@/components/ui";
import { API_URL } from "@/config/index";
import { IEvents } from "types/event";

const EventsPage: FC<{ events: IEvents }> = ({ events }) => {
  return (
    <Layout>
      <h1>Events</h1>
      {events.events.length === 0 && <h3>No events to show</h3>}

      {events.events.map((evt: any) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
};

export default EventsPage;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
  };
}
