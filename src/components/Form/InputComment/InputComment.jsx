import './InputComment.css'

export default function InputComment({ children, type, name, value, onChange }){
    return(
        <>
            <div className="form-floating">
                <input 
                    type={type} 
                    className="form-control" 
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