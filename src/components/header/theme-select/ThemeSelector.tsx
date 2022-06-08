
import { useTheme } from '../../../hooks/useTheme'
import { CalculatorTheme } from '../../../utils/CalculatorTypes'
import './ThemeSelector.scss'

const ThemeSelector = (props: {setter: any}) => {
    const {theme, allThemes, setMode } = useTheme()

    const themeSwitcher = (selectedTheme: CalculatorTheme) => {
        console.log(selectedTheme);
        setMode(selectedTheme);
        props.setter(selectedTheme);
    };

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
                    <input 
                        type='radio' 
                        name="theme" 
                        id="theme-1" 
                        className="radio-theme" 
                        value="1" 
                        onChange={() => themeSwitcher(allThemes.data.one)}
                        checked={theme.id === 'theme1'} />    
                    <input 
                        type='radio' 
                        name="theme" 
                        id="theme-2" 
                        className="radio-theme" 
                        value="2" 
                        onChange={() => themeSwitcher(allThemes.data.two)} 
                        checked={theme.id === 'theme2'} />
                    <input 
                        type='radio' 
                        name="theme" 
                        id="theme-3" 
                        className="radio-theme" 
                        value="3" 
                        onChange={() => themeSwitcher(allThemes.data.three)}
                        checked={theme.id === 'theme3'} />
                    <div className="switch-indicator"></div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSelector
