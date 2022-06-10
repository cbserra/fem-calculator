import './Screen.scss'

interface ScreenProps {
    screenTotal: string,
    flash: boolean
}

const Screen = (props: ScreenProps) => {

    const screenTotal = props.screenTotal

    return (
        <div className='screen-container'>
            {screenTotal && (
                <div 
                    className={`screen-total${props.flash ? ' flash' : ''}`}
                >
                {screenTotal}
            </div>
            )}
        </div>
    )
}

export default Screen