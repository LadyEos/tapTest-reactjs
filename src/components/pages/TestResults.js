import React from 'react'
import TestResultsCall from "./TestResultsCall";

const TestResults = () => {
    return (
        <React.Fragment>
            <div className='div-body'>
                <section className="content-container">
                <div>
                    <h1 className="text-center">Test Results</h1>
                    <TestResultsCall/>
                </div>
                </section>
            </div>
        </React.Fragment>
    )
}

export default TestResults;