import logo from "../assets/logo.png"

const Menu = () =>{
    return(
        <div className = "navbar">
            <img className = "logo" src={logo} alt="image not found"/>
            <nav>
                <ul className = "nav_link">
                    <li><a href="#">Quests</a></li>
                    <li><a href="#">Pomodoro</a></li>
                </ul>
            </nav>
            <a className = "cta" href="#"><button>About</button></a>

        </div>
    );
}

export default Menu