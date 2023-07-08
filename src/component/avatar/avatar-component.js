import './avatar.css'
function Avatar () {
    return (
        <div className="avatar">
        <svg width="100%" height="100%" viewBox="0 0 100 100" >

            <defs>
                <clipPath id="circleView">
                    <circle cx="50" cy="50" r="50" />
                </clipPath>
            </defs>

                </svg>

        </div>
    )
}

export default Avatar;