import { getJournalEntries } from "./database.js";

export const Entries = () => {
  const entries = getJournalEntries();
  let allEntriesAsHTML = "";

  for (const entry of entries) {
    allEntriesAsHTML += `
      <div class="entry">
        <div>${entry.date}</div>
        <div>Concepts covered: ${entry.concept}</div>
        <div>${entry.entry}</div>
        <div>Mood: ${entry.mood}</div>
      </div>
    `;
    return allEntriesAsHTML;
  }
};
