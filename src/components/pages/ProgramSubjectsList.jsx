import React from "react";

const ProgramSubjectsList = ({subjects, removeSubject  }) => {
  return (
    <table className="table table-hover mt-3" align="center">
      <thead className="thead-light">
        <tr>
          <th scope="col">Nº</th>
          <th scope="col">Name</th> 
          <th scope="col">Option</th>
        </tr> 
      </thead>
      {subjects && subjects?.map((subject, index) => {
        return (
          <tbody key={subject.id}>
            <tr>
              <th scope="row">{index + 1} </th>
              <td>{subject.name}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => removeSubject(subject.id)}
                >
                  remove
                </button>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default ProgramSubjectsList;