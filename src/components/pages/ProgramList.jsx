import React from "react";

const ProgramList = ({ programs, editProgram, deleteProgram, manageSubjects }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Program Key</th>
          <th scope="col">Minimum Score</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {programs?.map((program, index) => {
        return (
          <tbody key={program.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{program.name}</td>
              <td>{program.programKey}</td>
              <td>{program.passingScore}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editProgram(program)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteProgram(program.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-primary mx-2"
                  onClick={() => manageSubjects(program.id, program.name)}
                >
                  Manage Subjects
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProgramList;