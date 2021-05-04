import { Entries } from "./Entries.js";
import { inputForm } from "./JournalForm.js";

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        <h2>Gabe Gonzales</h2>

        <article class="entryForm">
            ${inputForm()}
        </article>

        <div class="entryList">
            ${Entries()}
        </div>
    `;
};
