import { Entries } from "./Entries.js";
import { inputForm } from "./JournalForm.js";

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        <h3>Gabe Gonzales</h3>

        <article class="entryForm">
            <h3>New Entry</h3>
            ${inputForm()}
        </article>

        <div class="entryList">
            <h3>Entries</h3>
            ${Entries()}
        </div>
    `;
};
