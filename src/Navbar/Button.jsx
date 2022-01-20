import React from 'react'
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <div>
            <span className="underline font-sans text-lg">
                <Link to="/">{props.page}</Link>
            </span>
        </div>
    )
}

export default Button
