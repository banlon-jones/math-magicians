import React from 'react';
import Navbar from '../../components/navbar/navbar';

function Homepage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1> Welcome to our Calculator website </h1>
        <p>
          is typically a portable electronic device used to perform calculations,
          ranging from basic arithmetic to complex mathematics.
          The first solid-state electronic calculator was created in the early 1960s.
          Pocket-sized devices became available in the 1970s, especially after the Intel
          4004, the first microprocessor,
          was developed by Intel for the Japanese calculator company Busicom.
          They later became used commonly within the petroleum industry (oil and gas).
        </p>
      </div>
    </div>
  );
}

export default Homepage;
