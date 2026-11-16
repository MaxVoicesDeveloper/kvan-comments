import { useState } from 'react';
import './Form.css'
import InputComment from './InputComment/InputComment'
import TextAreaComment from './TextAreaComment/TextAreaComment'
import { validateCommentForm } from '../../utils/validation.js';

export default function Form ({ onAddComment, isOpen}){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formErrors = validateCommentForm(formData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        onAddComment(formData);

        setFormData({
            name: '',
            email: '',
            phone: '',
            text: ''
        });

        setErrors({});
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={`form-comments ${isOpen ? "open" : ""}`}>
                <span className="title-comments"><div className='indicator'></div>Оставить комментарий</span>
                
                <div>
                    <InputComment 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    >
                        Имя
                    </InputComment>
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div>
                    <InputComment 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    >
                        Почта
                    </InputComment>
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div>
                    <InputComment 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    >
                        Телефон
                    </InputComment>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div>
                    <TextAreaComment 
                        name="text"
                        value={formData.text}
                        onChange={handleChange}
                    >
                        Комментарий
                    </TextAreaComment>
                    {errors.text && <span className="error-text">{errors.text}</span>}
                </div>

                <button type="submit" className="send">Отправить</button>
            </form>
        </>
    )
}