import React, { useRef, useState } from "react";
import EntryList2 from "./EntryList2"
import "../css/style.css"




                  
const EntryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [] 

  const TaskForm = () => {
   
    const [entryList2, setEntryList2] = useState(EntryInfo);
    console.log(EntryList2)

    const dateRef = useRef(); 
    const messageRef = useRef(); 

    const onFormSubmit = (e) => {
      e.preventDefault();

      
      const entryObject = { 
          id: Date.now(),
          date: dateRef.current.value,   
          msg: messageRef.current.value,
      }
      console.log(entryObject)
       
    
      setEntryList2([...entryList2, entryObject]);                                  
      localStorage.setItem("entryDetails", JSON.stringify(entryList2));
      console.log(entryList2);


      dateRef.current.value = "";   
      messageRef.current.value = "";
  };

  return (
    <div className="position border">
        <form onSubmit={onFormSubmit}>
            <div className="dflex">
              <label>Task</label>
              <br/>
              <label className="marginleft2">Date</label>
              <input type="text" name="text" ref={dateRef} />
            </div>
            <br/>
              <textarea 
                  name="message" 
                  cols="30" 
                  rows="10" 
                  ref={messageRef}>
              </textarea>
            <br />
            <input className="btn" type="submit" value="save" name="submit" />
        </form>
        <EntryList2 entry={entryList2}/>
    </div>
  )
}

export default TaskForm