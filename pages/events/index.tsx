import { FC } from "react";
import Link from "next/link";

import { Layout } from "@/components/layout";
import { EventItem, Pagination } from "@/components/ui";
import { API_URL, PER_PAGE } from "@/config/index";
import { IEvents } from "types/event";

const EventsPage: FC<{ events: IEvents[]; total: number; page: number }> = ({
  events,
  total,
  page,
}) => {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt: any) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      <Pagination page={page} total={total} />
    </Layout>
  );
};

export default EventsPage;

export async function getServerSideProps({ query: { page = 1 } }) {
  // +page -> parseInt(page) => convert page var to number

  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: { events, page: +page, total },
  };
}
