import React from "react";

const SubjectList = ({ subjects, editSubject, deleteSubject }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th>
          <th scope="col">Position in file</th>
          <th scope="col">Program</th>

          <th scope="col">Option</th>
        </tr>
      </thead>
      {subjects.map((subject, index) => {
        return (
          <tbody key={subject.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{subject.name}</td>
              <td>{subject.fileOrder}</td>
              <td>{subject.programName}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editSubject(subject)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteSubject(subject.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default SubjectList;