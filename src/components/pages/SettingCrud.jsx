import { useState } from "react";
import api from "../../api/axiosConfig";
import SettingList from "./SettingList";

const SettingCrud = ({ load, settings }) => {
/* state definition  */
  const [id, setId] = useState("");
  const [globalPassingScore, setGlobalPassingScore] = useState("");

  async function editSetting(settings) {
    setGlobalPassingScore(settings.globalPassingScore);
    setId(settings.id);
  }
  async function update(event) {
    event.preventDefault();
    if (!id) return alert("Setting No Found");
    await api.put("/settings/update/"+ id, {
      id: id,
      globalPassingScore: globalPassingScore,
    }, {
      auth: {
        username: 'user',
        password: 'taptestpassword'
      }
    });
    alert("Global Minimum Score Updated");
    // reset state
    setId("");
    setGlobalPassingScore("");
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
          <label>Global Minimum Score</label>
          <input
            type="text"
            className="form-control"
            value={globalPassingScore}
            onChange={e => setGlobalPassingScore(e.target.value)}
          />
        </div>

        <div>
          <button className="btn btn-warning m-4" onClick={update}>
            Update
          </button>
        </div>
      </form>
      <SettingList
        settings={settings}
        editSetting={editSetting}
      />
    </div>
  );
};

export default SettingCrud;