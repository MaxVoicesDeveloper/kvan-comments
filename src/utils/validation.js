
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/[^\d+\-()]/g, '');
    return cleanPhone.replace(/[^\d]/g, '').length >= 10;
};

export const validateName = (name) => {
    return name.trim().length >= 2;
};

export const validateText = (text) => {
    return text.trim().length >= 5;
};

export const validateCommentForm = (formData) => {
    const errors = {};

    if (!validateName(formData.name)) {
        errors.name = 'Имя должно быть минимум 2 символа';
    }

    if (!validateEmail(formData.email)) {
        errors.email = 'Некорректный email';
    }

    if (!validatePhone(formData.phone)) {
        errors.phone = 'Некорректный телефон (минимум 10 цифр)';
    }

    if (!validateText(formData.text)) {
        errors.text = 'Комментарий должен быть минимум 5 символов';
    }

    return errors;
};