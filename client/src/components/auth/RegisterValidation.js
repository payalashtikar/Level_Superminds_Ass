function validate(values) {
    const errors = {};
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (!values.username.trim()) {
        errors.username = "Username should not be empty.";
    } else {
        errors.username = "";
    }

    if (!values.email.trim()) {
        errors.email = "Email should not be empty.";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format.";
    } else {
        errors.email = "";
    }

    if (!values.password.trim()) {
        errors.password = "Password should not be empty.";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.";
    } else {
        errors.password = "";
    }

    return errors;
}

export default validate;
