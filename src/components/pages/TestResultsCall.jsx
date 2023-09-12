import { useState } from "react";
import api from "../../api/axiosConfig";
import TestResultsList from "./TestResultsList";

const TestResultsCall = () => {
/* state definition  */
  const [testResults, setTestResults] = useState("");
  const [passed, setPassed] = useState("");

  /* being handlers */
  async function getResults(event) {
    event.preventDefault();
    await api.post("/results/passed", {
      testResults: testResults,
    }).then(response => {
      setPassed(response.data.passed);
    }, {
      auth: {
        username: 'user',
        password: 'taptestpassword'
      }
    });
    
  }

  async function reset() {
    // reset state
    setTestResults("");
  }
  /* end handlers */

/* jsx */
  return (
    <div className="container mt-4">
      <form>
        <div className="form-group my-2">
          <label>Test Results</label>
          <textarea 
            rows="15" 
            cols="75" 
            className="form-control"
            value={testResults}
            onChange={e => setTestResults(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary m-4" onClick={getResults}>
            Submit
          </button>
          <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => reset()}
                >
                  Reset
                </button>
        </div>
      </form>
      <TestResultsList
        passed={passed}
      />
    </div>
  );
};

export default TestResultsCall;