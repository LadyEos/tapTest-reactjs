import React from 'react'
import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import SettingCrud from "./SettingCrud";

const Settings = () => {
    const [settings, setSettings] = useState([]);

  /* manage side effects */
  useEffect(() => {
    (async () => await load())();
  }, []);

  async function load() {
    const result = await api.get("/settings", {
      auth: {
        username: 'user',
        password: 'taptestpassword'
      }
    });
    setSettings(result.data);
  }
    return (
        <React.Fragment>
          <div className='div-body'>
            <section className="content-container">
            <div>
                <h1 className="text-center">List Of Settings</h1>
                <SettingCrud load={load} settings={settings} />
            </div>
            </section>
          </div>
        </React.Fragment>
    )
}

export default Settings;