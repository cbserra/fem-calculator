
import './ThemeSelector.scss'

const ThemeSelector = () => {
    return (
        <div className='theme-selector-container'>
            <span>THEME</span>
            <div className="theme-form">
            <div className="labels">
                <label htmlFor="theme-1">1</label>
                <label htmlFor="theme-2">2</label>
                <label htmlFor="theme-3">3</label>
            </div>
            <div className="buttons">
                <input type='radio' name="theme" id="theme-1" className="radio-theme" value="1" />    
                <input type='radio' name="theme" id="theme-2" className="radio-theme" value="2" />
                <input type='radio' name="theme" id="theme-3" className="radio-theme" value="3" />
                <div className="switch-indicator"></div>
            </div>
            </div>
        </div>
    )
}

export default ThemeSelector