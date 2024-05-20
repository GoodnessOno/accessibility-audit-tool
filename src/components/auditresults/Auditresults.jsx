import React from 'react';
import './auditresults.css';

function Auditresults({ results }) {
  if (!results) {
    return null;
  }

  return (
    <div>
      <h2>Audit Results</h2>
      {results.violations.map((violation, index) => (
        <div key={index}>
          <h3>{violation.description}</h3>
          <ul>
            {violation.nodes.map((node, nodeIndex) => (
              <li key={nodeIndex}>{node.html}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Auditresults;

