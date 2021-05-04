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
          <label for="entry-date">Date</label>
          <input type="date" name="entryDate" class="entryForm__date" />
        </fieldset>
      </form>
    </div>
    <!-- SUBJECT -->
    <div class="entry-subject-container">
      <label for="entry-subject">What subjects did you tackle?</label>
      <div class="entry-subject">
        <input
          type="text-field"
          placeholder="Subject here"
        />
      </div>
    </div>
    <!-- BODY -->
    <div class="entry-body-container">
      <label for="entry-body">Entry Body</label>
      <div class="entry-body-sub-container">
    <div class = "entry-body"> 
        <textarea name="Journal Entry" class="entry-body" cols="50" rows="5" placeholder="Write your thoughts here"></textarea>
    </div>
      </div>
    </div>
    <!-- MOOD -->
    <div class="entry-mood-container">
      <label for="entry-mood">¿Cómo te sientes?</label>
      <div class="entry-mood-sub-container">
      <select name="mood" class="entry-mood">
      <option value="accomplished">Accomplished</option>
      <option value="frustrated">Frustrated</option>
      <option value="content">Content</option>
      <option value="humbled">Humbled</option>
    </select>
      </div>
    </div>
    <button class="entry-save" type="submit">Save</button>
  </section>
  `;
    return inputFormAsHTML;
  }
};
