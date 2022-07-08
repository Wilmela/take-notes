import { useContext } from "react";
import { NoteContext } from "../context";

export const Form = () => {
  const { handleChange, createNewNote, createNote } = useContext(NoteContext);
  const { title, note } = createNote;

  const submitForm = (e) => {
    e.preventDefault();

    if (!(note && title)) return alert("Enter title and a note");

    createNewNote();
  };

  return (
    <form
      data-aos="fade-left"
      onSubmit={submitForm}
      className="w-[90%] h-[50%] md:w-[70%] border-2 p-4 rounded-md bg-white z-100 flex flex-col fixed top-20"
    >
      <label className="font-light">
        Title
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter title..."
          className="w-full p-2 border outline-none rounded-md mb-4 mt-1"
        />
      </label>

      <label className="flex-1 font-light">
        Note
        <textarea
          placeholder="Enter note..."
          name="note"
          onChange={handleChange}
          className="w-full h-[85%] border outline-none rounded-md p-2 mt-1 "
        />
      </label>

      <div className="flex justify-start items-center my-5">
        <button
          type="submit"
          value="submit"
          className="py-2 px-6 text-white rounded-md border bg-[#F6C13E] hover:bg-[#ecc761] outline-none cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
};
