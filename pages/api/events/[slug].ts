import type { NextApiRequest, NextApiResponse } from "next";
import events from "./data.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const evt = events.events.filter((ev) => ev.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(evt);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
