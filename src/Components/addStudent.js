import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../baseApp";
import { AppState } from "../Context/AppProvider";

export default function AddStudent() {
    const { student, setStudent } = AppState();
    const history = useHistory();
  
    const [id, setIdx] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [standard, setStandard] = useState("");

    const newData ={
        id,
        name,
        email,
        class:standard
    }

    const addStudent = (e)=>{
        e.preventDefault()
        setStudent([...student,newData])
        history.push("/student")

    }
    

  return (
    <BaseApp>
      <div>
        <form className="form">
          <input
            type="number"
            placeholder="ID"
            value={id}
            onChange={(event) => setIdx(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Standard"
            value={standard}
            onChange={(event) => setStandard(event.target.value)}
            required
          />
          <button type="submit" onClick={addStudent} >
            Add
          </button>
        </form>
      </div>
    </BaseApp>
  );
}
