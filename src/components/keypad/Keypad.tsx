import './Keypad.scss'

const Keypad = (props: {keys: JSX.Element[]}) => {
    return (
        <div className="keypad-container">
            {props.keys}
        </div>
    )
}

export default Keypad