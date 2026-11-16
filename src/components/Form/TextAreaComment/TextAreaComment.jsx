import './TextAreaComment.css'

export default function TextAreaComment({ children, name, value, onChange }){
    return(
        <>
            <div className="form-floating floating-area">
                <textarea 
                    className="form-control area" 
                    id={name}
                    name={name}
                    placeholder={children}
                    value={value}
                    onChange={onChange}
                />
                <label htmlFor={name}>{children}</label>
            </div>
        </>
    )
}