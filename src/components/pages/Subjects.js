import React from 'react'
import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import SubjectCrud from "./SubjectCrud";

const Subjects = () => {
    const [subjects, setSubjects] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/subjects", {
      auth: {
        username: 'user',
        password: 'taptestpassword',
      },
      headers : {
        "Authorization": "Basic",
      }
    });
    setSubjects(result.data);
  }
    return (
        <React.Fragment>
          <div className='div-body'>
            <section className="content-container">
            <div>
                <h1 className="text-center">List Of Subjects</h1>
                <SubjectCrud load={load} subjects={subjects} />
            </div>
            </section>
          </div>
        </React.Fragment>
    )
}

export default Subjects;