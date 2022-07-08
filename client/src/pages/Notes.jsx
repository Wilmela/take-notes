import { useContext, useState } from "react";
import { NoteContext } from "../context";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";

import Note from "../components/Note";
import {Form} from "../components/Form";

const Notes = () => {
  const { notes } = useContext(NoteContext);
  const [toggleForm, setToggleForm] = useState(false);

  const toggleBtnStyle = 'fixed right-2 bottom-16 cursor-pointer pl-1'

  return (
    <div className="w-full flex justify-center items-center relative py-4 px-8 pb-20">
      <div className="w-full">
      
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {notes?.reverse().map((note) => (
            <Note key={note._id} {...note} />
          ))}
        </div>

       {!toggleForm ?
          <FaPlusCircle size={40} onClick={()=>setToggleForm(true)} className={`${toggleBtnStyle} text-green-400`}/>
          :<FaTimesCircle size={40} onClick={()=>setToggleForm(false)} className={`${toggleBtnStyle} text-[#F6C13E]`}/> 
       }
      </div>
      {toggleForm && <Form/>}
    </div>
  );
};

export default Notes;
