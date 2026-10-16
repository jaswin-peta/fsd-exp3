import React, { useState } from 'react'; function SimpleForm() { 
const [name, setName] = useState(''); 
const [submitted, setSubmitted] = useState(false); const handleChange = (e) => { 
setName(e.target.value); // update name as user types 
}; 
const handleSubmit = (e) => { e.preventDefault(); // prevent page reload 
setSubmitted(true); // show submitted message 
}; 
return ( 
<div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', 
borderRadius: '8px' }}> 
<h2>Simple Form</h2> 
{submitted ? ( 
<p>Hello, {name}! Your form has been submitted.</p> 
) : ( 
<form onSubmit={handleSubmit}> 
<label>Your Name:</label><br /> 
<input 
type="text" value={name} onChange={handleChange} required 
style={{ width: '100%', padding: '8px', marginTop: '8px' }} 
/><br /><br /> 
<button type="submit" style={{ padding: '8px 16px' }}>Submit</button> 
</form> 
)} 
</div> 
); 
} 
export default SimpleForm;