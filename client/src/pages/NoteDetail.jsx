import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const HOST = "http://localhost:5000/api/notes";

const NoteDetail = () => {
  const { id } = useParams();

  const [currentNote, setCurrentNote] = useState({});
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await fetch(`${HOST}/getOne/${id}`);
        const data = await res.json();
        setCurrentNote(data.note);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNote();
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center px-10">
      <div className="w-full md:w-7/12 h-[400px] bg-white px-12 flex flex-col justify-evenly items-center rounded-md">
        <div className="border w-full text-center p-2 rounded-md">
          <p className="text-3xl font-bold text-[#F6C13E]">
            {currentNote.title}
          </p>
        </div>
        <p className="text-xl">{currentNote.note}</p>
        <button className="border py-2 px-4 rounded-md bg-green-400 text-white">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default NoteDetail;
