

export type TimelineEvent = {
  year: number;
  title: string;
  description: string;
  image?: string;
  type: "band" | "album" | "member" | "event";
};



export interface BandMember {
  name: string;
  role: string;
  born: string;
  birthplace: string;
  died: string | null;
  age: number | null;
}



