import React, { createContext, useContext, useState } from "react";
import { StudentData, TeacherData} from "../data/studentData";

const AppContext = createContext()

export default function AppProvider({children}){
    const[student,setStudent] =useState(StudentData)
    const[teacher,setTeacher] = useState(TeacherData)
    return(
        <AppContext.Provider
        value={{
            student,
            setStudent,
            teacher,
            setTeacher
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const AppState=()=>{
    return useContext(AppContext)
}