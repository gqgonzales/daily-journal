import { Entries } from "./Entries.js";

export const DailyJournal = () => {
  return `
        <div class="entryList">
            ${Entries()}
        </div>
    `;
};

export const DailyJournal = () => {
  return `
        <h1>Daily Journal</h1>
        <h2>Gabe Gonzales</h2>

        <div class="entryList">
            ${Entries()}
        </div>

        <article class="entryForm">
            Use interpolation to put the HTML that the form function generates here
        </article>
    `;
};
