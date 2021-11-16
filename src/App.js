
import { useState } from 'react';
import './App.css';
import ReactMarkdown from "react-markdown";
function App() {

  const [markDown, setMarkDown] = useState('MarkDown Previewer');

  return (
    <div className= "container">
      
       <textarea value={markDown} onChange={e => {setMarkDown(e.target.value)}}></textarea>


      <ReactMarkdown  className="preview" >{markDown}</ReactMarkdown>


    </div>

  );
}

export default App;
