import React from 'react'
import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import ProgramCrud from "./ProgramCrud";

const Programs = () => {
    const [programs, setPrograms] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/programs", {
      auth: {
        username: 'user',
        password: 'taptestpassword'
      }
    });
    setPrograms(result.data);
  }
    return (
        <React.Fragment>
          <div className='div-body'>
            <section className="content-container">
            <div>
                <h1 className="text-center">List Of Programs</h1>
                <ProgramCrud load={load} programs={programs} />
            </div>
            </section>
          </div>
        </React.Fragment>
    )
}

export default Programs;