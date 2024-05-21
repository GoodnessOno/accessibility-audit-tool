import React, { useState } from 'react';
import { Urlinput, Auditresults } from './components';
import axios from 'axios';

function App() {
  const [results, setResults] = useState(null);

  const handleAudit = async (url) => {
    try {
      const response = await axios.post('/api/audit', { url });
      setResults(response.data);
    } catch (error) {
      console.error('Error performing audit:', error);
    }
  };

  return (
    <div>
      <Urlinput onSubmit={handleAudit} />
      <Auditresults results={results} />
         </div>
       );
     }

     export default App;
     
