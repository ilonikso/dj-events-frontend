import { FC } from "react";
import qs from "qs";

import Link from "next/link";
import { useRouter } from "next/router";

import { Layout } from "@/components/layout";
import { EventItem } from "@/components/ui";
import { API_URL } from "@/config/index";

import { IEvents } from "types/event";

const SearchPage: FC<{ events: IEvents[] }> = ({ events }) => {
  const router = useRouter();

  return (
    <Layout title="Search results">
      <Link href="/">
        <a>Go back</a>
      </Link>
      <h1>Search results for {`"${router.query.term}"`}</h1>

      {events.length === 0 && (
        <h3>No events to show for {`"${router.query.term}"`}</h3>
      )}

      {events.map((evt: any) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
};

export default SearchPage;

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: { events },
  };
}
