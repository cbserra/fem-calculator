import ThemeSelector from "./theme-select/ThemeSelector"
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <h1>calc</h1>
            <nav>
                <ThemeSelector />
            </nav>
        </header>
    );
}

export default Header