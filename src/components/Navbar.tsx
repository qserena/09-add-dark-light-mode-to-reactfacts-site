import smallReactLogo as img from '../images/react-icon-small.png'

export type NavbarProps = {
    darkMode: boolean
    toggleDarkMode: () => void
}

export function Navbar(props: NavbarProps) {
    return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img
                className="nav--logo_icon"
                alt="Small React logotype"
                src={smallReactLogo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>

            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div className="toggler--slider" onClick={props.toggleDarkMode}>
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}
