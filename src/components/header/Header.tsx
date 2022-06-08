import ThemeSelector from "./theme-select/ThemeSelector"
import './Header.scss'

const Header = (props: {setter: any}) => {
    return (
        <header className="header">
            <h1>calc</h1>
            <nav>
                <ThemeSelector setter={props.setter} />
            </nav>
        </header>
    )
}

export default Header