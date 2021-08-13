import logo from './logo.svg';
import './App.css';
import {React, useRef, useState} from "react" 
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const fileInput = useRef(null)
  const [empId,setEmpId] = useState("")
  const handleUpload = async (e) =>{
    if (e.target.files) {
      let file = e.target.files;
      const uploadData = new FormData();
      uploadData.append('empId', empId);
      uploadData.append('file', file[0]);


      console.log('uploadData',uploadData)
      var response = await axios.post('', uploadData, {
        headers: {
          'Content-type': 'multipart/form-data'
        },

      })
    }
  }
  return (
    <div className="App">
     <div className="row">
     <div className="col-md-6">
     <input
            type="text"
            value={empId}
            onChange={(e)=>setEmpId(e.value)}
         />
     </div>
       <div className="col-md-6">
       <input
            type="file"
            accept='.doc, .docx, .pdf'
            id="file"
            ref={fileInput}
            multiple={false}
            onChange={(e) => {
              handleUpload(e)
            }}
            hidden
          />
          <Button variant="primary" onClick={e => {
           fileInput.current && fileInput.current.click()
            console.log('')
          }}>Upload</Button>
       
       </div>

     </div>
    </div>
  );
}

export default App;
