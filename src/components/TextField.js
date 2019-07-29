import React from 'react'

export default function (props) {
    return (
        <div>
            <label className={props.className} htmlFor={props.htmlFor}>{props.name}</label>
            <text type={props.type} id={props.id} className={props.iClassName} placeHolder={props.placeHolder}
                value={props.value} onChange={props.onChange}
            />
        </div>
    )
}
