import logo from "../assets/logo.png"

const Menu = () =>{
    const visit = () =>{
        window.location.href = 'https://ps-about.netlify.app/'
    }
    return(
        <div className = "navbar">
            <img className = "logo" src={logo} alt="image not found"/>
            <nav>
                <ul className = "nav_link">
                    <li><a href="#">Tasks</a></li>
                    <li><a href="#">Pomodoro</a></li>
                </ul>
            </nav>
            <a className = "cta"  onClick={visit}><button>About</button></a>

        </div>
    );
}

export default Menu