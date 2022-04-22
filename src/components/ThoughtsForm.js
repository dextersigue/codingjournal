import React, { useRef, useState } from "react";
import EntryList from "./EntryList"
import "../css/style.css"




                  
const EntryInfo = (localStorage.getItem("entryDetails")) ? JSON.parse(localStorage.getItem("entryDetails")) : [] 

  const ThoughtsForm = () => {
   
    const [entryList, setEntryList] = useState(EntryInfo);
    console.log(EntryList)

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
       
    
      setEntryList([...entryList, entryObject]);                                  
      localStorage.setItem("entryDetails", JSON.stringify(entryList));
      console.log(entryList);


      dateRef.current.value = "";   
      messageRef.current.value = "";
  };

  return (
    <div>
        <h4>My Coding Journal</h4>
        <form onSubmit={onFormSubmit} className="border">
          <div className="dflex">
            <label>Thoughts for the Day</label>
            <br/>
            <label className="marginleft">Date</label>
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
        <EntryList entry={entryList}/>
    </div>
  )
}

export default ThoughtsForm