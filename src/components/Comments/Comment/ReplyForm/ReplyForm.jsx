import { useState } from 'react';
import './ReplyForm.css';
import { validateCommentForm } from '../../../../utils/validation.js';

export default function ReplyForm({ parentCommentId, onAddReply, onCancel }) {
    const [replyData, setReplyData] = useState({
        name: '',
        email: '',
        phone: '',
        text: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReplyData(prev => ({
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

        const formErrors = validateCommentForm(replyData);

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        onAddReply(parentCommentId, replyData);

        setReplyData({
            name: '',
            email: '',
            phone: '',
            text: ''
        });

        setErrors({});
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className='reply-form'>
            <span className="reply-form-title">Написать ответ</span>

            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    value={replyData.name}
                    onChange={handleChange}
                    className="reply-input"
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Почта"
                    value={replyData.email}
                    onChange={handleChange}
                    className="reply-input"
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={replyData.phone}
                    onChange={handleChange}
                    className="reply-input"
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div>
                <textarea
                    name="text"
                    placeholder="Ваш ответ"
                    value={replyData.text}
                    onChange={handleChange}
                    className="reply-textarea"
                />
                {errors.text && <span className="error-text">{errors.text}</span>}
            </div>

            <div className="reply-buttons">
                <button type="submit" className="reply-submit">Ответить</button>
                <button type="button" onClick={onCancel} className="reply-cancel">Отменить</button>
            </div>
        </form>
    );
}