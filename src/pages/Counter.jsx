import React, { useState } from "react"; 
export default function Counter() { const [count, setCount] = useState(0); 
return ( 
<div className="p-6 text-center"> 
<h2 className="text-xl mb-4">Counter: {count}</h2> 
<button 
onClick={() => setCount(count + 1)} 
className="bg-blue-500 text-white px-4 py-2 rounded" 
> 
Increase 
</button> 
</div> 
); 
}