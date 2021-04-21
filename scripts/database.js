/*
Data provider for Daily Journal application

Holds the raw data about each entry and exports
functions that other modules can use to filter
the entries for different purposes.

 */

const database = {
  entries: [
    {
      id: 1,
      date: "04/06/2021",
      concept: "HTML & CSS",
      entry:
        "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Content",
    },
    {
      id: 2,
      date: "04/12/2021",
      concept: "Wireframing",
      entry:
        "Prototyped designing different kinds of webpages using sites like Sketchboard and Figma.",
      mood: "Accomplished",
    },
    {
      id: 3,
      date: "04/19/2021",
      concept: "Functions in JS",
      entry:
        "Absolutely getting battered around by the functions necessary in the explorer chapters. Need somee extra help for these.",
      mood: "Frustrated",
    },
  ],
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const getJournalEntries = () => {
  const copyOfData = [...database.entries];
  return copyOfData;
};
