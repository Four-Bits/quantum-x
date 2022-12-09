import { useState } from "react"
import TaskCard from "./TaskCard"

const Task = () =>{
    const [lst_1, setLst_1] = useState([])
    const [lst_2, setLst_2] = useState([])
    const [lst_3, setLst_3] = useState([])

    const click1 = () =>{
        console.log("click1")
        let temp_input = window.prompt("Enter Task", "")
        setLst_1([...lst_1, temp_input])
    }
    const click2 = () =>{
        console.log("click1")
        let temp_input = window.prompt("Enter Task", "")
        setLst_2([...lst_2, temp_input])
    }
    const click3 = () =>{
        console.log("click1")
        let temp_input = window.prompt("Enter Task", "")
        setLst_3([...lst_3, temp_input])
    }
    const done = (e) =>{
        let temp_lst = lst_1.filter(item => item !== e)
        setLst_1([temp_lst])
        setLst_2([...lst_2, e])
    }

    const undone = (e) =>{
        let temp_lst = lst_2.filter(item => item !== e)
        setLst_2([temp_lst])
        setLst_1([...lst_1, e])
    }
    const notedel = (e) =>{
        let temp_lst = lst_3.filter(item => item !== e)
        setLst_3([temp_lst])
    }



    return(
        <div className = "taskbox">
            <div className = "todobox">
                <div className = "todoNav">
                    <div>Todo</div>
                    <button className = "btn-todo" onClick={click1}>+</button>
                </div>
                {lst_1.map((item) => {
                    return(<TaskCard text = {item} btn = {() => {done(item)}}/>)
                })}
            </div>
            <div className = "donebox">
                <div className = "doneNav">
                    <div>Done</div>
                    <button className = "btn-done" onClick={click2}>+</button>
                </div>
                {lst_2.map((item) => {
                    return(<TaskCard text = {item} btn = {() => {undone(item)}}/>)
                })}
            </div>
            <div className = "notesbox">
                <div className = "notesNav">
                    <div>Notes</div>
                    <button className = "btn-todo" onClick={click3}>+</button>
                </div>
                {lst_3.map((item) => {
                    return(<TaskCard text = {item} btn = {() => {notedel(item)}}/>)
                })}
            </div>
        </div>
    )
}

export default Task