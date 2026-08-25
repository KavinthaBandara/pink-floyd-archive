import { BandMember } from "../app/types";

export const pinkFloydMembers: BandMember[] = [
  {
    name: "Syd Barrett",
    role: "Founder, guitarist, vocalist",
    born: "6 January 1946",
    birthplace: "Cambridge, England",
    died: "7 July 2006",
    age: 60,
  },
  {
    name: "Roger Waters",
    role: "Bassist, vocalist, songwriter",
    born: "6 September 1943",
    birthplace: "Great Bookham, Surrey, England",
    died: null,
    age: new Date().getFullYear() - 1943, // Calculate age based on the current year
  },
  {
    name: "David Gilmour",
    role: "Guitarist, vocalist, songwriter",
    born: "6 March 1946",
    birthplace: "Cambridge, England",
    died: null,
    age: new Date().getFullYear() - 1946, // Calculate age based on the current year
  },
  {
    name: "Richard Wright",
    role: "Keyboardist, vocalist, songwriter",
    born: "28 July 1943",
    birthplace: "London, England",
    died: "15 September 2008",
    age: 65,
  },
  {
    name: "Nick Mason",
    role: "Drummer, percussionist",
    born: "27 January 1944",
    birthplace: "Birmingham, England",
    died: null,
    age: new Date().getFullYear() - 1944, // Calculate age based on the current year
  },
];