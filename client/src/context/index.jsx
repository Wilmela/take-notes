import { createContext, useEffect, useState, useRef } from "react";

const HOST = "http://localhost:5000/api/notes";

export const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [createNote, setCreateNote] = useState({ title: "", note: "" });

  const titleRef = useRef();
  const noteRef = useRef();

  const reloadWindow = () => window.location.reload();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch(`${HOST}/getAll`);
        const data = await res.json();
        setNotes(data.note);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCreateNote({ ...createNote, [name]: value });
  };

  const createNewNote = async () => {
    const res = await fetch(`${HOST}/create`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: createNote.title,
        note: createNote.note,
      }),
    });
    const data = await res.json();
    setNotes((prev) => [...prev, data]);
    reloadWindow();
  };

  const deleteNote = async (id) => {
    await fetch(`${HOST}/delete/${id}`, {
      method: "DELETE",
    });
    setNotes(notes.filter((note) => note.id != id));
    reloadWindow();
  };

  const updateNote = async (id, titleRef, noteRef) => {
    const res = await fetch(`${HOST}/update/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: titleRef,
        note: noteRef,
      }),
    });

    const result = await res.json();
    setNotes(
      notes.map((note) =>
        note.id === id
          ? { ...note, title: result.title, note: result.note }
          : note
      )
    );
    reloadWindow();
  };

  return (
    <NoteContext.Provider
      value={{
        notes,
        handleChange,
        createNewNote,
        createNote,
        setCreateNote,
        deleteNote,
        updateNote,
        titleRef,
        noteRef,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
