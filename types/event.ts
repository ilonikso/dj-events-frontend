export interface IEvent {
  id: number;
  name: string;
  slug: string;
  venue: string;
  address: string;
  performers: string;
  date: string;
  time: string;
  description: string;
  image: any;
}

export interface IEvents {
  events: IEvent[];
}
