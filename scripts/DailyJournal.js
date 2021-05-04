import { Entries } from "./Entries.js";
import { inputForm } from "./JournalForm.js";

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        <h2>Gabe Gonzales</h2>

        <article class="entryForm">
            <h2>New Entry</h2>
            ${inputForm()}
        </article>

        <div class="entryList">
            <h2>Entries</h2>
            ${Entries()}
        </div>
    `;
};
