const Pomo = () =>{

    let getSeconds =  document.getElementsByClassName('seconds')
    let getTens =  document.getElementsByClassName('tens')
    console.log(getSeconds.innerHTML)
    const startTimer = () =>{
        setInterval(updateTime, 1000)
    }

    const resetTime = () =>{
        getSeconds[0].innerHTML = "00"
        getTens[0].innerHTML = "00"
        let x = window.prompt("Enter Minutes")
        let y = window.prompt("Enter Seconds")
        getSeconds[0].innerHTML = y
        getTens[0].innerHTML = x
    }

    const clearTime = () =>{
        clearInterval(updateTime)
        getSeconds[0].innerHTML = "00"
        getTens[0].innerHTML = "00"
        resetTime()
        
    }

    const backToDefault = () =>{
        clearInterval(updateTime)
        getTens[0].innerHTML = 25 
        getSeconds[0].innerHTML = '00'
    }

    const updateTime = () =>{
        let seconds = parseInt(getSeconds[0].innerHTML)
        let tens = parseInt(getTens[0].innerHTML)
        
        seconds -= 1
        if(seconds === 0 && tens ===0){
            alert("take a break, you earned")
            backToDefault()
        }else{
            if(seconds < 0){
                getSeconds[0].innerHTML = "59"
                getTens[0].innerHTML = tens - 1
            }else{
                if(seconds < 10){
                    getSeconds[0].innerHTML = '0' + seconds.toString()
                }else{
                    getSeconds[0].innerHTML = seconds
                }
            }
        }
        
    }

    return(
        <div className = "pomobox">
            <div className = "wrapper">
                <div className = "timeflex">
                    <span className = "tens">25</span>
                    <span>:</span>
                    <span className = "seconds">00</span>   
                </div>
                <div className = "buttonflex">
                    <button className="btn-start" onClick= {startTimer}>Start</button>
                    <button className="btn-reset" onClick = {clearTime}>Reset</button>
                </div>
            </div>
        </div>
    )

}

export default Pomo