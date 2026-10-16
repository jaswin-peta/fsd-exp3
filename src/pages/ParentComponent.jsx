import React, { useState } from 'react';
import MessageDisplay from './MessageDisplay'; 
function ParentComponent() { 
const [message, setMessage] = useState('Hello from the parent component!'); 
return ( 
<div style={{ padding: '40px', textAlign: 'center' }}> 
<h1>React Props Example</h1> 
<MessageDisplay message={message} /> 
</div> 
); 
} 
export default ParentComponent;