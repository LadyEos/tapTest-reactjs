import React from "react";

const SettingList = ({ settings, editSetting }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Global Minimum Score</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {settings.map((setting, index) => {
        return (
          <tbody key={setting.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{setting.globalPassingScore}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editSetting(setting)}
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default SettingList;