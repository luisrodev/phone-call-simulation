import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Caller = ({makeCall, hangUpCall, inCall}) => (
    <div>
        {inCall ? <p>Ya esta en llamada</p> : <p>Disponible para llamar</p>}
        <h2>Hello i am the caller</h2>
        {inCall ? <Button icon labelPosition='right' color='red' 
            onClick={hangUpCall} >
                Terminar llamada
                <Icon name='call' />
            </Button>
           :<Button icon labelPosition='left' color='green' onClick={makeCall} >
                Make a call
                <Icon name='call' />
            </Button>}
    </div>
);

export default Caller;
