import logo from "../assets/logo.png"

const Menu = () =>{
    return(
        <div className = "navbar">
            <img className = "logo" src={logo} alt="image not found"/>
            <nav>
                <ul className = "nav_link">
                    <li><a href="#">Quest</a></li>
                    <li><a href="#">Pomodoro</a></li>
                </ul>
            </nav>
            <a className = "cta" href="#"><button>About Us</button></a>

        </div>
    );
}

export default Menu