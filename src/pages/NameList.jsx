import React, { useState } from 'react'; 
function NameList() { 
const names = ['Apple', 'Banana', 'Cherry', 'Mango']; 
const [selectedName, setSelectedName] = useState(null); 
const handleClick = (name) => { 
setSelectedName(name); 
}; 
return ( 
<div 
style={{ 
maxWidth: '300px', 
margin: '40px auto', 
padding: '20px', 
border: '1px solid #ccc', 
borderRadius: '8px', 
}} 
> 
<h3>Name List</h3> 
<ul style={{ listStyle: 'none', padding: 0 }}> 
{names.map((name, index) => ( 
<li 
key={index} 
onClick={() => handleClick(name)} 
style={{   
padding: '10px', 
marginBottom: '5px', 
border: '1px solid #aaa', 
borderRadius: '4px', 
cursor: 'pointer', 
backgroundColor: name === selectedName ? '#f0f8ff' : '#fff', 
}} 
> 
{name} 
</li> 
))} 
</ul> 
{selectedName && ( 
<p style={{ marginTop: '20px' }}> 
You clicked on: <strong>{selectedName}</strong> 
</p> 
)} 
</div> 
); 
} 
export default NameList;