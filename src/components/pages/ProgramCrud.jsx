import { useState } from "react";
import api from "../../api/axiosConfig";
import ProgramList from "./ProgramList";
import { useNavigate } from 'react-router-dom';

const ProgramCrud = ({ load, programs }) => {
/* state definition  */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [programKey, setProgramKey] = useState("");
  const [passingScore, setPassingScore] = useState("");
  const navigate = useNavigate();

  const auth = {
    username: 'user',
    password: 'taptestpassword'
  }

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await api.post("/programs/create", {
      name: name,
      programKey: programKey,
      passingScore: passingScore,
    }, {
      auth: auth
    });
    alert("New Program Saved");
    // reset state
    setId("");
    setName("");
    setProgramKey("");
    setPassingScore("");
    load();
  }
  async function editProgram(programs) {
    setName(programs.name);
    setProgramKey(programs.programKey);
    setPassingScore(programs.passingScore);
    setId(programs.id);
  }

  async function deleteProgram(id) {
    await api.delete("/programs/delete/" + id, {
      auth: auth
    });
    alert("Program Deleted Successfully");
    load();
  }

  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Program No Found");
    await api.put("/programs/update/"+ id, {
      id: id,
      name: name,
      programKey: programKey,
      passingScore: passingScore,
    }, {
      auth: auth
    });
    alert("Program Updated");
    // reset state
    setId("");
    setName("");
    setProgramKey("");
    setPassingScore("");
    load();
  }

  async function manageSubjects(id, name) {
    navigate({pathname: '/ProgramSubjects', search: '?id='+id+'&page='+name});
  }
  
  /* end handlers */

/* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <input
            type="text"
            className="form-control"
            hidden
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group mb-2">
          <label>Program Key</label>
          <input
            type="text"
            className="form-control"
            value={programKey}
            onChange={e => setProgramKey(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <div>* The program key must be unique.</div>
        </div>

        <div className="form-group mb-2">
          <label>Minimum Score</label>
          <input
            type="text"
            className="form-control"
            value={passingScore}
            onChange={e => setPassingScore(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-primary m-4" onClick={save}>
            Register
          </button>
          <button className="btn btn-warning m-4" onClick={update}>
            Update
          </button>
        </div>
      </form>
      <ProgramList
        programs={programs}
        editProgram={editProgram}
        deleteProgram={deleteProgram}
        manageSubjects={manageSubjects}
      />
    </div>
  );
};

export default ProgramCrud;