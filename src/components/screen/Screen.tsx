import './Screen.scss'

interface ScreenProps {
    screenTotal: string,
    // setScreenTotal: any,
    // screenRegister: string[],
    // setScreenRegister: any
}

const Screen = (props: ScreenProps) => {

    const screenTotal = props.screenTotal
    // const setScreenTotal = props.setScreenTotal
    // const screenRegister = props.screenRegister
    // const setScreenRegister = props.setScreenRegister

    return (
        <div className='screen-container'>
            {screenTotal && (
            // <input type={"text"} className='screen-total' value={screenTotal.current} readOnly={true} />
            <div className='screen-total'>
                {screenTotal}
            </div>)}
            {/* {screenRegister && (
            <div className='screen-register'>
                 {screenRegister.length === 0 ? '' : screenRegister.map(value => value)}
            </div>)} */}
        </div>
    )
}

export default Screen