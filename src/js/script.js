// Elements
const noteContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-input");
const addNoteBtn = document.querySelector(".add-note");

// Functions
const showNotes = () => {
  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    noteContainer.appendChild(noteElement);
  });
};

const addNote = () => {
  const notes = getNotes();

  const noteObj = {
    id: randomId(),
    content: noteInput.value,
    fixed: false,
  };

  const note = createNote(noteObj.id, noteObj.content);

  noteContainer.appendChild(note);
  notes.push(noteObj);
  saveNotes(notes);
  noteInput.value = "";
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

  const pinIcon = document.createElement("i");
  pinIcon.classList.add(...["bi", "bi-pin"]);

  element.append(textArea, pinIcon);

  if (fixed) {
    element.classList.add("fixed");
  }

  // Element's event
  element.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixedNotes(id);
  });

  return element;
};

const toggleFixedNotes = (id) => {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.fixed = !targetNote.fixed;

  saveNotes(notes);
};

// Local Storage
const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  return notes;
};

const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
// Events
addNoteBtn.addEventListener("click", () => addNote());

// Initialize
showNotes();
