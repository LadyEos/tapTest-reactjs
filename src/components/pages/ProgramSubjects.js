import React from 'react'
import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import ProgramSubjectsCrud from "./ProgramSubjectsCrud";
import {useSearchParams} from 'react-router-dom';

const ProgramSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [options, setOptions] = useState([]);
    const [programId, setProgramId]= useState([]);
    const [programName, setProgramName]= useState([]);

    const [queryParameters] = useSearchParams();

  /* manage side effects */
  useEffect(() => {
    setProgramId(queryParameters.get("id"));
    setProgramName(queryParameters.get("name"));
    (async () => await load(queryParameters.get("id")))();
  }, [queryParameters]);

  async function load(id) {
    const auth = {
      username: 'user',
      password: 'taptestpassword',
    };

    const result = await api.get("/programs/subjects/" + id, {
      auth: auth,
    });
    setSubjects(result.data);

    const noprog = await api.get("/subjects/noprogram", {
      auth: auth,
    });
    setOptions(noprog.data);
  }
    return (
        <React.Fragment>
          <div className='div-body'>
            <section className="content-container">
            <div>
                <h1 className="text-center">List Of Subjects for Program: {programName}</h1>
                <ProgramSubjectsCrud load={load} options={options} subjects={subjects} program={programId}/> 
            </div>
            </section>
          </div>
        </React.Fragment>
    )
}

export default ProgramSubjects;