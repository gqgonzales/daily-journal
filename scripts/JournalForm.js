import { getJournalEntries } from "./database.js";

export const inputForm = () => {
  const entries = getJournalEntries();
  let inputFormAsHTML = "";

  for (const entry of entries) {
    inputFormAsHTML += `
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
    return inputFormAsHTML;
  }
};
