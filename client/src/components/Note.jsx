import { useContext, useState} from "react";
import { NoteContext } from "../context";
import {FaEdit, FaTrash, FaSave, FaTimes} from "react-icons/fa";
import { Link} from "react-router-dom";

const Note = ({ _id, title, note }) => {

  const {deleteNote, updateNote, titleRef, noteRef} = useContext(NoteContext);
  const [view] = useState(note.slice(0,30));

  const [isEditable, setIsEditable] = useState(false);

 

  const editSaveStyle = "text-green-400 text-3xl cursor-pointer hover:text-[#F6C13E]"
  
  const onDelete = (id) => {
    deleteNote(id);
  }

  const onEdit = () =>{
    setIsEditable(true);

  }
  
  const onUpdate = (id, titleRef, noteRef) => {
    updateNote(id, titleRef, noteRef)
  }

  return (
    <div
      data-aos="fade-up"
      className="relative h-[270px] bg-white flex flex-col mb-10 shadow-md rounded-md items-center justify-between md:m-2 hover:bg-[#e8f5f5]"
    >
      <div className="  w-[80%] p-4 mt-5">
        <div className="w-full flex justify-between item-center">
        {isEditable ? <input type='text' id='title' defaultValue={title} ref={titleRef} placeholder='Enter updated title...' className='w-10/12 p-2 border'/>:
          <p className="text-2xl font-bold ">{title.length > 14 ? `${title.slice(0,13)}...` : title}</p>
        }
          {isEditable && <FaTimes cursor='pointer' onClick={()=>setIsEditable(false)}/>}
        </div>

        <div className="mt-4">
          {isEditable ? <textarea id='note' defaultValue={note} ref={noteRef} placeholder="Enter note update.." className="p-2 w-10/12"/> : <div>
            <p>{view}{view.length === 30 ?'...' : ''}</p>
            <Link to={`/note/${_id}`}>
              <p className="italic p-2 border w-[25%] rounded-full mt-1 text-center text-md cursor-pointer md:text-sm md:w-[40%] hover:bg-[#F6C13E] hover:text-white">{(title.length != 0 || note.length != 0 ) ? 'View' : '😞 '}</p> 
            </Link>
            </div> 
          }
        </div>
      </div>

      <div className="w-[40%] flex justify-evenly items-center py-6">
       {isEditable ? <FaSave onClick={()=>onUpdate(_id, titleRef.current.value, noteRef.current.value)} className={editSaveStyle}/> :
        <FaEdit onClick={onEdit} className={editSaveStyle} />}
        <FaTrash onClick={()=>onDelete(_id)} className="text-green-400 text-3xl cursor-pointer hover:text-red-600" />
      </div>

    </div>
  );
};

export default Note;
