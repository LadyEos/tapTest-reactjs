import { useState } from "react";
import api from "../../api/axiosConfig";
import SubjectList from "./SubjectList";

const SubjectCrud = ({ load, subjects }) => {
/* state definition  */
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [fileOrder, setFileOrder] = useState("");

  const auth = {
    username: 'user',
    password: 'taptestpassword'
  }

  /* being handlers */
  async function save(event) {
    event.preventDefault();
    await api.post("/subjects/create", {
      name: name,
      fileOrder: fileOrder,
    }, {
      auth: auth
    });
    alert("New Subject Saved");
    // reset state
    setId("");
    setName("");
    setFileOrder("");
    load();
  }
  async function editSubject(subjects) {
    setName(subjects.name);
    setFileOrder(subjects.fileOrder);
    setId(subjects.id);
  }

  async function deleteSubject(id) {
    await api.delete("/subjects/delete/" + id, {
      auth: auth
    });
    alert("Subject Deleted Successfully");
    load();
  }

  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Subject No Found");
    await api.put("/subjects/update/"+ id, {
      id: id,
      name: name,
      fileOrder: fileOrder,
    }, {
      auth: auth
    });
    alert("Subject Updated");
    // reset state
    setId("");
    setName("");
    setFileOrder("");
    load();
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
          <label>Position in file</label>
          <input
            type="text"
            className="form-control"
            value={fileOrder}
            onChange={e => setFileOrder(e.target.value)}
          />
        </div>
        <div className="form-group mb-2">
          <div>* The position in the file must be unique.</div>
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
      <SubjectList
        subjects={subjects}
        editSubject={editSubject}
        deleteSubject={deleteSubject}
      />
    </div>
  );
};

export default SubjectCrud;