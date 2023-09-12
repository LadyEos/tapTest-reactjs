import { useState } from "react";
import api from "../../api/axiosConfig";
import ProgramSubjectsList from "./ProgramSubjectsList";

const ProgramSubjectsCrud = ({ load, options, subjects, program }) => {
/* state definition  */
  const [selectedValue, setSelectedValue] = useState('');
  const auth = {
    username: 'user',
    password: 'taptestpassword'
  }

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await api.get("/programs/addSubject/"+program+"/"+selectedValue, {
      auth: auth
    });
    alert("New Subject Saved");
    load(program);
  }

  async function removeSubject(id) {
    await api.get("/programs/deleteSubject/" + program + "/" + id, {
      auth: auth
    });
    alert("Subject Removed Successfully");
    load(program);
  }
  
  /* end handlers */

/* jsx */
  return (
    <div className="container mt-4">
      <form>
       <div>
          <select value={selectedValue} onChange={e => setSelectedValue(e.target.value)}>
          <option key="-" value="-" selected>                 </option>
            {options && options?.map((option) => (
              <option key={option.id} value={option.id}>{option.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Add Subject
          </button>
        </div>
      </form>
      <ProgramSubjectsList
        subjects={subjects} 
        removeSubject={removeSubject}
      />
    </div>
  );
};

export default ProgramSubjectsCrud;