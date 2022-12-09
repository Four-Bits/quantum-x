const TaskCard = (props) =>{
    return(
        <div className = "taskCardBox">
            <div className = "taskCard">{props.text}</div>
            <button onClick={props.btn} className="taskButton">-</button>
        </div>
            )
}

export default TaskCard