// Elements
const noteContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-input");
const addNoteBtn = document.querySelector(".add-note");

// Functions
const addNote = () => {
  const noteObj = {
    id: randomId(),
    content: noteInput.value,
    fixed: false,
  };

  const note = createNote(noteObj.id, noteObj.content);

  noteContainer.appendChild(note);
};

const randomId = () => {
  return Math.floor(Math.random() * 5000);
};

const createNote = (id, content, fixed) => {
  const element = document.createElement("div");
  element.classList.add("note");

  const textArea = document.createElement("textarea");
  textArea.value = content;
  textArea.placeholder = "O que você deseja anotar?";

  element.appendChild(textArea);
  return element;
};
// Events
addNoteBtn.addEventListener("click", () => addNote());
