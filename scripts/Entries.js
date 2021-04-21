/*
    Which function allows this component to get a copy
    of the data? Import it on the following line of code
    and then invoke it on the third line of code.
*/
import { getJournalEntries } from "./database.js";

export const Entries = () => {
  const entries = getJournalEntries();
  const allEntriesAsHTML = "";

  for (const entry of entries) {
    allEntriesAsHTML += `
        <section class="entry">
        <!-- DATE -->
        <div class="entry-date-container">
          <form class="entryForm">
            <fieldset>
              <label for="entry-date">${entry.date}</label>
              <input type="date" name="entryDate" class="entryForm__date" />
            </fieldset>
          </form>
        </div>
        <!-- SUBJECT -->
        <div class="entry-subject-container">
          <label for="entry-subject">What subjects did you tackle?</label>
          <div class="entry-subject">
            <input
              type="testing testing testing"
              placeholder="${entry.concept}"
            />
          </div>
        </div>
        <!-- BODY -->
        <div class="entry-body-container">
          <label for="entry-body">The actual entry:</label>
          <div class="entry-body-sub-container">
        <div class = "entry-body"> 
            ${entry.entry}
        </div>
          </div>
        </div>
        <!-- MOOD -->
        <div class="entry-mood-container">
          <label for="entry-mood">¿Cómo te sientes?</label>
          <div class="entry-mood-sub-container">
            <div class = "entry-mood">${entry.mood}</div>
          </div>
        </div>
        <button class="entry-save" type="submit">Save</button>
      </section>
      `;
  }

  return allEntriesAsHTML;
};
