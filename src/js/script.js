// Elements
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-input");
const addNoteBtn = document.querySelector(".add-note");
const searchInput = document.querySelector("#search-input");

// Functions
const showNotes = () => {
  cleanNotes();

  getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content, note.fixed);
    notesContainer.appendChild(noteElement);
  });
};

const cleanNotes = () => {
  notesContainer.replaceChildren([]);
};

const addNote = () => {
  const notes = getNotes();

  const noteObj = {
    id: randomId(),
    content: noteInput.value,
    fixed: false,
  };

  const note = createNote(noteObj.id, noteObj.content);

  notesContainer.appendChild(note);
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

  element.appendChild(textArea);
  //Creating the icons
  const pinIcon = document.createElement("i");
  pinIcon.classList.add(...["bi", "bi-pin"]);
  element.appendChild(pinIcon);

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add(...["bi", "bi-x-lg"]);
  element.appendChild(deleteIcon);

  const duplicateIcon = document.createElement("i");
  duplicateIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
  element.appendChild(duplicateIcon);

  if (fixed) {
    element.classList.add("fixed");
  }

  // Element's event
  element.querySelector("textarea").addEventListener("keyup", (e) => {
    const noteContent = e.target.value;

    updateNote(id, noteContent);
  });

  element.querySelector(".bi-pin").addEventListener("click", () => {
    toggleFixedNotes(id);
  });

  element.querySelector(".bi-x-lg").addEventListener("click", () => {
    deleteNote(id, element);
  });

  element
    .querySelector(".bi-file-earmark-plus")
    .addEventListener("click", () => {
      copyNote(id);
    });

  return element;
};

const toggleFixedNotes = (id) => {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];
  targetNote.fixed = !targetNote.fixed;

  saveNotes(notes);

  showNotes();
};

const deleteNote = (id, element) => {
  const notes = getNotes().filter((note) => note.id !== id);

  saveNotes(notes);

  notesContainer.removeChild(element);
};

const copyNote = (id) => {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];

  const noteObj = {
    id: randomId(),
    content: targetNote.content,
    fixed: false,
  };

  const noteElement = createNote(noteObj.id, noteObj.content, noteObj.fixed);

  notesContainer.appendChild(noteElement);
  notes.push(noteObj);

  saveNotes(notes);
};

const updateNote = (id, content) => {
  const notes = getNotes();

  const targetNote = notes.filter((note) => note.id === id)[0];

  targetNote.content = content;

  saveNotes(notes);
};

// Local Storage
const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");

  const oderedNotes = notes.sort((a, b) => (a.fixed > b.fixed ? -1 : 1));

  return oderedNotes;
};

const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};

const searchNotes = (search) => {
  const searchResults = getNotes().filter((note) => {
    return note.content.includes(search);
  });

  if (search !== "") {
    cleanNotes();

    searchResults.forEach((note) => {
      const noteElement = createNote(note.id, note.content);
      notesContainer.appendChild(noteElement);
    });

    return;
  }

  cleanNotes();

  showNotes();
};

// Events
addNoteBtn.addEventListener("click", () => addNote());
searchInput.addEventListener("keyup", (e) => {
  const search = e.target.value;

  searchNotes(search);
});

noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNote();
  }
});

// Initialize
showNotes();
