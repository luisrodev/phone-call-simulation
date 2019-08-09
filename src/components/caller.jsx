import React from 'react';

const Caller = ({makeCall, hangUpCall, inCall}) => (
    <div>
        {inCall ? <p>Ya esta en llamada</p> : <p>Disponible para llamar</p>}
        <h2>Hello i am the caller</h2>
        {inCall ? <button onClick={hangUpCall}> Terminar llamada </button>
            : <button onClick={makeCall}> Make a call </button>}
    </div>
);

export default Caller;
