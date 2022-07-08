import { useNavigate } from "react-router-dom";

const NoteNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">This page does not exist</h1>
      <button
        className="mt-5 border px-3 py-2 rounded bg-slate-900 text-white"
        onClick={goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default NoteNotFound;
