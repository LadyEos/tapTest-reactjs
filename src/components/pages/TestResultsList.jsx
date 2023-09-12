import React from "react";

const TestResultsList = ({ passed}) => {
  return (
    <div>
      <div>Number of examinees that passed: <span>{passed}</span> </div>
    </div>
    
  );
};

export default TestResultsList;