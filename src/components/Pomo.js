const Pomo = () =>{
    return(
        <div className = "pomobox">
            <div className = "wrapper">
                <div className = "timeflex">
                    <span className = "seconds">00</span>
                    <span className = "tens">00</span>
                </div>
                <div className = "buttonflex">
                    <button className="btn-start">Start</button>
                    <button className="btn-reset">Reset</button>
                </div>
            </div>
        </div>
    )
    let seconds = 0;
    let tens = 0;
    let getSeconds = document.getElementsByClassName("seconds")
    let getTens = document.getElementsByClassName("tens")
    let btnStart = document.getElementsByClassName("btn-start")
    let btnReset = document.getElementsByClassName("btn-reset")

    console.log(getSeconds.innerHTML)
}

export default Pomo